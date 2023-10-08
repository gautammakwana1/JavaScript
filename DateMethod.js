// Date Method 
// Formate -> Day , Month , Date , Year , Hours , Minutes , Seconds , Miliseconds , Time Zone

let TIME =new Date();
console.log(TIME);   // Full format 

// GET Method :

// let result = TIME.getDate();
// console.log(result);   // Get date

// let result = TIME.getDay();
// console.log(result);       // Get Day start -> 0=sun ,1=mon ,2=tue ,3=wed ,4=thu ,5=fri ,6=sat

// let result = TIME.getMonth();
// console.log(result);        // Get Month -> start 0 to 11 (0= january,....,11= December)

// let result = TIME.getFullYear();
// console.log(result);        // Get Year

// let result = TIME.getHours();
// console.log(result);            // Get Hours

// let result = TIME.getMinutes();
// console.log(result);            // Get Minutes

// let result = TIME.getSeconds();
// console.log(result);            // Get Seconds

// let result = TIME.getMilliseconds();
// console.log(result);            //Get Milliseconds

// let result = TIME.getTime();
// console.log(result);        // Get Time in Milliseconds from 1-jan-1970

// let result = TIME.getTimezoneOffset();
// console.log(result);        // Get Time in UTC or Difference Between UTC & GMT

// ===> UTC is Delayed 5:30 Hours From GMT 

// let result = TIME.getUTCDate();
// console.log(result);        // Get UTC Date

// let result = TIME.getUTCDay();
// console.log(result);        // Get UTC Day

// let result = TIME.getUTCMonth();
// console.log(result);        // Get UTC Month

// let result = TIME.getUTCFullYear();
// console.log(result);        // Get UTC year

// let result = TIME.getUTCHours();
// console.log(result);        // Get UTC Hours

// let result = TIME.getUTCMinutes();
// console.log(result);        // Get UTC Minutes

// let result = TIME.getUTCSeconds();
// console.log(result);        // Get UTC seconds

// ==> SET Method 
//  set method can not store in a variable

TIME.setFullYear(2015);
console.log(TIME);        // Set Year

TIME.setMonth(11);
console.log(TIME);        // Set Month

TIME.setDate(20);
console.log(TIME);        // Set date

TIME.setHours(12);
console.log(TIME);        // Set Hours

TIME.setMinutes(45);
console.log(TIME);        // Set Minutes

TIME.setSeconds(45);
console.log(TIME);        // Set Seconds

TIME.setTime(12345458764);
console.log(TIME);        // Set Time

TIME.setUTCDate(29);       //Set UTC Date
TIME.setUTCMonth(6);       //Set UTC Month
TIME.setUTCFullYear(2005);       //Set UTC year
TIME.setUTCHours(14);       //Set UTC Hours
TIME.setUTCMinutes(35);       //Set UTC Minutes
TIME.setUTCSeconds(55);       //Set UTC Seconds


TIME.setFullYear(2020,6,12)
console.log(TIME);        // Set date

TIME.setHours(12,59,59);
console.log(TIME);        // Set date
