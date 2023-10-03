smallest();

function smallest()
{
    let a , b ;
    a = Number(prompt("Enter A value : "));
    b = Number(prompt("Enter B value : "));

    if(a>b)
    {
        console.log(b," is smallest number .");
    }
    else
    {
        console.log(a," is smallest number .");
    }
}