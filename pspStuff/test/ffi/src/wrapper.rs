use std::ffi::c_ulonglong;
use crate::add;

// ensures that the function name is not encoded in the compiled library
#[no_mangle]
pub extern "C" fn add_ffi(left: c_ulonglong, right: c_ulonglong ) -> c_ulonglong  {
    add(left as u64, right as u64)
    .try_into()
    .expect("Addition result exceeds c_ulonglong range")
}

// pub extern "C" — declares that the function is part of the public interface, and uses the C calling conventions

// add(left as usize, right as usize) — We need to explicitly cast our inputs from the C types into Rust types.

/*
* .try_into().unwrap() — 
* Our library’s add function returns a Rust type, and we need to convert these into C types. 
* This will panic if the conversion isn’t possible, so make sure to only use compatible types and test your interface thoroughly. 
* In production code, you might want to explore safer ways of handling this, for example by returning an Option or Result.
*/

/*
* The library now includes the function add_ffi that we can call externally. 
* Unfortunately, MATLAB doesn’t know how to call this function. 
* For that information, it expects a C header file with the function signatures. 
* look for the build.rs
*/


use std::ffi::{c_char, CStr, CString};
use crate::do_something_to_string;

#[no_mangle]
pub extern "C" fn do_something_to_string_ffi(input: *const c_char) -> *mut *mut c_char {
    let input_str = match unsafe { CStr::from_ptr(input) }.to_str() {
        Ok(s) => s,
        Err(_) => {
            eprintln!("Invalid UTF-8 in input");
            return std::ptr::null_mut();
        },
    };

    let output = do_something_to_string(input_str);

    let c_string = CString::new(output).expect("Could not convert output to CString");
    let box_pointer = Box::into_raw(Box::new(c_string.into_raw()));
    box_pointer
}

#[no_mangle]
pub extern "C" fn free_string_pointer(pointer: *mut *mut c_char) {
    unsafe {
        let boxed_pointer = Box::from_raw(pointer);
        let c_string = CString::from_raw(*boxed_pointer);
        drop(c_string);
        drop(boxed_pointer);
    }
}


use crate::Point;

#[repr(C)]
pub struct PointFFI {
    pub x: f64,
    pub y: f64,
}

#[no_mangle]
pub extern "C" fn distance_between_ffi(p1: &PointFFI, p2: &PointFFI) -> f64 {
    let p1 = &Point {
        x: p1.x,
        y: p1.y,
    };
    let p2 = &Point {
        x: p2.x,
        y: p2.y,
    };
    p1.distance_to(p2)
}