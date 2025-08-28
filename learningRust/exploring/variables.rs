fn main() 
{
    let x = 5_u16;
    let y = 3.14_f32; // for floating points either f32 or f64 --- .7 is not applicable but 0.7 is (parser does not want to differentiate '.' with method call/field access)
    let ch: char = 'a'; //char is 4 bytes --- '' is not permitted 

    //compound type 
    let info: (u8, f32, u64) = (1, 3.3, 999); // tuples - fixed to the size of 12
    let first_idx = info.0;

    let arr = [1,2,3];
    let arr_same: [u8, 3] = [1,2,3]; // fixed to the size of 32 
    let arr_3 = [0; 3]; // 3, 3, 3

    if num == 5 {
        msg = "five";
    } else if num == 4 {
        msg = "four";
    } else {
        msg = "three";
    }

    msg = if num == 5 {
        "five"
    } else if num == 4 {
        "four"
    } else {
        "three"
    }

    'bob:loop {
        loop {
            break 'bob;
        }
    }

    for num in [1, 2, 3].iter() {
        // ...
    }
    for num in 0..50 {
        // ...
    }
    for num in 0..=50 {
        // ...
    }

    let array_p = [(1,2), (3,4)];
    for (x,y) in array_p.iter() {
        // ...
    }


    // there are 6 types of strings in rust lib
    // 
    // both barrowed string slice and string contain pointer to some bytes and a length 
    // this is a barrowed string slice -- it cannot be modified || it is a subset of the String type
    let barrowed_string_type = 'str'; 
    // this is a String -- it can be modified 
    // Strings also contian a capacity that may be higher than what is used
    let string_type1 = 'str'.to_string();
    let string_type2 = String::from('str');


    // you cannot directly index a String with [index], Rust strings are UTF-8 encoded and a single char might take more than one byte
    let s = String::from("hello");
    let slice = &s[0..2]; // takes bytes 0 and 1
    let ch = s.chars().nth(1); // gets the second char - e
    let b = s.as_bytes()[1]; // 101 (ASCII value of 'e') 
    println!("{}", slice); // prints "he"
}
