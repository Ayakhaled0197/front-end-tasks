// create a list with 50 number starting from 1950 to 2000 , print in document as a select tag
var content="";
 for( var i=1950; i<2001 ; i++){
    content+=`<option value="">${i}</option>`;
 }
document.getElementById("listOne").innerHTML=content;

// create a reverse loop starting from 100 ending to 0 , print into an ordered list
var content2="";
for( var i =100; i>=0 ; i--){
    content2+=`<li> ${i}</li>`;
}
document.getElementById("listTwo").innerHTML=content2;

// create a loop that prints odd numbers in range from 0
for( var i=0; i<=100; i++){
    if( i%2 !==0){
        console.log(i);
    }
}