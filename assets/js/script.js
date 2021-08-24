// NEED TO SET CURRENT DAY AND DISPLAY IT AT THE TOP OF THE CALENDAR
var timeEl = $("#currentDay");
var currentDay;
// call function to update clock
updateClock();
// NEED TO LOAD TIME BLOCK DATA WHEN PAGE IS OPENED TO SHOW STANDARD BUSINESS HOURS
loadTimeBlockData();



// NEED TO SETINTERVAL TO CONSTANTLY UPDATE TIME TO MAKE SURE TIME BLOCKS ARE COLORED CORRECTLY
var currentClockTime = setInterval(updateClock, 1000)

// NEED TO CREATE A FUNCTION TO SET CURRENT TIME AND CHECK TIME BLOCKS
function updateClock() {
    currentDay = moment().format('MMMM Do, YYYY');
    timeEl.text(currentDay);
    // function to check the time block
}

// NEED TO CORRECTLY COLOR TIME BLOCKS TO COORDINATE WITH CURRENT TIME DISPLAYED ON TOP OF THE CALENDAR

// NEED TO CREATE LISTENER EVENT FOR SAVE BUTTON ON CLICK AND SAVE INPUT TO LOCAL STORAGE

// SAVE INPUT TO LOCAL STORAGE BY CREATING A FUNCTION TO SAVE INFO

// NEED TO CREATE LISTENER EVENT FOR CLEAR ALL BUTTON ON CLICK AND SAVE INPUT TO LOCAL STORAGE

// SAVE INPUT TO LOCAL STORAGE BY CREATING A FUNCTION TO CLEAR INFO

// NEED TO LOAD TIME BLOCK DATA FROM LOCAL STORAGE TO EACH COORDINATING TIME BLOCK
loadTimeBlockData() {
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
