function* generate(a,b,c)
{
    if(a%4 == 0)
    {
        yield console.log(a," is leap year.");
    }
    if(b%4 == 0)
    {
        yield console.log(b," is leap year")
    }
    if(c%4 == 0)
    {
        yield console.log(c," is leap year");
    }
}

let a = Number(prompt("Enter a Year : "));
let b = Number(prompt("Enter b Year : "));
let c = Number(prompt("Enter c Year : "));

let leap_year = generate(a,b,c);

console.log(leap_year.next().value);
console.log(leap_year.next().value);
console.log(leap_year.next().value);