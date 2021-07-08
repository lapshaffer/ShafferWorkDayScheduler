// TO-DO:
// Insert "time blocks" for each working hour of the day (let's say 8am to 6pm)
    // The empty time blocks are set in the HTML
    // Each time block needs to have an hour assigned to it
    // Based on the hour assigned and the current hour in real-time, the block must change color
        // If block asking if current hour is equal to the set hour to determine block color
    // The blocks must be able to take an input and have that input saved to local storage
// Extra: Do I want local storage to empty at midnight so each day has a clean slate?


// This is the code for the live clock
// Use Moment to display the current date and time at the top of the page, within the jumbotron
function renderClock() {
    $("#current-day").text(moment().format("dddd, MMMM Do, YYYY, hh:mm:ss"));
};
setInterval(renderClock, 1000);

// Setting a variable for the current hour
// The .hour method retrieves or sets the hour. In this case, it retrieves the current local hour
var currentHour = moment().hour();
// This console log confirmed that hours are stored in a 24 hour format rather than 12, so each timeblock will need an assigned hour from hour 8 to hour 18
console.log(currentHour);

// Not currently working 
// Getting an error that saveBtn.addEventListener isn't a function
// adding a variable to represent the save button
var saveBtn = document.querySelectorAll(".saveBtn");
// adding event listener to save button to save textArea to local storage
function saveButton() { saveBtn.addEventListener("click", function() {
    // creating a variable to hold the event description from the textArea
    // This works because the textArea is the sibling of the saveBtn, and has the class of .description
    var description = $(this).siblings(".description").val();
    // creating a variable to hold the time of the event
    // This works because the timeblock is the parent of the saveBtn, and it saves the id of each block, which is the time
    var time = $(this).parent().attr("id");
    // saving the time and event description to local storage
    localStorage.setItem(time, description);
})};

saveButton();

// Not currently working
function colorChange() {
    // for each timeblock, run this function
    $(".time-block").each(function () {
        // read the id of each timeblock remove the "hour" and return the number to the variable
        // right now, this isn't working for times past 9am, probably because the other numbers are double digits?
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockTime);
        if (blockTime < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (blockTime === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");

        }
    })
};

colorChange(); 

// Writing the local storage to the textArea if there is a description in local storage 
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));