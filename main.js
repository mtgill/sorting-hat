// Print to DOM function 
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

startSortingButton = document.getElementById('start-sorting');
const sortDiv = document.getElementById('sort-form'); 
sortDiv.style.visibility = 'hidden';

const sortFormUnhide = (divId) => {
    sortDiv.style.visibility = 'visible';
};

startSortingButton.addEventListener('click', sortFormUnhide);

