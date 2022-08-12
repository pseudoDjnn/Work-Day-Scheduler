// DISPLAY TIME USING MOMENT.JS WHEN BROWSER IS OPENED
let dailyDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(dailyDate);
