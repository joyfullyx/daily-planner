var textInput = $('textarea');
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



// var tasks = [];

// // save to local storage
// function saveTask() {
//     for (var i = 0; i < schedule.length; i++) {

//     }

//     var task = {
//         todo: textInput.value
//     }
//     localStorage.setItem('task', JSON.stringify(task));
// }

// function renderTask() {
//     // use JSON.parse() to convert text to object
//     var lastTask = JSON.parse(localStorage.getItem('task'));
//     // check if data returned, if not, exit out of function
//     if (lastTask !== null) {
//         textInput.text(textInput.value)
//         console.log(textInput.value)
//     } else {
//         return;
//     }
// }


var task9 = document.getElementById('task1');

// local storage
// $('#btn1').on('click', function(event) {
//     var currentTask = {
//         time: schedule[0].hour,
//         task: $('#task1').val()   
//     }
//     console.log(currentTask);

//     localStorage.setItem('currentTask', JSON.stringify(currentTask));
//     console.log(localStorage.getItem('currentTask'));
    
//     if (currentTask !== null) {
//         var task9 = JSON.parse(localStorage.getItem('currentTask'));
//         textInput.textContent = currentTask.task;
//     } else {
//         return;
//     }
// })  


$('#btn1').on('click', function(event) {
    var currentTask = {
        // time: schedule[0].hour,
        task: $('#task1').val()   
    }
    console.log(currentTask);

    localStorage.setItem('currentTask', JSON.stringify(currentTask));
    console.log(localStorage.getItem('currentTask'));
    

    var getCurrentTask = localStorage.getItem('currentTask');
    console.log('getCurrentTask', JSON.parse(getCurrentTask));
    document.getElementById('task1').innerHTML = getCurrentTask;
    // if (currentTask !== null) {
    //     // var task9 = JSON.parse(localStorage.getItem('currentTask'));
    //     var task9 = localStorage.getItem('currentTask')
    //     textInput.textContent = currentTask.task;
    // } else {
    //     return;
    // }
})  