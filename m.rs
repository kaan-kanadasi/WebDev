use clap::Parser; 
use std::ffi::CString; 
use std::io::{self, stdin, Write};
use matlab_sys::interleaved_complex::*;
use std::path::Path;
use std::ffi::CStr;

/*********************************************************************************************************
 DOC - https://www.mathworks.com/help/matlab/calling-matlab-engine-from-c-programs-1.html?s_tid=CRUX_lftnav
 EX.
    cargo run -- -f Matlab_Test_Functions/rustTestFunction_fib.m -a 20
    cargo run -- -f rustTestFunction_fib.m -a 20 
*********************************************************************************************************/

#[derive(Debug, Parser)] 
#[clap(author, version, about)] 
struct Cli {
    /// Name of the file that we will get the MATLAB code from
    #[arg(short, long)]
    file: String,

    /// num for fibonacci
    #[arg(short, long)]
    arg1: usize,
}

fn main() 
{ 
    let args = Cli::parse(); 
    println!("Opening file named {}", args.file);
    println!("First arg is {}", args.arg1); 
    
    unsafe 
    { 
        // engOpen("") launches MATLAB without a visible desktop. - check engOpen("MATLAB") - engOpen(CString::new("MATLAB").unwrap().as_ptr()); 
        // so all output goes to the buffer you provided with engOutputBuffer
        let eng = engOpen(CString::new("matlab -desktop").unwrap().as_ptr()); //  normally return a pointer 
        if eng.is_null() { panic!("Failed to open MATLAB eng"); } 
        println!("Done opening M-eng"); 

        let func_name = Path::new(&args.file)
            .file_stem().unwrap()
            .to_str().unwrap();

        
        // now when cargo run -- -f Matlab_Test_Functions/rustTestFunction_fib.m -a 20
        // this snippet adds Matlab_Test_Functions absolute path to matlab search path so that matlab can find the file to execute
        if let Some(parent_dir) = Path::new(&args.file).parent() {
            // MATLABs addpath() expects a directory so we get the parent of the file to access the first dir and then use canonicalize() to get full path 
            let abs_dir = if parent_dir.as_os_str().is_empty() //  file has no dir path, so Some(parent_dir) becomes Some("")
            {
                std::env::current_dir().unwrap() // use full absolute path of the current working directory
            } 
            else // there is a parent dir 
            { 
                parent_dir.canonicalize().unwrap() // ex. - addpath('C:/USERS/USERNAME/git/DIRECTORY/FOLDER/FOLDER/Matlab_Test_Functions'); 
            };

            let dir_path = abs_dir.to_str().unwrap().replace("\\", "/"); // On Windows, MATLAB needs forward slashes '/', '\' are treated as escape chars
            
            // use strfind(path, 'PARENT DIR') to check if you added the path correctly in matlab CLI
            if dir_path.is_empty() { panic!("!!! no absolute/parent directory for the MATLAB file !!!"); }  
            let addpath_cmd = format!( // addpath adds folders to matlabs search path if path does not exist 
            "
            if ~contains(path, '{}'), 
                addpath('{}');  
            end
            ", 
            dir_path, dir_path
            );
            println!("Adding path: {}", dir_path);

            let c_check = CString::new(addpath_cmd).unwrap();
            engEvalString(eng, c_check.as_ptr());
        } 
        
        // if fprintf had \n rust would interpert it as a new line before sending to the matlab eng making a synthax err so to escape that we add another \
        let command_str = format!(
            "
            result = {}({}); 
            disp(result);
            fprintf('RUST_OUT:%d\\n', result) 
            ",
            func_name, args.arg1
        );
        let c_command = CString::new(command_str).unwrap();

        let mut buffer = [0i8; 4096]; // buffer to store the result
        engOutputBuffer(eng, buffer.as_mut_ptr(), buffer.len() as i32); // redirect outputs that would normally go to the matlab Command Window into this buffer
        
        engEvalString(eng, c_command.as_ptr());

        let output = CStr::from_ptr(buffer.as_ptr()).to_string_lossy();
        println!("MATLAB output captured in rust buffer: {}", output);

        println!("Press Enter to close MATLAB...");
        io::stdout().flush().unwrap(); // forces stdout to write everyhting to the conolse instead of waiting for the matlab GUI to open
        let mut input = String::new();
        stdin().read_line(&mut input).unwrap();

        println!("...done"); 
        engClose(eng);
    } 
} 
    
/* matlab - array of num plots smth cli writtn in rsut warp rust project that is a cli executable clap crate ffi -> matlab */