use std::slice;
use std::ffi::c_void;

pub trait Matlab {
    fn get_file_from_matlab(&self);
    fn set_parameter_in_matlab(&self);
    fn display_graph_static(&self);
    fn display_graph_dynamic(&self);
}

struct Func;

impl Matlab for Func {
    fn get_file_from_matlab(&self) {
        println!("Getting file from MATLAB...");
    }

    fn set_parameter_in_matlab(&self) {
        println!("Setting parameter in MATLAB...");
    }

    fn display_graph_static(&self) {
        println!("Displaying static graph...");
    }

    fn display_graph_dynamic(&self) {
        println!("Displaying dynamic graph...");
    }
}