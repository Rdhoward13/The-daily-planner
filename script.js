// Assign saveBtn to button variable
var button = $(".saveBtn")

// .ready() Runs everything before user sees it
// Displays current date
$(document).ready(function() {
    var date = moment().format("dddd MMMM Do");
    $("#currentDay").text(date);

    // Time Block Colors: Past = Grey || Present = Red || Future = Green 
    function currentTime() {
        var current = moment().hours()
        var time = $(".time-block");
        time.each(function() {
            var hour = parseInt($(this).attr("id"))
            if (hour === current) {
                $(this).children(".col-sm-10").attr("class", "present col-sm-10 description")
            } else if (current > hour) {
                $(this).children(".col-sm-10").attr("class", "past col-sm-10 description")
            } else {
                $(this).children(".col-sm-10").attr("class", "future col-sm-10 description")
            }
        })
    };
    currentTime()

    //Local Storage for saving scheduled events
    button.on("click", function(event) {
        event.preventDefault();
        var text = $(this).siblings(".col-sm-10").val().replace(/[""]+/g, "");
        var parent = $(this).parent().attr("id");

        localStorage.setItem(parent, JSON.stringify(text));
    });

    // Replacing textareas with 'global' saved for that row
    // (/[""]+/g, "") uses Global Modifier to display everything that was previously saved
    $("#9 textarea").val(localStorage.getItem("9").replace(/[""]+/g, ""));
    $("#10 textarea").val(localStorage.getItem("10").replace(/[""]+/g, ""));
    $("#11 textarea").val(localStorage.getItem("11").replace(/[""]+/g, ""));
    $("#12 textarea").val(localStorage.getItem("12").replace(/[""]+/g, ""));
    $("#13 textarea").val(localStorage.getItem("13").replace(/[""]+/g, ""));
    $("#14 textarea").val(localStorage.getItem("14").replace(/[""]+/g, ""));
    $("#15 textarea").val(localStorage.getItem("15").replace(/[""]+/g, ""));
    $("#16 textarea").val(localStorage.getItem("16").replace(/[""]+/g, ""));
    $("#17 textarea").val(localStorage.getItem("17")).replace(/[""]+/g, "");
});





// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
