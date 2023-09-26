// series -> 1, 4, 9, 16, 25, 36, 49, 64, 81, 100

let i,n,x= "";
n = Number(prompt("Enter A value :"));
for(i=1;i<=n;i++)
{
    x += i*i+" ";
}
console.log(x);