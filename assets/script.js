var momentNow = moment().format('dddd, MMMM Do, YYYY');
var momentNow24 = moment().format('HH:mm');
var today = moment().format('dddd, MMMM Do, YYYY');
var timeBlockRow = document.querySelectorAll('.row')
var task = $('.description');
var saveBtn = $('.saveBtn');
var btn1 = $('#btn1');
var btn2 = $('#btn2');
var btn3 = $('#btn3');
var btn4 = $('#btn4');
var btn5 = $('#btn5');
var btn6 = $('#btn6');
var btn7 = $('#btn7');
var btn8 = $('#btn8');
var btn9 = $('#btn9');

// Date display in jumbotron
function currentDay () {
    $('#currentDay').text(today);
    console.log(today);
}
currentDay();

// timeblocks
var schedule = [
    { 
        hour: 9,
        moment: moment('09:00 AM', 'h:mm: a').format('HH:mm'),
        task: $('#task1'),
        save: btn1      
    },
    { 
        hour: 10,
        moment: moment('10:00 AM', 'h:mm: a').format('HH:mm'),
        task: $('#task2'),
        save: btn2
    },
    { 
        hour: 11,
        moment: moment('11:00 AM', 'h:mm: a').format('HH:mm'),
        task: $('#task3'),
        save: btn3
    },
    { 
        hour: 12,
        moment: moment('12:00 PM', 'h:mm: a').format('HH:mm'),
        task: $('#task4'),
        save: btn4
    },
    { 
        hour: 13,
        moment: moment('01:00 PM', 'h:mm: a').format('HH:mm'),
        task: $('#task5'),
        save: btn5
    },
    { 
        hour: 14,
        moment: moment('02:00 PM', 'h:mm: a').format('HH:mm'),
        task: $('#task6'),
        save: btn6
    },
    { 
        hour: 15,
        moment: moment('03:00 PM', 'h:mm: a').format('HH:mm'),
        task: $('#task7'),
        save: btn7
    },
    { 
        hour: 16,
        moment: moment('04:00 PM', 'h:mm: a').format('HH:mm'),
        task: $('#task8'),
        save: btn8
    },
    { 
        hour: 17,
        moment: moment('05:00 PM', 'h:mm: a').format('HH:mm'),
        task: $('#task9'),
        save: btn9
    },
]

for (i = 0; i < schedule.length; i++) {
    var momentBlock = schedule[i].moment
    console.log(momentBlock);
    console.log(momentNow24);

    // past (gray)
    if (momentBlock < momentNow24) {
        $('.description').css('background-color', '#d3d3d3')
    // present (red)
    } else if (momentBlock === momentNow24) {
        $('.description').css('background-color', '#ff6961')
    // future (green)
    } else {
        $('.description').css('background-color', '#77dd77')
    }
}

// ======================= 9AM BLOCK ============================== 

// set task input to local storage
function saveTask1() {
    var currentTask1 = {
        task: $('#task1').val()
    };
    console.log(currentTask1);

    localStorage.setItem('9am task', JSON.stringify(currentTask1.task));
}

// get task input from local storage
function renderTask1() {
    var savedTask = JSON.parse(localStorage.getItem('9am task'));
    
    if (savedTask !== null) {
        document.getElementById('task1').innerHTML = savedTask;
        console.log(savedTask);
    } else {
        return;
    }
}

// local storage on click
$('#btn1').on('click', function(event) {
    event.preventDefault();
    saveTask1();
    renderTask1();
});

// ======================= 10AM BLOCK ===================================

// set task input to local storage
function saveTask2() {
    var currentTask2 = {
        task: $('#task2').val()
    };
    console.log(currentTask2);

    localStorage.setItem('10am task', JSON.stringify(currentTask2.task));
}

// get task input from local storage
function renderTask2() {
    var savedTask = JSON.parse(localStorage.getItem('10am task'));
    
    if (savedTask !== null) {
        document.getElementById('task2').innerHTML = savedTask;
        console.log(savedTask);
    } else {
        return;
    }
}

// local storage on click
$('#btn2').on('click', function(event) {
    event.preventDefault();
    saveTask2();
    renderTask2();
});

// ========================================================== 11-3

// set task input to local storage
function saveTask3() {
    var currentTask3 = {
        task: $('#task3').val()
    };
    console.log(currentTask3);

    localStorage.setItem('11am task', JSON.stringify(currentTask3.task));
}

// get task input from local storage
function renderTask3() {
    var savedTask = JSON.parse(localStorage.getItem('11am task'));
    
    if (savedTask !== null) {
        document.getElementById('task3').innerHTML = savedTask;
        console.log(savedTask);
    } else {
        return;
    }
}

