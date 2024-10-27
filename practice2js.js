
window.addEventListener("DOMContentLoaded", (event) => {

    red = document.getElementById("red");
    green = document.getElementById("green");
    blue = document.getElementById("blue");

    redBorder = document.getElementById("redB");
    greenBorder = document.getElementById("greenB");
    blueBorder = document.getElementById("blueB");
    
    width = document.getElementById("width");
    
    updateColor()
    red.addEventListener("change", updateColor);
    green.addEventListener("change", updateColor);
    blue.addEventListener("change", updateColor);
    redBorder.addEventListener("change", updateColor);
    greenBorder.addEventListener("change", updateColor);
    blueBorder.addEventListener("change", updateColor);
    width.addEventListener("change", updateColor);
});

function updateColor(){
    document.getElementById("output").style.color = "rgb(" + red.value + ","+ green.value +"," + blue.value +")";
    document.getElementById("output").style.borderColor = "rgb(" + redBorder.value + ","+ greenBorder.value +"," + blueBorder.value +")";
    document.getElementById("output").style.borderWidth = width.value + "px";

}