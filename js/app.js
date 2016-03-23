var count = 0;
var highScore = 0;
var luck1 = [1,0,0]
var luck2 = [0,1,0]
var luck3 = [0,0,1]
var game = new Audio ("game.mp3")

var countUp1 = function (){
	result = Math.round(Math.random()*2);
	game.play();
	if (luck1[result] == 1) {
		count++;
	}
	else{
		count=0;
		game.play();
	}
	if (count >= highScore) {
		highScore = count;
	}
	console.log("Count =" + count);
	console.log("highScore =" + highScore);
	document.getElementById('count').innerHTML = count;
	document.getElementById('highScore').innerHTML = highScore;

}
var countUp2 = function (){
	result = Math.round(Math.random()*2);
	
	if (luck2[result] == 1) {
		count++;
	}
	else{
		count=0;
		game.play();
	}
	if (count >= highScore) {
		highScore = count;
	}	
	console.log("Count =" + count);
	console.log("highScore =" + highScore);
	document.getElementById('count').innerHTML = count;
	document.getElementById('highScore').innerHTML = highScore;

}
var countUp3 = function (){
	result = Math.round(Math.random()*2);
	game.play();
	if (luck3[result] == 1) {
		count++;
	}
	else{
		count=0;
		game.play();
	}
	if (count >= highScore) {
		highScore = count;
	}
	console.log("Count =" + count);
	console.log("highScore =" + highScore);
	document.getElementById('count').innerHTML = count;
	document.getElementById('highScore').innerHTML = highScore;

}
