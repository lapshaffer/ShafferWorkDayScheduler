// TO-DO:
// Insert "time blocks" for each working hour of the day (let's say 8am to 6pm)
    // Each time block needs to have an hour assigned to it
    // Based on the hour assigned and the current hour in real-time, the block must change color
    // The blocks must be able to take an input and have that input saved to local storage
        // Do I want local storage to empty at midnight so each day has a clean slate?


// This is the code for the live clock
// Use Moment to display the current date and time at the top of the page, likely within the jumbotron
function renderClock() {
    $("#current-day").text(moment().format("dddd, MMMM Do, YYYY, hh:mm:ss"));
};
setInterval(renderClock, 1000);

