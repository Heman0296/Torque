$(document).ready(function() {

	/*Rent a new device button on click function*/

	$('#rentButton').on('click', function(){
		
		var deviceName = $('#device-name').val();
		var deviceAddress = $('#device-address').val();
		var timeDuration = $('#duration').val();
		var amount = $('#amount').val();

		console.log(timeDuration);
		console.log(deviceName);
		console.log(deviceAddress);
		console.log(amount);

		document.getElementById("turnOn").classList.remove("disabled");
		document.getElementById("turnOff").classList.remove("disabled");
		document.getElementById("returnRental").classList.remove("disabled");
		$("h4").css("color","#000000");
		$("#elapsed").css("color","#000000");
		$("#elapsedTime").css("color","#000000");
		$("#remaining").css("color","#000000");
		$("#remainingTime").css("color","#000000");
		$("#spent").css("color","#000000");
		$("#spentBalance").css("color","#000000");
		$("#left").css("color","#000000");
		$("#leftBalance").css("color","#000000");

	});

	/*Return rented device button on click function*/

	$('#returnRental').on('click', function(){

		document.getElementById("turnOn").classList.add("disabled");
		document.getElementById("turnOff").classList.add("disabled");
		document.getElementById("returnRental").classList.add("disabled");
		$("h4").css("color","#EAECF0");
		$("#elapsed").css("color","#DEE1E8");
		$("#elapsedTime").css("color","#DEE1E8");
		$("#remaining").css("color","#DEE1E8");
		$("#remainingTime").css("color","#DEE1E8");
		$("#spent").css("color","#DEE1E8");
		$("#spentBalance").css("color","#DEE1E8");
		$("#left").css("color","#DEE1E8");
		$("#leftBalance").css("color","#DEE1E8");

		/* TODO function call to backend*/

	});
});

