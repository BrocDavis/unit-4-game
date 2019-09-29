var wins = 0;
var losses = 0;
var currentTotal = 0;
var goalNum = 0;


// $(document).ready(function() {
 
 
// });

function reset(){
    //setting goalNum to random number between 19-120.
    goalNum = setGoalNum(19,120);
    currentTotal = 0;
}
  //sets goalNum to random number  
function setGoalNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  $(".green-rupee").click(function(){
currentTotal += 1;
console.log(currentTotal);
  });

  if(currentTotal > goalNum){
      losses++;

  }

  //game start
  reset();
