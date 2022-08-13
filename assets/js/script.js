// DISPLAY TIME USING MOMENT.JS WHEN BROWSER IS OPENED
var dailyDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").html(dailyDate);
console.log(dailyDate);

// NESTING FUNCTION TO ADD EVENT CLICK AND TRACK TIME FROM MOMENT.JS TO STORE PRE MADE CSS SELECTORS
$(document).ready(function () {
  // SAVE INTO LOCAL STORAGE AND WORKS JUST LIKE VANILLA JAVASCRIPT "eventListener"
  $(".saveBtn").on("click", function () {
    var updateText = $(this).siblings(".description").val();
    // console.log(updateText);
    var updateTime = $(this).parent().attr("id");
    // console.log(updateTime);

    localStorage.setItem(updateTime, updateText);
  });

  // TIME FUNCTION
  function timeEST() {
    // COLLECT TIME BY THE HOUR
    var timeData = moment().hour();

    // LOOP TIME
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

      // CONDITIONALS TO CHECK WHEN TO UPDATE TIME
      if (timeBlock < timeData) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (timeBlock === timeData) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  // COLLECT SAVED SATA FROM STORAGE
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  // $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  // $("#hour18 .description").val(localStorage.getItem("hour18"));
  // $("#hour19 .description").val(localStorage.getItem("hour19"));
  // $("#hour20 .description").val(localStorage.getItem("hour20"));
  // $("#hour21 .description").val(localStorage.getItem("hour21"));
  // $("#hour22 .description").val(localStorage.getItem("hour22"));
  // $("#hour23 .description").val(localStorage.getItem("hour23"));
  // $("#hour24 .description").val(localStorage.getItem("hour24"));

  timeEST();
});
