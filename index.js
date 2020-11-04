var color1 = document.querySelector(".blue");
var color2 = document.querySelector(".pink");
var color3 = document.querySelector(".yellow");
var color4 = document.querySelector(".grey");
color1.addEventListener("click", function(){
    document.body.style.backgroundColor = "#0392BF";
})
color2.addEventListener("click", function(){
    document.body.style.backgroundColor = "#ED48BA";
    color2.classList.add("default");
})
color3.addEventListener("click", function(){
    document.body.style.backgroundColor = "#FBEC06";
    color3.classList.add("default");
})
color4.addEventListener("click", function(){
    document.body.style.backgroundColor = "#B3D4E0"
    color4.classList.add("default")
    document.body.style.color = "black";
})