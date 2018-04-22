$(document).ready( function(){

	/*Populating the Devices Page*/

	var deviceAddressList = ["adasdasdas","sdasdsasads","sadsadsad"];
	var deviceDetails = {};

	for(var i = 0; i < deviceAddressList.length; i++) {
		deviceDetails = {
			deviceName : "Air Conditioner",
			isRegutable : false,
			status : false	
		}

		$("#devicesList").append('<li class="collection-item"><div>' + deviceDetails.deviceName + '<a href="#!" class="secondary-content"><i class="material-icons deleteDevice">send</i></a></div></li>');	
		
	}

	/*Handling the delete button click event on devices page*/

	$("i.deleteDevice").on('click', function() {
		var deviceName = $(this).parent().parent()[0].childNodes[0];
		/*Write call to delete the deviceName from backend*/
	});

	/*Populating the Users Page*/	

	var userList = ["Himanshu", "Swagjeet", "KamalNarayan"];
	
	for(var i = 0; i < deviceAddressList.length; i++) {

		$("#userList").append('<li class="collection-item"><div>' + userList[i] + '<a href="#!" class="secondary-content"><i class="material-icons deleteUser">send</i></a></div></li>');	
		
	}

	/*Handling the delete button click event on users page*/

	$("i.deleteUser").on('click', function() {
		var userName = $(this).parent().parent()[0].childNodes[0];
		/*Write call to delete the deviceName from backend*/
	});

});

/*Handling form submission on devices tab*/

$(function(){
	$("#newDeviceForm").on('submit', function(){
		console.log("new device");
	});
});

/*Handling form submission on users tab*/

$(function(){
	$("#newUserForm").on('submit', function(){
		console.log("new user");
	});
});