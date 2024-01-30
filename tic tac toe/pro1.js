var newname1 = "player 1";
var newname2 = "player 2";
var answer = "o";
var x = 1;
var numberr = 2;
var final1, final2, final3, final4, final5, final6, final7, final8, final9;
var nameee;

function changeename() {
  newname1 = prompt("Enter the name for player 1");
  newname2 = prompt("Enter the name for player 2");
  document.querySelector(".pla-1").textContent = newname1;
  document.querySelector(".pla-2").textContent = newname2;
  document.querySelector(".acctive1").textContent = newname1;
}

function playagain() {
  document.getElementById(`pla-1`).style.fontSize = "80px";
  document.getElementById(`pla-1`).style.backgroundColor = "rgb(232, 121, 3)";
  document.getElementById(`pla-2`).style.fontSize = "50px";
  document.getElementById("pla-2").style.backgroundColor = "chartreuse";
  document.querySelector(".won").style.visibility = "hidden";
  document.querySelector(`.wins1`).style.visibility = "hidden";
  document.querySelector(`.wins2`).style.visibility = "hidden";
  document.querySelector(".acctive1").style.visibility = "visible";
  document.querySelector(".acc").style.visibility = "visible";
  newname1 = "player 1";
  newname2 = "player 2";
  document.querySelector(".pla-1").textContent = newname1;
  document.querySelector(".pla-2").textContent = newname2;
  document.querySelector(".acctive1").textContent = newname1;
  document.querySelector(".acc").textContent = "starts";
  document.querySelector(".btn-1").value = "";
  document.querySelector(".btn-2").value = "";
  document.querySelector(".btn-3").value = "";
  document.querySelector(".btn-4").value = "";
  document.querySelector(".btn-5").value = "";
  document.querySelector(".btn-6").value = "";
  document.querySelector(".btn-7").value = "";
  document.querySelector(".btn-8").value = "";
  document.querySelector(".btn-9").value = "";
}

function active() {
  document.getElementById(`pla-${x}`).style.fontSize = "50px";
  document.getElementById(`pla-${x}`).style.backgroundColor = "chartreuse";
  x = x === 1 ? 2 : 1;
  // document.getElementById("acctive").style.visibility = `hidden`;
  // document.querySelector(".acc").style.visibility = "hidden";

  document.getElementById(`pla-${x}`).style.fontSize = "80px";
  document.getElementById(`pla-${x}`).style.backgroundColor =
    "rgb(232, 121, 3)";
  nameee = x === 2 ? newname2 : newname1;
  document.querySelector(`.acctive1`).textContent = nameee;
}
function btnn1() {
  var value = document.querySelector(`.btn-1`);
  answer = answer === "o" ? "x" : "o";
  value.value = answer;
  numberr = numberr == 2 ? 1 : 2;
  final1 = answer;
  active();
  winner();
}
function btnn2() {
  var value = document.querySelector(`.btn-2`);
  answer = answer === "o" ? "x" : "o";
  value.value = answer;
  final2 = answer;
  active();
  numberr = numberr == 2 ? 1 : 2;
  winner();
}
function btnn3() {
  var value = document.querySelector(`.btn-3`);
  answer = answer === "o" ? "x" : "o";
  value.value = answer;
  final3 = answer;
  numberr = numberr === 2 ? 1 : 2;
  active();
  winner();
}
function btnn4() {
  var value = document.querySelector(`.btn-4`);
  answer = answer === "o" ? "x" : "o";
  value.value = answer;
  final4 = answer;
  active();
  numberr = numberr === 2 ? 1 : 2;
  winner();
}
function btnn5() {
  var value = document.querySelector(`.btn-5`);
  answer = answer === "o" ? "x" : "o";
  value.value = answer;
  final5 = answer;
  numberr = numberr === 2 ? 1 : 2;
  active();
  winner();
}
function btnn6() {
  var value = document.querySelector(`.btn-6`);
  answer = answer === "o" ? "x" : "o";
  value.value = answer;
  final6 = answer;
  active();
  numberr = numberr === 2 ? 1 : 2;
  winner();
}
function btnn7() {
  var value = document.querySelector(`.btn-7`);
  answer = answer === "o" ? "x" : "o";
  value.value = answer;
  final7 = answer;
  numberr = numberr === 2 ? 1 : 2;
  winner();
  active();
}
function btnn8() {
  var value = document.querySelector(`.btn-8`);
  answer = answer === "o" ? "x" : "o";
  value.value = answer;
  final8 = answer;
  numberr = numberr === 2 ? 1 : 2;
  active();
  winner();
}
function btnn9() {
  var value = document.querySelector(`.btn-9`);
  answer = answer === "o" ? "x" : "o";
  final9 = answer;
  numberr = numberr === 2 ? 1 : 2;
  value.value = answer;
  active();
  winner();
}

function winner() {
  if (
    (final1 == "x" && final2 == "x" && final3 == "x") ||
    (final1 == "o" && final2 == "o" && final3 == "o") ||
    (final4 == "o" && final5 == "o" && final6 == "o") ||
    (final4 == "x" && final5 == "x" && final6 == "x") ||
    (final7 == "o" && final8 == "o" && final9 == "o") ||
    (final7 == "x" && final8 == "x" && final9 == "x") ||
    (final1 == "o" && final4 == "o" && final7 == "o") ||
    (final1 == "x" && final4 == "x" && final7 == "x") ||
    (final2 == "o" && final5 == "o" && final8 == "o") ||
    (final2 == "x" && final5 == "x" && final8 == "x") ||
    (final3 == "o" && final6 == "o" && final9 == "o") ||
    (final3 == "x" && final6 == "x" && final9 == "x") ||
    (final1 == "o" && final5 == "o" && final9 == "o") ||
    (final1 == "x" && final5 == "x" && final9 == "x") ||
    (final3 == "o" && final5 == "o" && final7 == "o") ||
    (final3 == "x" && final5 == "x" && final7 == "x")
  ) {
    document.querySelector(".won").style.visibility = "visible";
    document.querySelector(`.wins1`).textContent = newname1;
    document.querySelector(`.wins2`).textContent = newname2;
    document.querySelector(`.wins${numberr}`).style.visibility = "visible";
    document.getElementById(`pla-${x}`).style.fontSize = "50px";
    document.getElementById(`pla-${x}`).style.backgroundColor = "chartreuse";
    document.querySelector(".acctive1").style.visibility = "hidden";
    document.querySelector(".acc").style.visibility = "hidden";
  }
}
