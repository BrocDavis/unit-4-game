var wins = 0;
var losses = 0;
var currentTotal = 0;
var goalNum = 0;
var crystalNum = [];

$(document).ready(function() {
//on page load to set values
reset();

$(".green-rupee").click(function () {
    currentTotal += crystalNum[0];
    winCheck();
});
$(".red-rupee").click(function () {
    currentTotal += crystalNum[1];
    winCheck();
});
$(".blue-rupee").click(function () {
    currentTotal += crystalNum[2];
    winCheck();
});
$(".purple-rupee").click(function () {
    currentTotal += crystalNum[3];
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
    $(".total-number").text(goalNum = setRandomNum(19, 120));
    crystalNum[0] = setRandomNum(1,12);
    crystalNum[1] = setRandomNum(1,12);
    crystalNum[2] = setRandomNum(1,12);
    crystalNum[3] = setRandomNum(1,12);
    $(".current-total").text(currentTotal = 0);
    $(".loss-count").text(losses);
    $(".win-count").text(wins);
}

//sets goalNum to random number with specified min and max values
function setRandomNum(min, max) {
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