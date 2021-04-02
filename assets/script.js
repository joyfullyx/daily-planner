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
// Time and Day display in jumbotron
// function update() {
//     $('#currentDay').html(moment().format('dddd, MMMM Do, YYYY'));
// }
// setInterval(update, 1000);


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
    var moment = schedule[i].moment
    console.log(moment);

    if (moment[i] > momentNow24) {
        $('.description').css('background-color', '#d3d3d3')
    } else if (moment[i] === momentNow24) {
        $('.description').css('background-color', '#ff6961')
    } else {
        $('.description').css('background-color', '#77dd77')
    }
}




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
    console.log(savedTask);
    
    if (savedTask !== null) {
        document.getElementById('task1').innerHTML = savedTask;
        console.log(savedTask);

    } else {
        return;
    }
}

// document.getElementById('task1').addEventListener('load', renderTask());


// local storage on click
$('#btn1').on('click', function(event) {
    event.preventDefault();
    saveTask1();
    renderTask1();
});


// function init() {
//     renderTask1();
// }
// init();

// > < with 24hr time


