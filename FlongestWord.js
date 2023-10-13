function longest(string)
{
    let word;
    let arr = string.split(' ');
    let arr1 = arr[0].length;
    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i].length > arr1)
        {
            arr1 = arr[i].length;
            word = arr[i];
        }
    }
    console.log("The Length of word : ",arr1);
    return word;
}

const string = prompt("Enter a string :");
const result = longest(string);

console.log("The longest Word is : ",result);