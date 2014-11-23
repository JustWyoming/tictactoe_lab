// Tic Tac Toe JS
// Wyoming Telford

// var topLeft = document.getElementById('tl');
// var topMid = document.getElementById('tm');
// var topRight = document.getElementById('tr');
// var midLeft = document.getElementById('ml');
// var midMid = document.getElementById('mc');
// var midRight = document.getElementById('mr');
// var bottomLeft = document.getElementById('bl');
// var bottomMid = document.getElementById('bm');
// var bottomRight = document.getElementById('br');

// var newArray = [topLeft, topMid, topRight, midLeft, midMid, midBottom, bottomLeft, bottomMid, bottomRight];


document.addEventListener('DOMContentLoaded', function(){

	var cellBlock = document.querySelectorAll(".cellBlock");
	var count = 0 
	var reset = document.querySelector(".reset");

	for(var i =0; i <cellBlock.length; i++){
		cellBlock[i].addEventListener('click', function(){
			if (this.classList.contains('.play') === false){
				count ++;
				this.classList.add('.play')
				this.innerText = (count % 2 == 1) ? "X" : "O";
				this.style.color = (count % 2 == 1) ? "#f5e13c" : "#cf0d24";
			} else { alert("please play a square that hasn't been played")}
		})
		
	}
reset.addEventListener("click", function(){
		for (var i = 0; i<cellBlock.length; i++) {
			cellBlock[i].innerHTML = " &nbsp;";
			window.location.reload();
		}
	})
	});
