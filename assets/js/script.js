// // DISPLAY TIME USING MOMENT.JS WHEN BROWSER IS OPENED
// const dailyDate = moment().format("dddd, MMMM Do, YYYY");
// $("#currentDay").html(dailyDate);
// console.log(dailyDate);

// // NESTING FUNCTION TO ADD EVENT CLICK AND TRACK TIME FROM MOMENT.JS TO STORE PRE MADE CSS SELECTORS
// $(document).ready(function () {
//   // SAVE INTO LOCAL STORAGE AND WORKS JUST LIKE VANILLA JAVASCRIPT "eventListener"
//   $(".saveBtn").click(function () {
//     const updateText = $(this).siblings(".description").val();
//     // console.log(updateText);
//     const updateTime = $(this).parent().attr("id");
//     // console.log(updateTime);

//     localStorage.setItem(updateText, updateTime);
//   });

//   // COLLECT SAVED SATA FROM STORAGE
// $("#hour8 .description").val(localStorage.getItem("hour8"));
//   $("#hour9 .description").val(localStorage.getItem("9am"));
//   $("#hour10 .description").val(localStorage.getItem("10am"));
//   $("#hour11 .description").val(localStorage.getItem("11am"));
//   $("#hour12 .description").val(localStorage.getItem("12pm"));
//   $("#hour13 .description").val(localStorage.getItem("13pm"));
//   $("#hour14 .description").val(localStorage.getItem("14pm"));
//   $("#hour15 .description").val(localStorage.getItem("15pm"));
//   $("#hour16 .description").val(localStorage.getItem("16pm"));
//   $("#hour17 .description").val(localStorage.getItem("17pm"));
//   $("#hour18 .description").val(localStorage.getItem("18pm"));
//   $("#hour19 .description").val(localStorage.getItem("pm19"));
//   $("#hour20 .description").val(localStorage.getItem("20pm"));
//   $("#hour21 .description").val(localStorage.getItem("21pm"));
//   $("#hour22 .description").val(localStorage.getItem("22pm"));
//   $("#hour23 .description").val(localStorage.getItem("23pm"));
//   $("#hour24 .description").val(localStorage.getItem("24pm"));

//   // TIME FUNCTION
//   function timeEST() {
//     // COLLECT TIME BY THE HOUR
//     const timeData = moment().hour();

//     // LOOP TIME
//     $(".time-block").each(function () {
//       const timeBlock = parseInt($(this).attr("id").split("hour")[1]);

//       // CONDITIONALS TO CHECK WHEN TO UPDATE TIME
//       if (timeBlock < timeData) {
//         $(this).addClass("past");
//         $(this).removeClass("present");
//         $(this).removeClass("future");
//       } else if (timeBlock === timeData) {
//         $(this).removeClass("past");
//         $(this).addClass("present");
//         $(this).removeClass("future");
//       } else {
//         $(this).removeClass("past");
//         $(this).removeClass("present");
//         $(this).addClass("future");
//       }
//     });
//   }

//   timeEST();
// });

// Display today's day and date
const todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function () {
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    const text = $(this).siblings(".description").val();
    const time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  // Get item from local storage if any
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

  function timeTracker() {
    //get current number of hours.
    const timeNow = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
      const blockTime = parseInt($(this).attr("id").split("hour")[1]);

      // To check the time and add the classes for background indicators
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  timeTracker();
});
