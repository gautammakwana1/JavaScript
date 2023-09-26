let i,a=1,b=1,c,x="";
let n =Number(prompt("Enter Your Value :"));
console.log(a);
console.log(b);
for(i =1; i<=n; i++)
{
    c = a+b;
    x += c + " ";
    a = b;
    b = c;
}
console.log(x);