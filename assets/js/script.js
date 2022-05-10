var saveBtn = document.querySelector(".saveBtn");

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
    saveData();
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

function saveData() {

    var nine = localStorage.getItem("nineTime");
    var ten = localStorage.getItem("tenTime");
    var eleven = localStorage.getItem("elevenTime");
    var twelve = localStorage.getItem("twelveTime");
    var thirteen = localStorage.getItem("thirteenTime");
    var fourteen = localStorage.getItem("fourteenTime");
    var fifteen = localStorage.getItem("fifteenTime");
    var sixteen = localStorage.getItem("sixteenTime");
    var seventeen = localStorage.getItem("seventeenTime");
    
    nineText.textContent = nine;
    tenText.textContent = ten;
    elevenText.textContent = eleven;
    twelveText.textContent = twelve;
    thirteenText.textContent = thirteen;
    fourteenText.textContent = fourteen;
    fifteenText.textContent = fifteen;
    sixteenText.textContent = sixteen;
    seventeenText.textContent = seventeen;
    };
    
    for (i = 0; i < saveBtn.length; i++) {
        saveBtn[i].addEventListener("click", function(){
    
        var nine = nineText.value;
        var ten = tenText.value;
        var eleven = elevenText.value;
        var twelve = twelveText.value;
        var thirteen = thirteenText.value;
        var fourteen = fourteenText.value;
        var fifteen = fifteenText.value;
        var sixteen = sixteenText.value;
        var seventeen = seventeenText.value;
    
    localStorage.setItem("nineTime", nine);
    localStorage.setItem("tenTime", ten);
    localStorage.setItem("elevenTime", eleven);
    localStorage.setItem("twelveTime", twelve);
    localStorage.setItem("thirteenTime", thirteen);
    localStorage.setItem("fourteenTime", fourteen);
    localStorage.setItem("fifteenTime", fifteen);
    localStorage.setItem("sixteenTime", sixteen);
    localStorage.setItem("seventeenTime", seventeen);
    });
};


$('#currentDay').text(moment().format("dddd, MMMM D, h:mm:ss a"));