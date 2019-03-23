// Print to DOM function 
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const sortFormButton = document.getElementById('start-sorting');
const sortDiv = document.getElementById('sort-form'); 
sortDiv.style.visibility = 'hidden';


//funtion to unhide sort-form div
const sortFormUnhide = (divId) => {
    sortDiv.style.visibility = 'visible';
};

sortFormButton.addEventListener('click', sortFormUnhide);

const sortButton = document.getElementById('sort-form-button');
let students = [];
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
let studentId = 0;


// function to build student card
const addStudent = () => {
    const studentName = document.getElementById('nameInput').value;
    const chosenHouse = getHouse(houses);
    studentId++;
    students.unshift({name: studentName, 
                   house: chosenHouse,
                   id: studentId});
    document.getElementById('nameInput').value = "";
    console.log(students);
};




// function that assigns student a random house 
const getHouse = (array) => {
    const houseIndex = Math.floor((Math.random() * 4));
    const studentHouse = houses[houseIndex];
    return studentHouse;
};

sortButton.addEventListener('click', addStudent);




