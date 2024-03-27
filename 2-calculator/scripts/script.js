const displayAcumulator = document.querySelector('.calculator__display1');
const mainDisplay = document.querySelector('.calculator__display2');

const btnNumbers = document.querySelectorAll('.calculator__numbers');
const btnOperations = document.querySelectorAll('.calculator__operations');

const btnEqual = document.getElementById('equal');
const btnClear = document.getElementById('clear');

const btnDel = document.getElementById('del');

let displayData = '';
let displayHistory = '';
let oldOperation = ''

let total = 0;
let num = 0;

let equalValidator = false;

for (let btn of btnNumbers){
    btn.addEventListener('click', ()=>{
        displayData += btn.value;
        mainDisplay.value=displayData;
    });
}

for (let btn of btnOperations){
    btn.addEventListener('click', ()=>{
        mainDisplay.value=null;
        
        if(displayHistory ==''){
            displayHistory = displayData + btn.value;
            displayAcumulator.value = displayHistory;
            num= Number(displayData);
            total= num;
            displayData= '';
            oldOperation = btn.value;
            mainDisplay.value=null;
            
        }else if(displayData=='' && !equalValidator){
            displayHistory = displayHistory.slice(0, -1) + btn.value;
            displayAcumulator.value = displayHistory;
            oldOperation = btn.value;
            equalValidator = false;
        }else if(displayData=='' && equalValidator){
            displayHistory = displayHistory + btn.value;
            displayAcumulator.value = displayHistory;
            oldOperation = btn.value;
            equalValidator = false;
        }else{
            
            num= Number(displayData);
            if(oldOperation== '+') total += num;
            if(oldOperation== '-') total -= num;
            if(oldOperation== '*') total *= num;
            if(oldOperation== '÷') total /= num;

            oldOperation = btn.value;



            displayHistory = displayHistory + displayData;
            displayAcumulator.value = displayHistory;
            
            displayHistory += btn.value;

            displayData= '';
            mainDisplay.value=null;

            equalValidator = false
        }
               
    });
}

btnEqual.addEventListener('click', ()=>{
    if(!equalValidator){
        num= Number(displayData);
        if(oldOperation== '+') total += num;
        if(oldOperation== '-') total -= num;
        if(oldOperation== '*') total *= num;
        if(oldOperation== '÷') total /= num;



        displayHistory = displayHistory + displayData;
        displayAcumulator.value = displayHistory;
        
        displayData= '';    
        mainDisplay.value = total;

        if(total== Infinity) total = 0;
        
        displayHistory = total.toString();

        equalValidator=true;
    }
});

btnClear.addEventListener('click', ()=>{
    displayAcumulator.value ='';
    mainDisplay.value = '';
    displayData = '';
    displayHistory = '';
    oldOperation = ''
    total = 0;
    num = 0;
    
})

btnDel.addEventListener('click', ()=>{
    if(displayData!=''){
        displayData = displayData.slice(0, -1);
        mainDisplay.value=displayData;
    }
    
})





