
let students = [];
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
let studentId = 0;



// Print to DOM function 
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const sortFormButton = document.getElementById('start-sorting');
const sortDiv = document.getElementById('sort-form'); 
// sortDiv.style.visibility = 'hidden';


//funtion to unhide sort-form div
const sortFormUnhide = (divId) => {
    sortDiv.style.visibility = 'visible';
};

const buildForm = () => {
   let domString = "";
   domString += `<div id="sort-form">`;
   domString += `<h3>Enter Student Name</h3>`;
   domString += `<form class='form-inline'>`;
   domString += `<div class="form-group">`;
   domString += `<label for="nameInput" class="studentNameLabel">Student Name:</label>`;
   domString += `<input type="text" class="form-control" id="nameInput" placeholder="Enter name">`;
   domString += `</div>`;
   domString += `<button type="submit" class="btn btn-primary" id="sort-form-button">Sort!</button>`;
   domString += `</form>`;
   domString += `</div>`;
   printToDom('form-div', domString);
   const sortButton = document.getElementById('sort-form-button');
   sortButton.addEventListener('click', addStudent);
}


//function to build student card
const studentBody = () => {
    domString = '';

    students.forEach(student => {
    domString += `<div class="col-12 col-sm-6 col-md-3">`;    
    domString += `<div class="card ${student.house}" id='${student.id}'>`;
    domString += `<h5 class="card-title">${student.name}</h5>`;
    domString += `<h5 class="card-text">${student.house}</h5>`;
    domString += `<button type="button" class="btn btn-secondary expel" id='expel'>Expel!</button>`;
    domString += `</div>`;
    domString += `</div>`;
    
    });
    return domString;
};


// function to add new student objects to an array 
const addStudent = () => {
    const studentName = document.getElementById('nameInput').value;
    const chosenHouse = getHouse(houses);

    if (studentName === ""){
        alert('To proceed please enter a name');
    }
    else{
    studentId++;
    students.unshift({name: studentName, 
                   house: chosenHouse,
                   id: studentId.toString(10)});
    studentBody();
    document.getElementById('nameInput').value = "";
    printToDom('student-body-div', domString);
    expelEvent()
    }
};




// function that assigns student a random house 
const getHouse = (array) => {
    const houseIndex = Math.floor((Math.random() * 4));
    const studentHouse = houses[houseIndex];
    return studentHouse;
};

//assigns event listeners to expel buttons 
const expelEvent = () => {
    
    let expelButton = document.getElementsByClassName('expel');

    for (let button of expelButton){
        button.addEventListener('click', function () {removeStudent(button.parentElement.id)});
    }
  
}


const findStudentById = (id) => {
    let idValue = '';
    students.forEach(student => {
        if (student.id === id) {
            idValue = students.indexOf(student);
        }
    });
    return idValue;
}

//removes student from the array using the id value from findStudentsById
const removeStudent = (id) => {
        
        let studentIndex = findStudentById(id);
        students.splice(studentIndex, 1);
        printToDom('student-body-div', studentBody());
        expelEvent();
    };

    
const buttonEvents = () => {
    
    sortFormButton.addEventListener('click', buildForm);
}


const init = () => {
    buttonEvents();
}

init();






