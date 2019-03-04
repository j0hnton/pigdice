// UI
$(document).ready(function(){
  $("#click1").click(function(){
    $("div#instructions").toggle(1000)
  })
  $("#begin").click(function(){
    $("#form").toggle(2000)
    $("#begin").toggle(500)
  })
  $("button#start").click(function(){
    $("#game").toggle(2000)
    $("#form").toggle()
    $("#head").toggle()
    $("button#start0").toggle()
    })
    $("button#start0").click(function(){
      $("#board2").toggle(500)
      $("#board").toggle(500)
    })
  })
  // BUSINESS LOGIC
  // ROLL1


  var scores1=[];
  function roll() {
  var side = Math.floor((Math.random() * 6) + 1);
   var sum=scores1.push(side);
  var name= $("input#name").val();
  document.getElementById("value").innerHTML =scores1;
  document.getElementById("name0").innerHTML =name;
  if(side==1){
    $("#board2").toggle(700);
    $("#board").toggle(700);
    scores1.length=0;
  }
  else{

  }
}
// HOLD1
function hold(){
const scores=scores1.reduce(add);
function add(accumulator, a) {
  return accumulator + a;
}
document.getElementById("score1").innerHTML=scores;
}

// ROLL2
var scores2=[];
function roll0() {
var side2 = Math.floor((Math.random() * 6) + 1);
scores2.push(side2);
var name1= $("input#name1").val();
document.getElementById("value2").innerHTML =scores2;
document.getElementById("name2").innerHTML =name1;
if(side2==1){
  $("#board2").toggle(700);
  $("#board").toggle(700);
  $("#lose").toggle(700);
  scores2.length=0;
}
else{

}
}
// HOLD2
function hold0(){
  const scores=scores2.reduce(add);

function add(accumulator, a) {
    return accumulator + a;
}

document.getElementById("score2").innerHTML=scores;
}
