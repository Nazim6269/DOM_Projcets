/**
 * Author : Nazim Uddin 
 * Description : Multiple Converter 
 */

window.onload = () => {
    main ();
}


const converter = {
    area : {
        name : 'Area',
        units : {
            squareKm : 'Square kilometers',
            squareM : 'Square Meter',
            squareMile :'Square Mile',
            squareYard : 'Square Yard',
            squareFoot : 'Square Foot'
        },
        variants : {
            'squareKm : squareM' : {
                formula : 'multiply the area value by 1000000',
                calculation(input){
                    return input *1000000;
                }
            },
            'squareKm : squareMile' : {
                formula : 'divide the area value by 2.59',
                calculation(input){
                    return input /2.59;
                }
            },
            'squareKm : squareFoot' : {
                formula : 'multiply the area value by 10760000',
                calculation(input){
                    return input *10760000;
                }
            },
            'squareKm : squareYard' : {
                formula : 'multiply the area value by 1196000',
                calculation(input){
                    return input *1196000;
                }
            },
            'squareM : squareKm' : {
                formula : 'divide the area value by 1e+6',
                calculation(input){
                    return input / new Number('1e+6');
                }
            },
            'squareM : squareMile' : {
                formula : 'divide the area value by 2.59e +6',
                calculation(input){
                    return input / new Number('2.59e+6');
                }
            },
            'squareM : squareFoot' : {
                formula : 'multiply the area value by 10.764',
                calculation(input){
                    return input *10.764;
                }
            },
            'squareM : squareYard' : {
                formula : 'multiply the area value by 1.96',
                calculation(input){
                    return input *1.96;
                }
            },
            'squareMile : squareKm' : {
                formula : 'multiply the area value by 2.59',
                calculation(input){
                    return input *2.59;
                }
            },
            'squareMile : squareM' : {
                formula : 'multiply the area value by 2.59e+6',
                calculation(input){
                    return input * new Number('2.59e+6');
                }
            },
            'squareMile : squareFoot' : {
                formula : 'for an approximate result, multiply the area value by 2.788e+7',
                calculation(input){
                    return input *new Number('2.788e+7');
                }
            },
            'squareMile : squareYard' : {
                formula : 'for an approximate result, multiply the area value by 3.098e+6',
                calculation(input){
                    return input *new Number('3.098e+6');
                }
            },
            'squareYard : squareKm' : {
                formula : 'divide the area value by 1.196e+6',
                calculation(input){
                    return input *new Number('1.196e+6');
                }
            },
            'squareYard : squareM' : {
                formula : 'divide the area value by 1.196',
                calculation(input){
                    return input *10;
                }
            },
            'squareYard : squareMile' : {
                formula : 'for an approximate result, divide the area value by 3.098e+6',
                calculation(input){
                    return input / new Number('3.098e+6');
                }
            },
            'squareYard : squareFoot' : {
                formula : 'multiply the area by 9',
                calculation(input){
                    return input *9;
                }
            },
            'squareFoot : squareKm' : {
                formula : 'for an approximate risult, divide the area value by 1.076e+7',
                calculation(input){
                    return input / new Number('1.076e+7');
                }
            },
            'squareFoot : squareM' : {
                formula : 'divide the area value by 10.764',
                calculation(input){
                    return input / 10.764;
                }
            },
            'squareFoot : squareMile' : {
                formula : 'for an approximate risult, divide the area value by 2.788e+ 7',
                calculation(input){
                    return input / new Number('2.788e+ 7');
                }
            },
            'squareFoot : squareYard' : {
                formula : 'divide the area value by 9',
                calculation(input){
                    return input /9;
                }
            },
        },
    },
    
    length : {
        name : 'Length',
        units : {
            kilometer : 'Kilometer',
            meter : 'Meter',
            centimeter : 'Centimeter',
            milimeter : 'Milimeter',
        }
    },
    time : {
        name : 'Time',
        units : {
            second : 'Seconds',
            hours : 'Hours' ,
            minutes : 'Minutes',
        },
        variants :{
            'seconds : minutes' :{
                formula : 'divide the time value by 60',
                calculation(input){
                    return input / 60;
                }
            },
            'seconds : hours' :{
                formula : 'divide the time value by 3600',
                calculation(input){
                    return input / 3600;
                }
            },
            'minutes : seconds' :{
                formula : 'multiply the time value by 60',
                calculation(input){
                    return input * 60;
                }
            },
            'minutes : hours' :{
                formula : 'divide the time value by 3600',
                calculation(input){
                    return input / 60;
                }
            },
            'hours : seconds' :{
                formula : 'multiply the time value by 36000',
                calculation(input){
                    return input * 3600 ;
                }
            },
            'hours : minutes' :{
                formula : 'multiply the time value by 60',
                calculation(input){
                    input * 60;
                }
            }
        }
    },
    mass : {
        name : 'Mass',
        untis : {
            tonne : 'Tonne',
            gram : 'Gram',
            kilogram : 'Kilogram',
            milligram : 'Milligram',
        }
    },
    
}


    let leftSelectedValue = '';
    let rightSelectedValue = '';

