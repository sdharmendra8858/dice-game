	var playername;
	$(document).ready(function(){



 	    $("#indetail").mouseout(function(){
    	    $("$container").css("pointer-events", "none");
   		});
   		$("#bton3").click(function(){
        playername=$("#pname").val();
        if(playername!=""){
   			$("#indetail").fadeOut(800);
   			$("#container").animate({opacity:"1"},500);
   			$("#container").css("pointer-events","all");
   			//playername=$("#pname").val();
   			$("#plname").text(playername +":");
      }
      else{
        $("#message").css("display","block");
      }
   		});

      playername=$("#pname").val();
   		$("input").on("keypress",function search(e) {
        if (playername!="") {
   		      if(e.keyCode == 13) {
            $("#indetail").fadeOut(800);
       			$("#container").animate({opacity:"1"},500);
       			$("#container").css("pointer-events","all");
       			//playername=$("#pname").val();
       			$("#plname").text(playername +":");
    }
  }
  else{
    $("#message").css("display","block");
  }
});
});
//reset function
function reset(){
    location.reload();
    $("#indetail").hide();
    $("#container").animate({opacity:"1"});
    $("#container").css("pointer-events","all");
}

//input number of choices


//high score