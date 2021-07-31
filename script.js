// Adds the current date into the ID currentDay

let currentDate = moment().format('HH:mm:ss MMM, ddd Do YYYY');
$("#currentDay").html(currentDate);




$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        var activitie = $(this).siblings(".description").val();
        localStorage.setItem(time, activitie);
    })
   
// With this function, we verify the time and add color style
// Color #d3d3d3 if the text area is past the current time.
// Red if the text area is the the current time.
// Green if the text area is not yet after the current time.
    function checkTime() {
        let currentTime = moment().hour();
       
       
        $(".time-block").each(function () {
           
            var pastTime = parseInt($(this).attr("id").split("hour")[1]);

            if (pastTime == currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else if (currentTime > pastTime) {
                 $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    // Retrieve items from local storage.
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

    
    checkTime();
})