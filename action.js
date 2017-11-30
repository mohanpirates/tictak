// selected



var xbtn = document.getElementById('yo');
var obtn = document.getElementById('ho');

var x;
var y;

var gamestart = false;

//on click
xbtn.addEventListener('click',game1);

function game1(){

if(!gamestart){
  gamestart = true;
    xbtn.classList.add("active");
  //change mode to x
playGame();


}else{
  gamestart = false;
}


}

function playGame(){

  x = xbtn.getAttribute("class");
    y = obtn.getAttribute("class");


}
