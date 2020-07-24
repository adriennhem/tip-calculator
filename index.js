// render tip
function renderTip(tip) {
    const divTip = document.querySelector('#totalTip');
    divTip.textContent = tip;
}

// create a calculateTip function 
function calculateTip(amount, service, people) {
    const totalTip = (amount * service)/people;
    console.log(totalTip); 
    renderTip(totalTip);
}

// Create event listenner 
const form = document.querySelector('form');

form.addEventListener('submit', e =>{
    e.preventDefault();

    const inputbillAmount = document.querySelector('#billamt');
    const billAmount = parseFloat(inputbillAmount.value);
    console.log(billAmount);


    const selectServiceQuality = document.querySelector('#serviceQual');
    const serviceQuality = parseFloat(selectServiceQuality.value);
    console.log(serviceQuality);


    const inputPeople = document.querySelector('#peopleamt');
    const peopleValue = parseFloat(inputPeople.value);
    console.log(peopleValue);

    if (billAmount !== NaN && serviceQuality !== 0 && peopleValue !== NaN) {
        calculateTip(billAmount, serviceQuality, peopleValue);
    } else {
        const divTip = document.querySelector('#totalTip');
        divTip.textContent = "You need to complete the form";
    } 
});