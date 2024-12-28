// ============================Attendance System=======================================
var attendName = document.getElementById("attendName")
var attendId = document.getElementById("attendId")
var attendYear = document.getElementById("attendYear")
var attendSection = document.getElementById("attendSection")

var logIn = [];
function attendance(){
    var attendance = {
        name: attendName.value  ,
        id: attendId.value  ,
        year: attendYear.value  ,
        section: attendSection.value  ,
    };
    logIn.push(attendance)
    applicationDisplay()
    console.log(logIn);
    
}

function applicationDisplay(){
    var box = "" ;
    for(var i = 0 ; i<logIn.length ; i++ ){
        box += `<tr>
        <td>${logIn[i].name}</td>
        <td>${logIn[i].id}</td>
        <td>${logIn[i].year}</td>
        <td>${logIn[i].section}</td>
                </tr>`;

    }
    document.getElementById("afterAdd").innerHTML = box ;
}

function deleteAll(){
    logIn.splice(logIn.length-1,1);
    applicationDisplay(); 
}
