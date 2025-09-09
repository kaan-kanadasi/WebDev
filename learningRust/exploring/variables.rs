use std::fs::File;

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

    // if is a 
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


    // OWNERSHIP
    // each value has an owner
    // only one owner
    // value gets dropped if its owner goes out of scope
    // -------------------------------------------------
    let s1 = String::from("abc");
    let s3 = String::from("dfg");
    let s2 = s1;
    println!("{}", s1); // -> error
    let s3 = s2.clone(); // explicitly clone the heap data
    println!("{}", s2); // works because s2 still ownes its data

    let int_x = 5;    // i32 is Copy
    let int_y = int_x;    // x is automatically copied into y
    println!("x = {}, y = {}", x, y); // x is still valid

    // references defualt to immutable even when the data being references is mutable
    let mut ss_false = String:format("fo");
    let mut ss_correct = String:format("fofo");
    ss_false = do_stuff(ss_false);
    ss_correct = do_stuff_ref(&mut ss_correct);
    println!("{}", ss_false) // ERROR -> the value of ss is pased to the function do_stuff and not returning it 
    println!("{}", ss_correct) // works 
    fn do_stuff(ss: String) {
        // smth
    }
    fn do_stuff_ref(ss: &mut String) {
        s.insert_str(0, "Hi, ");
        *s = String:format("foofoo"); // dereferencing
    }


    
    // structs 
    struct RedFox {
        enemy: bool,
        life: u32,
    }

    fn print_noise<T: Noisy>(item: T) {
        println!("{}", item.get_noise());
    }

    trait Noisy for u8 {
        fn get_noise(&self) -> &str;
    }

    impl Noisy for RedFox {
        fn get_noise(&self) -> &str { "meow" }
    }

    print_noise(5_u8);

    // traits can inherit from other traits


    // stuff
    let mut v: Vec<i32> = Vec::new();
    v.push(2);

    let mut h: HashMap<u8, bool> = HashMap::new();
    h.insert(5, true);
    let have_five = h.remove(&5).unwrap();



    // enums
    enum Direction {
    Up,
    Down,
    Left,
    Right,
    }

    enum Option<T> {
        Some(T),
        None,
    }

    let mut x: Option<i32> = None;
    x = Some(5);
    x.is_some(); // true
    x.is_none(); // false

    if let Some(x) = my_variable {
        println!("value is {}", x);
    }

    match my_variable {
        Some(x) => {
            println!("value is {}", x);
        },
        None => {
            println!("no value");
        }
    }

    let x = match my_variable {
        Some(x) => x.squared(),
        None => 42,
    };

    #[must_use]
    enum Result<T, E> {
        Ok(T),
        Err(E),
    }

    let res = File::open("foo");
    math res {
        Ok(f) => {},
        Err(e) => {},
    }
}