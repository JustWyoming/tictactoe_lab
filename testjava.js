// test java
document.addEventListener('DOMContentLoaded', function(){

	var cellBlock = document.querySelectorAll(".cellBlock");
	var count = 0 
	var reset = document.querySelector(".reset")
	var winGame = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], 
	[1,4,7], [2,5,8], [0,4,8], [2,4,6]];


	for(var i =0; i <cellBlock.length; i++){
		cellBlock[i].addEventListener('click', function(){
			if (this.classList.contains('.play') === false){
				count ++;
				this.classList.add('.play')
				this.innerText = (count % 2 == 1) ? "X" : "O";
				this.style.color = (count % 2 == 1) ? "#f5e13c" : "#cf0d24";
			} else { alert("please play a square that hasn't been played")}
		winnerChickenDinner();
		})	
	}
	reset.addEventListener("click", function(){
		for (var i = 0; i<cellBlock.length; i++) {
			cellBlock[i].innerHTML = " &nbsp;";
			window.location.reload();
		}
	})


	var winnerChickenDinner = function() {
		for (var j = 0; j<winGame.length; j++) {
			if((cellBlock[winGame[j][0]].innerText !== "") && 
				(cellBlock[winGame[j][1]].innerText === cellBlock[winGame[j][0]].innerText) && 
				(cellBlock[winGame[j][2]].innerText === cellBlock[winGame[j][0]].innerText)) {
				alert(cellBlock[winGame[j][1]].innerText + " wins a taco!");
				return cellBlock[winGame[j][1]].innerText;
			}    
		}
	}    
});


