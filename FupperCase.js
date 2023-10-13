
function UpperCase(string)
{
    return string.split(' ').map(latters => latters.charAt(0).toUpperCase() + latters.slice(1)).join(' ');
}

const string = prompt("Enter a string : ");
const result = UpperCase(string);

console.log("After convert string : ",result);