function main () {
    const selectCategory = document.getElementById('select-cat');
    const leftselect = document.getElementById('left-select');
    const rightselect = document.getElementById('right-select');
    const leftInput = document.getElementById('left-inp');
    const rightInput = document.getElementById('right-inp');
    
    
    
    const converterKeys = Object.keys(converter).sort();
    removeOption(selectCategory); 
    converterKeys.forEach((item) => {
        addOption(selectCategory, {value: item, text: converter[item].name})
    })
    
    
    //set default category units
    updateCategoryChanges(selectCategory, leftselect, rightselect)
    


    //Event listeners
    selectCategory.addEventListener('change', function () {updateCategoryChanges(selectCategory, leftselect, rightselect)}) 
    //when equal swapping the values
    leftselect.addEventListener('change', function (e){
        if (e.target.value === rightselect.value){
           // console.log(e.target.value);
           // console.log(rightselect.value);
            const options = rightselect.getElementsByTagName('option');
            for (let i = 0; i < options.length; i++) {
                if(leftSelectedValue === options[i].value){
                    options[i].selected = 'selected';
                    rightSelectedValue = options[i].value;
                    break;
                }
                
            }
        }
        leftSelectedValue = e.target.value;
        calculateValue(selectCategory, leftselect,rightselect,)
    })
    rightselect.addEventListener('change', function (e){
        if (e.target.value === leftselect.value){
            const options = leftselect.getElementsByTagName('option');
            for (let i = 0; i < options.length; i++) {
                if(rightSelectedValue === options[i].value){
                    options[i].selected = 'selected';
                    leftSelectedValue = options[i].value;
                    break;
                }
                
            }
        }
        rightSelectedValue = e.target.value;
        calculateValue(selectCategory, leftselect,rightselect);
        
    })
    leftInput.addEventListener('keyup', function (e){
        if (e.target.value && !isNaN(e.target.value)){
            const converterName = selectCategory.value;
            const variants= converter[converterName].variants;
            const variantKey = `${leftselect.value} : ${rightselect.value}`;
            //console.log(variantKey);
            const variant = variants[variantKey];
            //console.log(variant);
            leftInput.value = Number(e.target.value);
            rightInput.value = variant.calculation(Number(e.target.value));
        }else{
            rightInput.value = '';
        }
    })
    rightInput.addEventListener('keyup', function (e){
        if (e.target.value && !isNaN(e.target.value)){       
            const converterName = selectCategory.value;
            const variants= converter[converterName].variants;
            const variantKey = `${leftselect.value} : ${rightselect.value}`;
            const variant = variants[variantKey];
            rightInput.value = Number(e.target.value);
            leftInput.value = variant.calculation(Number(e.target.value));
        }else{
            leftInput.value = ''
        }
        
    })
};


//Event Handlers Functions


function updateCategoryChanges(selectCategory, leftselect,rightselect){
    const converterName = selectCategory.value;
    console.log(converterName);
    console.log(converter[converterName].units);
    const unit= converter[converterName].units;
    console.log(unit);
    const option = Object.keys(unit);
    console.log(option);
    //handle left select
    removeOption(leftselect); 
    option.forEach((item) => {
        addOption(leftselect, {value: item, text : unit[item]})
    })

    leftSelectedValue= leftselect.value;

    //handle right select
    removeOption(rightselect);
    option.forEach((item) => {
        addOption(rightselect, {value: item, text : unit[item]})
    })

    //handle ringht default selected value
    rightselect.getElementsByTagName('option')[1].selected = 'selected';
    rightSelectedValue= rightselect.value;
    calculateValue(selectCategory, rightselect, leftselect);
}


//DOM functions
function addOption(parent, option) { 
    const opt = document.createElement('option');
    opt.setAttribute('value', option.value);
    opt.innerText = option.text;

    parent.appendChild(opt);
}



function removeOption(parent) {
    while (parent.firstChild){
        parent.firstChild.remove();
    }
}


function calculateValue(selectCategory, leftselect,rightselect) {
    const formulaText = document.getElementById('formula-text');
    const leftInput = document.getElementById('left-inp');
    const rightInput = document.getElementById('right-inp');

    const converterName = selectCategory.value;
    //console.log(converterName);
    const variants= converter[converterName].variants;
    //console.log(variants);
    const variantKey = `${rightselect.value} : ${leftselect.value}`;
    //console.log(variantKey);
    const variant = variants[variantKey];
    //console.log(variant);
    formulaText.innerText = variant.formula;
    leftInput.value = 1;
    rightInput.value = variant.calculation(1);
}


