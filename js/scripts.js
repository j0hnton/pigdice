// UI
$(document).ready(function(){
  $("#click1").click(function(){
    $("div#instructions").toggle(1000)
  })
  $("#begin").click(function(){
    $("#form").toggle(2000)
    $("#begin").toggle(500)
    $("audio").toggle()
  })
  $("button#start").click(function(){
    $("#game").toggle(2000)
    $("#form").toggle()
    $("#head").toggle()
    $("button#start0").toggle()
    })
  })
  // BUSINESS LOGIC
  // ROLL1
  var scores1=[];
  function roll() {
  var side = Math.floor((Math.random() * 6) + 1);
  scores1.push(side);
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
    var side = Math.floor((Math.random() * 6) + 1);
    var hold=side;
document.getElementById("score1").innerHTML=hold;
}

// ROLL2
var scores1=[];
function roll0() {
var side1 = Math.floor((Math.random() * 6) + 1);
scores1.push(side1);
var name1= $("input#name1").val();
document.getElementById("value2").innerHTML =scores1;
document.getElementById("name1").innerHTML =name1;
if(side1==1){
  $("#board2").toggle(700);
  $("#board").toggle(700);
  $("#lose").toggle(700);
  scores1.length=0;
}
else{

}
}
// HOLD2
function hold0(){
    var side = Math.floor((Math.random() * 6) + 1);
    var hold=side;
document.getElementById("score2").innerHTML=hold;
}
