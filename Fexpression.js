// Function by Expression 

const x = function () {
        const a = Number(prompt("Enter a value : "));

        if(a%5 === 0)
        {
            return console.log(a," is divisible by 5.");
        }
        else{
            return console.log(a," is not divisible by 5.");
        }
}

x();