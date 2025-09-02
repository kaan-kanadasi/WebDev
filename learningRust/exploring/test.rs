fn main() {
    let s = "Hello, world!"; // string literal (&'static str)
    
    // &s = reference to the variable (on stack)
    // s.as_ptr() = pointer to the actual string data
    println!("Address of s (stack): {:p}", &s);
    println!("Address of string data: {:p}", s.as_ptr());
}
