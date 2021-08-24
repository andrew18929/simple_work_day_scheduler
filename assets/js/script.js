// NEED TO SET CURRENT DAY AND DISPLAY IT AT THE TOP OF THE CALENDAR
var timeEl = $("#currentDay");
var currentTime;
// call function to update clock
updateClock();
// call loadTimeBlockData() function when page resets/opens
loadTimeBlockData();



// NEED TO SETINTERVAL TO CONSTANTLY UPDATE TIME TO MAKE SURE TIME BLOCKS ARE COLORED CORRECTLY
var currentClockTime = setInterval(updateClock, 1000)

// NEED TO CREATE A FUNCTION TO SET CURRENT TIME AND CHECK TIME BLOCKS
function updateClock() {
    currentTime = moment().format('MMMM Do, YYYY');
    timeEl.text(currentTime);
    // function to check the time block
    coordinateTimeBlocks();
}

// NEED TO CORRECTLY COLOR TIME BLOCKS TO COORDINATE WITH CURRENT TIME DISPLAYED ON TOP OF THE CALENDAR
function coordinateTimeBlocks() {
    var currentHour = currentTime.hours();
    var timeBlock = $("#time-block");
    for (var i = 0; i < timeBlock.length; i++) {
        var block = timeBlock[i];
        if(parseInt(block.id.split("-")[0]) < currentHour) {
            $(block).addClass("past");
        } else if (parseInt(block.id.split("-")[0]) === currentHour) {
            $(block).removeClass("past");
            $(block).addClass("present");
        } else {
            $(block).removeClass("past");
            $(block).removeClass("present");
            $(block).addClass("future");
        }
    }
} 


// NEED TO CREATE LISTENER EVENT FOR SAVE BUTTON ON CLICK AND SAVE INPUT TO LOCAL STORAGE
$(".saveBtn").on("click", saveClick);

// SAVE INPUT TO LOCAL STORAGE BY CREATING A FUNCTION TO SAVE INFO
function saveClick(event) {
    var inputText = $(event.target).siblings(".description").val();
    var scheduleTime = $(event.target).parent().attr("id");

    if(text === "")
        alert("Type text into the field to save it on the calendar")
    else{
        localStorage.setItem(time, text);
        alert("Task has been saved");
    }
}


// NEED TO LOAD TIME BLOCK DATA FROM LOCAL STORAGE TO EACH COORDINATING TIME BLOCK
function loadTimeBlockData() {
    $('#8 .description').val(localStorage.getItem('8'));
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#1 .description').val(localStorage.getItem('1'));
    $('#2 .description').val(localStorage.getItem('2'));
    $('#3 .description').val(localStorage.getItem('3'));
    $('#4 .description').val(localStorage.getItem('4'));
    $('#5 .description').val(localStorage.getItem('5'));
    $('#6 .description').val(localStorage.getItem('6'));
}
