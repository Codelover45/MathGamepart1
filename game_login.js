function addUser() {
player1_name =  document.getElementById("player1_name_input").value;
player2_name =  document.getElementById("player2_name_input").value;

localStorage.setItem("player1_name", player1_name);
localStorage.setItem("player2_name", player2_name);

window.location = "game_page.html";

}

function myFunction() {
    document.body.style.backgroundColor = "red";
}
function changecolor() {
    document.body.style.backgroundColor = "pink"
}
function changecolor1() {
    document.body.style.backgroundColor = "orange"
}
function changecolor2() {
    document.body.style.backgroundColor = "yellow"
}
function changecolor3() {
    document.body.style.backgroundColor = "green"
}
function changecolor4() {
    document.body.style.backgroundColor = "aqua"
}
function changecolor5() {
    document.body.style.backgroundColor = "purple"
}
function hide() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

x