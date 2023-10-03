//  Using a Function of Constructor 

const convert = new Function ("a", "b", "return a * b");

let dollar = Number(prompt("Enter number of dollar : "));
let x = 82;

const a = convert(dollar,x);

console.log("Rupees : ",a);