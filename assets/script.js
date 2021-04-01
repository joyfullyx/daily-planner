var textInput = $('textarea');

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

var tasks = [];

// save to local storage
function saveTask() {
    var task = {
        todo: textInput.value
    }
    localStorage.setItem('task', JSON.stringify(task));
}

function renderTask() {
    // use JSON.parse() to convert text to object
    var lastTask = JSON.parse(localStorage.getItem('task'));
    // check if data returned, if not, exit out of function
    if (lastTask !== null) {
        textInput.text(textInput.value)
        console.log(textInput.value)
    } else {
        return;
    }
}

$('button').on('click', function(event) {
    event.preventDefault();
    saveTask();
    renderTask();
})



// set localstorage to stay on page
// function showTask() {
//     schedule.forEach(function ())
// }


// function saveTask () {
//     for (var i = 0; i < schedule[i].length; i++) {
//         var task = schedule[i]
//     }
// }


// function saveLocal() {
//     var savedTasks = JSON.parse(localStorage.getItem('tasks'));

//     if (savedTasks !== null) {
//         tasks = schedule.task.value;
//         console.log(savedTasks)
//     }

//     saveLocal();
// }

// function getLocal() {
//     localStorage.setItem('tasks', JSON.stringify(schedule.task));
// }

// var textInput = $('.description');

// $('button').on('click', function() {
//     console.log('save event')

//     var todoInput = {
//         textInput: textInput.value
//     }

// $('button').on('click', function(event) {
//     event.preventDefault();

//     var taskText = textInput.value;

//     tasks.push(savedTasks);
//     textInput.value = textInput.value;

//     getLocal();
//     saveLocal();
// });

