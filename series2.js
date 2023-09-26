// 1,4,3,16,5,36,7,64.....

let i,n,x="";
n = Number(prompt("Enter Your Value :"));
for(i=1;i<=n;i++)
{
    if(i%2 == 0)
    {
        x += i*i+" ";
    }
    else{
        x += i+" ";
    }
}
console.log(x);