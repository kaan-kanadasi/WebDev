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
}