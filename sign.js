//function is called
//for animation and time delay
function myFunction(){
	var a=document.getElementById("dice");
	a.innerHTML='<i class="fas fa-dice-two"></i>';

	setTimeout(function(){
		a.innerHTML='<i class="fas fa-dice-four"></i>';
	},150);
	setTimeout(function(){
		a.innerHTML='<i class="fas fa-dice-two"></i>';
	},300);
	setTimeout(function(){
		a.innerHTML='<i class="fas fa-dice-five"></i>';
	},450);
	setTimeout(function(){
		a.innerHTML='<i class="fas fa-dice-one"></i>';
	},600);
	setTimeout(function(){
		a.innerHTML='<i class="fas fa-dice-three"></i>';
	},750);
	setTimeout(function(){
		a.innerHTML='<i class="fas fa-dice-one"></i>';
	},900);
	setTimeout(function(){
		a.innerHTML='<i class="fas fa-dice-two"></i>';
	},1050);
	setTimeout(function(){
		a.innerHTML='<i class="fas fa-dice-four"></i>';
	},1200);
	setTimeout(function(){
		change(a);
	},1350)
}




var count=0;        //counts the number of clicks
var score=0;
//finds a ranndom number
function change(element){
	count++;
	var num=(Math.floor(Math.random()*6)+1);
	changeicon(num,element);
	document.getElementById("content").innerHTML="dice shows :"+num;
	score=score+num;
	document.getElementById("score").innerHTML=score;
	document.getElementById("count").innerHTML="("+count+")";
}
//finds appropriate icon for the random number
function changeicon(num,element){
	switch(num)
	{
		case 1:
			element.innerHTML='<i class="fas fa-dice-one"></i>';
			break;
		case 2:
			element.innerHTML='<i class="fas fa-dice-two"></i>';
			break;
		case 3:
			element.innerHTML='<i class="fas fa-dice-three"></i>';
			break;
		case 4:
			element.innerHTML='<i class="fas fa-dice-four"></i>';
			break;
		case 5:
			element.innerHTML='<i class="fas fa-dice-five"></i>';
			break;
		case 6:
			element.innerHTML='<i class="fas fa-dice-six"></i>';
			break;

	}
}
//function for reset button
//function reset(){
	//location.reload();
   	//$("#indetail").hide();
   	//$("#container").animate({opacity:"1"});
   	//$("#container").css("pointer-events","all");
//}
