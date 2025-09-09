use std::ffi::c_ulonglong;

use crate::add;

// ensures that the function name is not encoded in the compiled library
#[unsafe(no_mangle)]
pub extern "C" fn add_ffi(left: c_ulonglong, right: c_ulonglong ) -> c_ulonglong  {
    add(left as u64, right as u64)
    .try_into().unwrap()
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