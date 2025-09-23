extern crate cbindgen;

// DOC - https://github.com/mozilla/cbindgen/blob/master/docs.md#libc-types

use std::env;

fn main() {
    let crate_dir = env::var("CARGO_MANIFEST_DIR").unwrap();

    cbindgen::Builder::new()
      .with_crate(crate_dir)
      .with_language(cbindgen::Language::C)
      .with_no_includes()
      .with_sys_include("stddef.h")
      .generate()
      .expect("Unable to generate bindings")
      .write_to_file(format!("bindings.h"));
}

/*
* One implication of this is that you need to be careful which integer types you use in your FFI wrappers. 
* Specifically, you should use the libc types listed in the DOC (https://github.com/mozilla/cbindgen/blob/master/docs.md#libc-types), 
* and avoid the std and stdint types. That’s why our wrapper used the c_ulonglong type instead of just u64 or usize.
*/