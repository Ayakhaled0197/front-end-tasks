// 1- create a list with 50 number starting from 1950 to 2000 , print in document as a select tag
// 2- create a reverse loop starting from 100 ending to 0 , print into an ordered list
// 3- create a loop that prints odd numbers in range from 0

// ================================================================================================================
//                          =======================================1=============================================
let yr = " " ;
for( let i = 1950 ; i <= 2000 ; i++){
    yr += `<option value "${i}"> ${i} </option>`;}
    document.getElementById("years").innerHTML = yr ;

//                         ============================================================2==========================
let yag = " " ;
for(let j = 100 ; j >= 0 ; j--){
    yag += `<li> ${j} </li>`;
    }
    document.getElementById("rev").innerHTML = yag ;

    //                                             =========3=======================================================

    for( let h = 0 ; h <=100 ; h ++){
        if(h % 2 !== 0){
            document.write(h)
        }
    }





