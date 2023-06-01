/**
 * Date : 03.01.2023
 * Author : Nazim Uddin
 * Description : Color Picker application with DOM functionalities
 */



// Globals

// Onload Handler
window.onload = () =>{
    main();
}

// Main function
function main() {
    const headerBtn = document.getElementById('header-btn'); 

    headerBtn.addEventListener('click',handleGenerateRandonColorBtn)
}


// Event handlers
function handleGenerateRandonColorBtn(){
    const color = generateColorDecimal();
    updateColorCodeToDOM(color);
}


// DOM Functions
function updateColorCodeToDOM(color){
    const colorDisplay = document.getElementById('color-display');
    const hexInput = document.getElementById('hex-input');
    const rgbInput = document.getElementById('rgb-input');
    const sliderHeadingRed = document.getElementById('slider-heading-red');
    const sliderHeadingGreen = document.getElementById('slider-heading-green');
    const sliderHeadingBlue = document.getElementById('slider-heading-blue');
    const sliderOneValue = document.getElementById('slider-one-value');
    const sliderTwoValue = document.getElementById('slider-two-value');
    const sliderThreeValue = document.getElementById('slider-three-value');

    const hexColor = generateHexColor(color);
    const rgbColor = generateRGBColor(color);

    colorDisplay.style.backgroundColor = hexColor;
    hexInput.value = hexColor;
    rgbInput.value = rgbColor;
    sliderHeadingRed.value = color.red;
    sliderHeadingGreen.value = color.green;
    sliderHeadingBlue.value = color.blue;
    sliderOneValue.innerText = color.red;
    sliderTwoValue.innerText = color.green;
    sliderThreeValue.innerText = color.blue;


}



//  Utils functions 
/**
 * generate and return an objecct of three color decimal values
 * @returns {object}
 */
function generateColorDecimal(){
    const red = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    return {red,green,blue};
}


/**
 * take a color object of three decimal values and return a hexadecimal colorCode
 * @param {object} color 
 * @returns {string}
 */
function generateHexColor({red,green,blue}){
    const getTwoCode = (value) => {
        const hexCode = value.toString(16);
        return hexCode.length === 1 ? `0${hexCode}` : hexCode;
    }
    return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`.toUpperCase();
}


/**
 * take a color object of three decimal values and return a RGB colorCode
 * @param {object} color 
 * @returns {string}
 */
function generateRGBColor({red,green,blue}){
    return `rgb(${red},${green},${blue})`;
}


