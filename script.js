//creates current day, month & date and puts it in the jumbotron
var currentDay = moment().format("dddd, MMMM Do")
var displayMoment = document.getElementById("currentDay");
  displayMoment.innerHTML = currentDay;



$(document).ready(function() {

//checks each time block against current time to determin styling
function timeUpdater() {
    var timeNow = moment().hours();
    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (blockHour < timeNow) {
            $(this).addClass("past");
        } else if (blockHour === timeNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
};

timeUpdater();

var interval = setInterval(timeUpdater, 15000);


//click event that sets textarea to local storage
$(".saveBtn").on("click", function () {

    var value = $(this).siblings(".description").val();

    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);

});

// //retrieving item from local storage
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));
$("#hour-20 .description").val(localStorage.getItem("hour-20"));

});
