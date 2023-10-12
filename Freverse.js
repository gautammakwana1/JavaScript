
function Reverse(number)
{
    const y = parseFloat(number.toString().split('').reverse().join(''));
    return y;
}

const numberr = Number(prompt("Enter a number : "));
const reversNum = Reverse(numberr);
console.log("After Reverse No : ",reversNum);