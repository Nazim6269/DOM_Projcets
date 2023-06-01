/**
 * Author : Nazim Uddin
 * Date : 10th February 2023
 * Description : Counter Project
 */


//Global

let result = 0;

window.onload = () => {
    main ();
}

function main () {
    const output = document.getElementById('output');
    const increasebtn = document.getElementById('increase-btn');
    const decreasebtn = document.getElementById('decrease-btn');
    const increaseInp = document.getElementById('increase-inp');
    const decreaseInp = document.getElementById('decrease-inp');

    display(output);
    increasebtn.addEventListener('click', function () {
        let increment = parseInt(increaseInp.value);
        result += increment;
        display(output);
    })

    decreasebtn.addEventListener('click', function () {
        let increment = parseInt(decreaseInp.value);
        result -= increment;
        if (result < 0) {
            result = 0;
            alert('Negative numbers are not allowed')
        }
        display(output);
    })

    increaseInp.addEventListener('keyup' , handleInput);
    decreaseInp.addEventListener('keyup' , handleInput);


}

function display(output){
    let finalResult = result;
    if (result < 10){
        finalResult = `0${result}`;
    }
    output.innerText = finalResult;
}

function handleInput(e){
    if (parseInt(e.target.value) > 100){
        e.target.value = 100;
    }if (parseInt(e.target.value) < 0){
        e.target.value = 0;
    }
}