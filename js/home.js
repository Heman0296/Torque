$(document).ready(function(){
	if(localStorage.getItem("homes") != null){
		var homesString = localStorage.getItem("homes");
		var homes = JSON.parse(homesString);
		for (var i = 0; i < homes.length ; i++) {
			$('#list').append($('<a>').attr( { class:'collection-item',href:'javascript:void(0)	' } ).append(homes[i]));
		}
	}
	else{
		$("#list").append($('<p>').attr('id','no-content').append('You have not added any homes yet. Please click the add button to add a new home and view your devices.</p>'));	
	}
	$("#list").click(function () {
    	console.log($(this).text());
	});
});

$(document).ready(function(){
	$('.fixed-action-btn').floatingActionButton();
});

$(document).ready(function(){
    	$('.modal').modal();
});

$(function(){
	$("#newHomeForm").on('submit', function(){
		var homeName = document.getElementById("home-name").value;
		if(localStorage.getItem("homes") != null) {
			var storedHomes = JSON.parse(localStorage.getItem("homes"));
			storedHomes.push(homeName);
			localStorage.setItem("homes", JSON.stringify(storedHomes));
		}else{
			var storedHomes = [];
			storedHomes.push(homeName);
			localStorage.setItem("homes",JSON.stringify(storedHomes));
		}
		localStorage.setItem(homeName, JSON.stringify($("#newHomeForm").serializeArray()));
	});
});
