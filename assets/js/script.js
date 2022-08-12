// DISPLAY TIME USING MOMENT.JS WHEN BROWSER IS OPENED
let dailyDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(dailyDate);
console.log(dailyDate);

// COLLECT SAVED SATA FROM STORAGE
$("#h9 .description").val(localStorage.getItem("h9"));
$("#h10 .description").val(localStorage.getItem("h10"));
$("#h11 .description").val(localStorage.getItem("h11"));
$("#h12 .description").val(localStorage.getItem("h12"));
$("#h1 .description").val(localStorage.getItem("h1"));
$("#h2 .description").val(localStorage.getItem("h2"));
$("#h3 .description").val(localStorage.getItem("h3"));
$("#h4 .description").val(localStorage.getItem("h4"));
$("#h5 .description").val(localStorage.getItem("h5"));
$("#h6 .description").val(localStorage.getItem("h6"));
$("#h7 .description").val(localStorage.getItem("h7"));
$("#h8 .description").val(localStorage.getItem("h8"));
$("#h9 .description").val(localStorage.getItem("h9"));
$("#h10 .description").val(localStorage.getItem("h10"));
// NESTING FUNCTION TO ADD EVENT CLICK AND TRACK TIME FROM MOMENT.JS TO STORE PRE MADE CSS SELECTORS
$(function () {
  // SAVE INTO LOCAL STORAGE AND WORKS JUST LIKE VANILLA JAVASCRIPT "eventListener"
  $(".saveBtn").on("click", function () {
    let updateText = $(this).siblings(".description").val();
    console.log(updateText);
    let updateTime = $(this).parent().attr("id");
    console.log(updateTime);

    localStorage.setItem(updateText, updateTime);
  });
});
