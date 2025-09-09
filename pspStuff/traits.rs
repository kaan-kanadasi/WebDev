use std::slice;
use std::ffi::c_void;

pub trait Matlab {
    fn get_file_from_matlab(self);

    fn set_parameter_in_matlab(self);

    fn display_graph_static(self);

    fn display_graph_dynamic(self);
}

struct Func;

impl Matlab for Func {
    fn read_file_from_matlab() 
    {
        println!("get");
    }

    fn change_parameter_in_matlab() 
    {
        println!("get");
    }

    fn display_graph_static() 
    {
        println!("get");
    }

    fn display_graph_dynamic() 
    {
        println!("get");
    }
}