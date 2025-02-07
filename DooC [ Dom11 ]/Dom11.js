var sliderImg= document.getElementsByClassName("card-img-top"); 
var lightBoxItem = document.getElementById("lightBoxItem");
var lightBoxContainer = document.getElementById("lightBoxContainer");
var close = document.getElementById("close")
var prev = document.getElementById("prev")
var next = document.getElementById("next")

for (var i = 0; i < sliderImg.length; i++) {
    sliderImg[i].addEventListener("click", function (e) {
        lightBoxContainer.style.display = "flex"; 
        var ro = e.target.src;
        lightBoxItem.style.backgroundImage = `url(${ro})`; 
    });
}

close.addEventListener("click" , function(){
    lightBoxContainer.style.display = "none";
})
