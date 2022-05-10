var saveBtn = document.querySelector(".saveBtn");
var clearBtn = document.querySelector(".custom-clear");
var saveBtnAll = document.querySelector(".saveBtn");
var rows = document.getElementsByClassName("")

var nineHour = document.getElementById("9");
var tenHour = document.getElementById("10");
var elevenHour = document.getElementById("11");
var twelveHour = document.getElementById("12");
var oneHour = document.getElementById("13");
var twoHour = document.getElementById("14");
var threeHour = document.getElementById("15");
var fourHour = document.getElementById("16");
var fiveHour = document.getElementById("17");

$(document).ready(function() {
    setColor()
});

function clearData() {
    localStorage.clear();

    nineHour.textContent = "";
    tenHour.textContent = "";
    elevenHour.textContent = "";
    twelveHour.textContent = "";
    oneHour.textContent = "";
    twoHour.textContent = "";
    threeHour.textContent = "";
    fourHour.textContent = "";
    fiveHour.textContent = "";  
};

clearBtn.addEventListener("click", function() {
    clearData();
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