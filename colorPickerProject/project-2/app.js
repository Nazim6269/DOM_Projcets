let button = document.querySelector('button');
let input = document.querySelector('#inp');
let root = document.querySelector(".container");

button.addEventListener("click",myFunction);

function myFunction (){
    let hexColor = generateHexColor();
    root.style.backgroundColor = hexColor;
    input.value = hexColor;
}

function generateHexColor(){
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}