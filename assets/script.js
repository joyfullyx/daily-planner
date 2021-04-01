var momentNow = moment().format('dddd, MMMM Do, YYYY');
var moment24 = moment().format('H');
var time = $('.hour');
var task = $('.description');
var btn1 = $('#btn1');
var btn2 = $('#btn2');
var btn3 = $('#btn3');
var btn4 = $('#btn4');
var btn5 = $('#btn5');
var btn6 = $('#btn6');
var btn7 = $('#btn7');
var btn8 = $('#btn8');
var btn9 = $('#btn9');


// Time and Day display in jumbotron
function update() {
    $('#currentDay').html(moment().format('dddd, MMMM Do, YYYY'));
}
setInterval(update, 1000);

// timeblock rows array
var schedule = [
    { 
        hour: 9,
        task: "",
        save: true
    },
    { 
        hour: 10,
        task: "",
        save: true
    },
    { 
        hour: 11,
        task: "",
        save: true
    },
    { 
        hour: 12,
        task: "",
        save: true
    },
    { 
        hour: 13,
        task: "",
        save: true
    },
    { 
        hour: 14,
        task: "",
        save: true
    },
    { 
        hour: 15,
        task: "",
        save: true
    },
    { 
        hour: 16,
        task: "",
        save: true
    },
    { 
        hour: 17,
        task: "",
        save: true
    },
]




// set task input to local storage
function saveTask1() {
    var currentTask= {
        task: $('#task1').val()
    };
    console.log(currentTask);

    localStorage.setItem('currentTask', JSON.stringify(currentTask));
}

// get task input from local storage
function renderTask1() {
    var savedTask = JSON.parse(localStorage.getItem('currentTask'));

    if (savedTask !== null) {
        document.getElementById('task1').innerHTML = savedTask.task;
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


function init() {
    renderTask1();
}
init();