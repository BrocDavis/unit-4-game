var wins = 0;
var losses = 0;
var currentTotal = 0;
var goalNum = 0;
var cyrstalNum = [];

// $(document).ready(function() {


// });

function reset() {
    //setting goalNum to random number between 19-120.
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
function updateDisplay(){
    $(".current-total").text(currentTotal);
}

$(".green-rupee").click(function () {
    currentTotal += 1;
    updateDisplay();
});
$(".red-rupee").click(function () {
    currentTotal += 2;
    updateDisplay();``
});
$(".blue-rupee").click(function () {
    currentTotal += 3;
    updateDisplay();
});
$(".purple-rupee").click(function () {
    currentTotal += 4;
    updateDisplay();
});


if (currentTotal > goalNum) {
    losses++;
}
else if(currentTotal < goalNum){
    // updateDisplay();
}

//game start
reset();
