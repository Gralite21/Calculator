let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation (input){
    calculation+=input;
    displayCalculation();
    localStorage.setItem('calculation',calculation);
}

function displayCalculation (){
    document.querySelector('.numberDisplay').innerHTML= calculation;
}
