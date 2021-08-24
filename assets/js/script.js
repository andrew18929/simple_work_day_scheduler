// set current day and display it at the top of the calendar
var timeEl = $("#currentDay");
var currentDayAndTime;
// call function to update clock
clockUpdater();
// call loadTimeBlockData() function when page resets/opens
loadTimeBlockData();

// setInterval to constantly update time to make sure time blocks are colored correctly
var currentClockTime = setInterval(clockUpdater, 1000)

//Set current time and coordinate with time blocks
function clockUpdater(){
    currentDayAndTime = moment();
    timeEl.text(currentDayAndTime.format('MMMM Do, YYYY'));
    coordinateTimeBlocks();
}

// correctly color time blocks to coordinate with current time displayed on top of the scheduler
function coordinateTimeBlocks() {
    var currentHour = currentDayAndTime.hours();
    var timeBlock = $(".time-block");
    for(var i = 0; i < timeBlock.length; i++){
        var block = timeBlock[i];
        if(parseInt(block.id.split("-")[0]) < currentHour){
            $(block).addClass("past");
        }
        else if(parseInt(block.id.split("-")[0]) === currentHour){
            $(block).removeClass("past");
            $(block).addClass("present");
        }
        else{
            $(block).removeClass("past");
            $(block).removeClass("present");
            $(block).addClass("future");
        }
    }
}

// create a listener event for the save button on click 
$(".saveBtn").on("click", saveClick);

//Save input to local storage by creating a function to save info
function saveClick(event){
    var inputText = $(event.target).siblings(".description").val();
    var timeOfDay = $(event.target).parent().attr("id");

    if(inputText === "")
        alert("A task must be filled to save to your scheduler")
    else{
        localStorage.setItem(timeOfDay, inputText);
        alert("Your task has been saved to your scheduler");
    }

}

// load time block data from local storage to each coordinating time block
function loadTimeBlockData(){ 
    $('#8 .description').val(localStorage.getItem('8'));
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
    $('#18 .description').val(localStorage.getItem('18'));
}

