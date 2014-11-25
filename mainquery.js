//call DOM module
$(function(){
// global variables adapted for jQuery
	var cellBlock = $('.cellBlock');
	var count = 0;
	var reset = $(".reset");
	var winGame = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], 
	[1,4,7], [2,5,8], [0,4,8], [2,4,6]];
	var gameOver = "";

// game function
	cellBlock.on('click', function(){
		if (gameOver === true) { return alert("there is already a winner, please reset.");}
		if ($(this).hasClass('.play') === false){
		count++;
		$(this).addClass('.play');
		$(this).text((count % 2 == 1) ? "X" : "O");
		$(this).css('color', (count % 2 == 1) ? "#f5e13c" : "#cf0d24");
		 } else { alert("please play a square that hasn't been played")}
		 winnerChickenDinner();
	})

//reset function
reset.on('click', function(){
	
	window.location.reload();

})

	var winnerChickenDinner = function() {
		for (var j = 0; j<winGame.length; j++) {
		if((cellBlock[winGame[j][0]].innerText !== "") && 
				(cellBlock[winGame[j][1]].innerText === cellBlock[winGame[j][0]].innerText) && 
				(cellBlock[winGame[j][2]].innerText === cellBlock[winGame[j][0]].innerText)) {
				alert(cellBlock[winGame[j][1]].innerText + " wins a taco!");
			// goal is to float a taco win image in place of alert with the __ wins a taco line. it would load ideally into the cellBlock
			// maybe using append? needs to turn off and reset to regular cellBlock game screen when clicked, or after a duration of time. 
			// does image need to be hidden in css until activated by load function? or would I use delay and queue?
			// cellBlock[winGame[j][1]].animate({ url(tacodeath.jpg)
   // 									 	opacity: 0.25,
   //  									left: "+=50",
   //  									height: "toggle"
  	// 									}, 5000, function() {
   //  											Animation complete.
  	// 											});
			gameOver = true
				return cellBlock[winGame[j][1]].innerText;
			}    
		}
	}   

}); // end of DOM Module