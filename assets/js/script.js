var saveBtn = document.querySelector(".saveBtn");
var clearBtn = document.querySelector(".custom-clear");

var nineText = document.getElementById("9");
var tenText = document.getElementById("10");
var elevenText = document.getElementById("11");
var twelveText = document.getElementById("12");
var thirteenText = document.getElementById("13");
var fourteenText = document.getElementById("14");
var fifteenText = document.getElementById("15");
var sixteenText = document.getElementById("16");
var seventeenText = document.getElementById("17");

$(document).ready(function() {
    setColor();
});

function setColor() {
    var currentHour = moment().hours()
    $(".time-block").each(function (){
        var blockHour = parseInt($(this).children("textarea").attr("id"))
        if(blockHour < currentHour) {
            $(this).children("textarea").addClass("past")
            console.log("past");
        };
        if(blockHour > currentHour) {
            $(this).children("textarea").addClass("future")
            console.log("future");
        };
        if(blockHour === currentHour) {
            $(this).children("textarea").addClass("present")
            console.log("present");
        };
    });
};

$('#currentDay').text(moment().format("dddd, MMMM D, h:mm:ss a"));