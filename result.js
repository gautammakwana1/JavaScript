let  guj,eng,acc,stat,marks,total,per,grade;
guj = Number(prompt("Enter your Gujarati :"));
console.log("Gujarati :",guj);
eng = Number(prompt("Enter your English :"));
console.log("English :",eng);
acc = Number(prompt("Enter your Account :"));
console.log("Account :",acc);
stat = Number(prompt("Enter your Stat :"));
console.log("Stat :",eng);
total =guj+eng+acc+stat;
console.log("Your Total is :",total);
per = total/400*100;
console.log("Percentage is :",per);
if(per<35)
{
    console.log("Your Are Fail...");
}
else if(35<=per && 45>per)
{
    console.log("Your Grade is D");
}
else if(45<=per && 60>per)
{
    console.log("Your Grade is C");
}
else if(60<=per && 75>per)
{
    console.log("Your Grade is B");
}
else if(75<=per)
{
    console.log("Your Grade is A");
}