$(document).ready(function(){

	if(localStorage.getItem("homes") != null){
		if(JSON.parse(localStorage.getItem("homes")).length != 0){
			var homesString = localStorage.getItem("homes");
			var homes = JSON.parse(homesString);
			for (var i = 0; i < homes.length ; i++) {
				$("#list").append('<li class="collection-item"><div value="' + homes[i] + '"><div class="openUser" value="' + homes[i] + '">' + homes[i] + '</div><a href="#!" class="secondary-content"><i class="material-icons deleteUser">send</i></a></div></li>');
			}
		}
		else{
			$("#list").append($('<p>').attr('id','no-content').append('You have not added any homes yet. Please click the add button to add a new home and view your devices.</p>'));	
		}
	}else {
		$("#list").append($('<p>').attr('id','no-content').append('You have not added any homes yet. Please click the add button to add a new home and view your devices.</p>'));	
	}
	
	$("i.deleteUser").on('click', function() {
		var userName = $(this).parent().parent()[0].getAttribute('value');
		var homesString = localStorage.getItem("homes");
		var homes = JSON.parse(homesString);
		var index = homes.indexOf(userName);
		homes.splice(index,1);
		localStorage.setItem("homes",JSON.stringify(homes));
		localStorage.removeItem(userName);
		window.location.reload();
	});

	$("div.openUser").on('click', function() {
		var userName = $(this)[0].getAttribute('value');
		
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