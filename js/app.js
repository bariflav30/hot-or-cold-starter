
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*---My Code---*/

  	$('#guessButton').click(function(){
  		newGame();
  	});
}); //document end here

var random=Math.floor(Math.random()*100 + 1);

function playGame(){

	var guess=$('#userGuess').val();
	var howClose=(Math.abs(random-guess));

	if(guess >=101 || guess <=0 || isNaN(guess)){
	alert('Guess a number between 1 and 100');
	return false;
	}

	if ((howClose<=100) && (howClose>=50)){
		$('#feedback').text('You are ice cold');
	}
	if ((howClose<=49) && (howClose>=30)){
		$('#feedback').text('You are cold');
	}
	if ((howClose<=29) && (howClose>=10)){
		$('#feedback').text('You are warm');
	}
	if ((howClose<=9) && (howClose>=1)){
		$('#feedback').text('You are hot');
	}
	if (howClose===0){
		$('#feedback').text('You guessed it!');
	}




