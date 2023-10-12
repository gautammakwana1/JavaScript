let x = prompt("Enter a string : ");

function Alphabet(x)
{
    const y = x.toString().split('').sort().join('');
    return y;
}

const Inorder = Alphabet(x);
console.log("IN Alphabetical Order : ",Inorder);