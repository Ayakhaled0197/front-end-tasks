alert("Hi from my website");

var age = 35;
if (age >= 20){
  console.log("adult");
} else if (age < 1){
  console.log("invalid age");
} else if( age > 1 && age <11){
  console.log("child");
}    
else{
     console.log("teen");
}

var message =prompt("Enter your score");
if (message>=80 && message<=100){
    console.log("Excellent");
}
else if (message<80 && message>=50){
    console.log("Very good");
}
else if (message<0 || message>100){
    console.log("invalid");
}
else {
    console.log("failed");
}

var attendedStudentOne= "menna";
var attendedStudentTwo= "zyad";
var attendedStudentThree= "mohamed";

if(attendedStudentOne==="mostafa" || attendedStudentTwo==="malek" || attendedStudentThree==="kateb"){
  console.log("menna is happy !");
}
else {
   console.log("sad")
}

var result=prompt("enter the month");

switch(result){
   case "january":
        console.log("1st month");
        break;
    case "february":
        console.log("2nd month");
        break;
    case "march" :
        console.log("3rd month");
        break;
    case "april":
        console.log("4th month");
        break;
    case "may" :
        console.log("5th month");
        break;
    case "june" :
        console.log("6th month");
        break;
    case "july" :
        console.log("7th month");
        break;
    case "august" :
        console.log("8th month");
        break;
    case "september" :
        console.log("9th month");
        break;
    case "october" :
        console.log("10th month");
        break;
    case "november" :
        console.log("11th month");
        break;
    case "december" :
        console.log("12nd month");
        break;
    default:
        console.log(" enter a valid month");    
}


