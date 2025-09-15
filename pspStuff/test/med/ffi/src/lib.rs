mod wrapper;

pub fn add(left: u64, right: u64) -> u64 {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}

pub fn do_something_to_string(input: &str) -> String {
    format!("You gave me: {}", input)
}

pub struct Point {
    pub x: f64,
    pub y: f64,
}

impl Point {
    pub fn distance_to(&self, p2: &Point) -> f64 {
        let dx = (p2.x - self.x).abs();
        let dy = (p2.y - self.y).abs();
        (dx * dx + dy * dy).sqrt()
    }
}