let data = new Map([
    ["option-1",10],
    ["option-2",20],
    ["option-3",30],
    ["option-4",40]
]);
// data.set("option-5",50);
// console.log(data);
// console.log(data.get('option-2'));
// console.log(data.has('option-8'));
// console.log(data.has('option-8'));
// data.delete('option-4');
// console.log(data)
// console.log(data.entries());
// console.log(data.keys());
// console.log(data.values());
// console.log(data.size);


let t = "";
data.forEach(function(values,keys){
    t += keys + " = " + values + "\n";
})

console.log(t);