// local storage on click
$('#btn3').on('click', function(event) {
    event.preventDefault();
    saveTask3();
    renderTask3();
});

// ========================================================== 12-4

// set task input to local storage
function saveTask4() {
    var currentTask4 = {
        task: $('#task4').val()
    };
    console.log(currentTask4);

    localStorage.setItem('12pm task', JSON.stringify(currentTask4.task));
}

// get task input from local storage
function renderTask4() {
    var savedTask = JSON.parse(localStorage.getItem('12pm task'));
    
    if (savedTask !== null) {
        document.getElementById('task4').innerHTML = savedTask;
        console.log(savedTask);
    } else {
        return;
    }
}

// local storage on click
$('#btn4').on('click', function(event) {
    event.preventDefault();
    saveTask4();
    renderTask4();
});

// ======================== 1PM BLOCK ================================== 

// set task input to local storage
function saveTask5() {
    var currentTask5 = {
        task: $('#task5').val()
    };
    console.log(currentTask5);

    localStorage.setItem('1pm task', JSON.stringify(currentTask5.task));
}

// get task input from local storage
function renderTask5() {
    var savedTask = JSON.parse(localStorage.getItem('1pm task'));
    
    if (savedTask !== null) {
        document.getElementById('task5').innerHTML = savedTask;
        console.log(savedTask);
    } else {
        return;
    }
}

// local storage on click
$('#btn5').on('click', function(event) {
    event.preventDefault();
    saveTask5();
    renderTask5();
});


// ========================= 2PM BLOCK =================================

// set task input to local storage
function saveTask6() {
    var currentTask6 = {
        task: $('#task6').val()
    };
    console.log(currentTask6);

    localStorage.setItem('2pm task', JSON.stringify(currentTask6.task));
}

// get task input from local storage
function renderTask6() {
    var savedTask = JSON.parse(localStorage.getItem('2pm task'));
    
    if (savedTask !== null) {
        document.getElementById('task6').innerHTML = savedTask;
        console.log(savedTask);
    } else {
        return;
    }
}
// document.getElementById('task1').addEventListener('load', renderTask1);
// local storage on click
$('#btn6').on('click', function(event) {
    event.preventDefault();
    saveTask6();
    renderTask6();
});


// ============================ 3PM BLOCK============================== 

// set task input to local storage
function saveTask7() {
    var currentTask7 = {
        task: $('#task7').val()
    };
    console.log(currentTask7);

    localStorage.setItem('3pm task', JSON.stringify(currentTask7.task));
}

// get task input from local storage
function renderTask7() {
    var savedTask = JSON.parse(localStorage.getItem('3pm task'));
    
    if (savedTask !== null) {
        document.getElementById('task7').innerHTML = savedTask;
        console.log(savedTask);
    } else {
        return;
    }
}
// document.getElementById('task1').addEventListener('load', renderTask1);
// local storage on click
$('#btn7').on('click', function(event) {
    event.preventDefault();
    saveTask7();
    renderTask7();
});

// =========================== 4PM BLOCK =============================== 

// set task input to local storage
function saveTask8() {
    var currentTask8 = {
        task: $('#task8').val()
    };
    console.log(currentTask8);

    localStorage.setItem('4pm task', JSON.stringify(currentTask8.task));
}

// get task input from local storage
function renderTask8() {
    var savedTask = JSON.parse(localStorage.getItem('4pm task'));
    
    if (savedTask !== null) {
        document.getElementById('task8').innerHTML = savedTask;
        console.log(savedTask);
    } else {
        return;
    }
}

// local storage on click
$('#btn8').on('click', function(event) {
    event.preventDefault();
    saveTask8();
    renderTask8();
});

// =========================== 5PM BLOCK =============================== 

// set task input to local storage
function saveTask9() {
    var currentTask9 = {
        task: $('#task9').val()
    };
    console.log(currentTask9);

    localStorage.setItem('5pm task', JSON.stringify(currentTask9.task));
}

// get task input from local storage
function renderTask9() {
    var savedTask = JSON.parse(localStorage.getItem('5pm task'));
    
    if (savedTask !== null) {
        document.getElementById('task9').innerHTML = savedTask;
        console.log(savedTask);
    } else {
        return;
    }
}

// local storage on click
$('#btn9').on('click', function(event) {
    event.preventDefault();
    saveTask9();
    renderTask9();
});

// get tasks from local storage and display on page load 
function init() {
    renderTask1();
    renderTask2();
    renderTask3();
    renderTask4();
    renderTask5();
    renderTask6();
    renderTask7();
    renderTask8();
    renderTask9();
}
window.onload = init;