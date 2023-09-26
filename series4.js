let i, x="",a=1;
let n = Number(prompt("Enter Your value :"));
for(i=1;i<= n;i++)
{
    x += i*a+" ";
    a = a*2; 
}
console.log(x);