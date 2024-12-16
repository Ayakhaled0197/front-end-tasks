// // loops
// // for , while , do while
// // displaying on screen
// // quotes
// // for ------------------------

var p = 7;

// // var i = 0;
// // console.log(i);
// // console.log(i + 1);
// // console.log(i + 1);
// // console.log(i + 1);

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// // index definition , parameters --------------------------
// for (var i = 0; i < 3; i++) {
//   console.log("hello there !");
// }

// for (var i = 0; i < 5; i++) {
//   console.log("hello");
// }

// // indexing concept -----------------------------------------
// for (var i = 1; i < 4; i++) {
//   console.log("hello");
// }
// //  ------------------------
// // var i = 0;
// for (var i = 0; i < 5; i++) {
//   console.log(i);
//   console.log(i + 1);
//   console.log("i'm here !");
//   console.log("i'm here !" + i + 2);
//   console.log("i'm here! " + (i + 2));
// }
// //  step ! ----------------------------------------

// for (var i = 0; i < 8; i += 2) {
//   console.log("hi");
// }
// for (var i = 0; i < 5; i++) {
//   console.log("hi");
// }

// // for (var i = 0; i < 6; i += 2) {
// //   console.log("hi !!!!");
// // }

// for (var i = 5; i < 11; i++) {
//   console.log("hello there !? ");
//   console.log(i);
// }

// var cartoona = "";
// for (var i = 1950; i <= 2025; i++) {
//   cartoona += "<li>content</li>";
// }

// document.getElementById("list").innerHTML = cartoona;

// var cartoona = "";
// for (var i = 1950; i <= 2025; i++) {
//   cartoona += "<li>" + i + "</li>";
// }

// document.getElementById("list").innerHTML = cartoona;

// //  loops in real life --------------------------------
// // html can not be written in javascript but can be written as string
// var cartoona = "";
// for (var i = 0; i < 20; i++) {
//   cartoona += "<li> content</li>";
// }
// // document.getElementById("list").innerHTML = cartoona;

// // another example -----------------------------------------
// var cartoona = "";
// for (var i = 0; i < 20; i++) {
//   cartoona += "<li>" + i + "</li>";
// }
// var cartoona = "";
// for (var i = 1950; i <= 2025; i++) {
//   cartoona += `<li> ${i} </li>`;
// }

// document.getElementById("list").innerHTML = cartoona;

// // document.getElementById("list").innerHTML = cartoona;
// //  template literals & ${} for variables  & first selector ------------
// var cartoona = "";
// for (var i = 1995; i < 2015; i++) {
//   cartoona += `<li> ${i}</li>`;
// }
// // ///////////////////////////////////
// // document.getElementById("list").innerHTML = cartoona;

// var cartoona2 = "";
// for (var i = 1800; i < 2026; i++) {
//   cartoona2 += `<option value=''> ${i} </option>`;
// }

// document.getElementById("listOp").innerHTML = cartoona2;

// var cartoona = "";
// for (var i = 1995; i < 2015; i++) {
//   cartoona += `<option> ${i}</option>`;
// }
// // document.getElementById("select").innerHTML = cartoona;

var str = ` aya
 khaled`;

// // applications on template literals----------------------
// // var str = " aya
// // khaled "

// var str2 = `
// aya
// khaled
// yosry `;

// // while --------------------------
// var i = 0;
// while (i < 5) {
//   console.log("hello");
//   i++;
// }

// var g = 0;
// do {
//   console.log(g);
//   g++;
// } while (g < 2);

// for (var i = 100; i > 50; i--) {
//   console.log(i);
// }

var a = 80;
while (a > 30) {
  console.log(a);
  a--;
}

// var x = 0;
// while (x < 6) {
//   console.log(x);
//   x++;
// }
// // another ex ----------------------
// var x = 10;
// while (x > 0) {
//   console.log(x);
//   x--;
// }

// //  for reverse ---------------------------
// for (var i = 100; i > 0; i -= 10) {
//   console.log(i);
// }

//  infinite loop ! -----------------------

var y = 0;
while (y < 10) {
  y++;
  console.log(y);
}

for (var i = 0; i < 21; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// for (var i = 0; i < 20; i++) {
//   if (i % 2 == 0) console.log(i);
//   else console.log("odd!");
// }

// // do.. while -----------------------------

// var a = 0;

// do {
//   console.log("hello from do while!");
//   a++;
// } while (a < 20);

for (var i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    continue;
  }
}

// //  continue  and break
// var n = 10;
// for (var i = 0; i < n; i++) {
//   // console.log(i);
//   if (i % 2 == 0) {
//     // continue;
//     break;
//   }
//   console.log(i);
// }
