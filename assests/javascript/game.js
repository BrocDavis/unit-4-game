var wins = 0;
var losses = 0;
var currentTotal = 0;
var goalNum = 0;
var cyrstalNum = [];

$(document).ready(function() {
//on page load to set values
reset();

$(".green-rupee").click(function () {
    currentTotal += 1;
    winCheck();
});
$(".red-rupee").click(function () {
    currentTotal += 2;
    winCheck();
});
$(".blue-rupee").click(function () {
    currentTotal += 3;
    winCheck();
});
$(".purple-rupee").click(function () {
    currentTotal += 4;
    winCheck();
});

    function winCheck(){
        if (currentTotal > goalNum) {
            losses++;
            reset();
        }
        else if (currentTotal === goalNum) {
            wins++;
            reset();
        }
        updateDisplay();
    }

//setting goalNum to random number between 19-120.
function reset() {
    $(".total-number").text(goalNum = setGoalNum(19, 120));
    $(".current-total").text(currentTotal = 0);
    $(".loss-count").text(losses);
    $(".win-count").text(wins);
}

//sets goalNum to random number  
function setGoalNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//updates display
function updateDisplay(){
    $(".current-total").text(currentTotal);
    $(".loss-count").text(losses);
    $(".win-count").text(wins);
}

});// end of document.ready