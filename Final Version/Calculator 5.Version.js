let calculation = '';
function updateCalculation (input){
    calculation+=input;
    displayCalculation();
    localStorage.setItem('calculation',calculation);
}

function displayCalculation (){
    document.querySelector('.numberDisplay').innerHTML= calculation;
}
function local(){
    localStorage.setItem('calculation',calculation);
}

function clearButton (){
    calculation = ''
    document.querySelector('.numberDisplay').innerHTML= calculation;
    localStorage.setItem('calculation',calculation);
}

function evalButton (){
    calculation = eval(calculation);
    document.querySelector('.numberDisplay').innerHTML= calculation;
    localStorage.setItem('calculation',calculation);
}