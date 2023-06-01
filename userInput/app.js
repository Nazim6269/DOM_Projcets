/**
 * Author : Nazim Uddin
 * Description : User Input
 */


window.onload = () => {
    main ()
}

function main () {
    const inputBox = document.getElementById('inpBox');
    const inpName = document.getElementById('inp-name');
    const resetButton = document.getElementById('resetBtn');
    const submitButton = document.getElementById('submitBtn');
    const textDiv = document.getElementById('text-div');
    textDiv.style.display = 'none';

    resetButton.addEventListener('click', function () {
        inputBox.value = '';
    })

    submitButton.addEventListener('click', function () {
        const name = inputBox.value;
        if (!name){
            alert('Please enter a Valid Name');
        }else{
            textDiv.style.display = 'block';
            inpName.innerHTML = name;
            inputBox.value = '';
        }
    })
}