use std::slice;
use std::ffi::c_void;
use std::ffi::CString;

extern "C" {
    fn engOpen(startcmd: *const i8) -> *mut c_void;
    fn engEvalString(ep: *mut c_void, command: *const i8) -> i32;
    fn engClose(ep: *mut c_void) -> i32;
}

pub trait MatlabEngine {
    fn get_file_from_matlab(&self, path: &str) -> Result<Vec<f64>, String>;
    fn display_graph(&self, data: &[f64]);
    fn open() -> Self;
    fn run(&self, command:&str);
    fn close(&self);
}

struct Func;

impl Matlab for Func {
    fn get_file_from_matlab(&self) {
        println!("Getting file from MATLAB...");
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn call_from_c() {
    println!("Just called a Rust function from C!");
}