let body = document.querySelector(".container");
let changeBtn = document.querySelector("#changeButton");
let cpBtn = document.querySelector("#cpButton");
let inp = document.querySelector("#inp");

changeBtn.addEventListener("click",function (){
    let rgbColor = generatorRGBColor();
    inp.value = rgbColor;
    body.style.backgroundColor = rgbColor;
});

cpBtn.addEventListener("click",function (){
    navigator.clipboard.writeText(inp.value)
});

function generatorRGBColor (){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}