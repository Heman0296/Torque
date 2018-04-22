$(document).ready(function() {

	/*getAllDevices();*/

	var deviceAddressList = ["dsadasdsa","sadsadsadas","asdsadasdasd"];
	var devicesList = [];
	var deviceDetails = {};

	for(var i = 0; i < deviceAddressList.length; i++) {
		deviceDetails = {
			deviceName : "Air Conditioner",
			isRegutable : false,
			status : false	
		}	
		devicesList.push(deviceDetails);
	}

	for( var i = 0; i < devicesList.length; i++) {
		if(devicesList[i].status === true) {
			$("#cardsDiv").append('<div class="row"><div class="col s12 m6"><div class="card"><div class="card-content white-text"><span class="card-title">' + devicesList[i].deviceName + '</span><button class="waves-effect waves-green btn-flat teal">Change</button></div><div class="card-action"><div class="status"><span><div class="input-field"><select><option value="" disabled selected>Regulator value</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></div></span></div><div class="switch"><label>off<input type="checkbox" checked><span class="lever"></span>on</label></div></div></div></div></div>');
		}else{
			$("#cardsDiv").append('<div class="row"><div class="col s12 m6"><div class="card"><div class="card-content white-text"><span class="card-title">' + devicesList[i].deviceName + '</span><button class="waves-effect waves-green btn-flat teal">Change</button></div><div class="card-action"><div class="status"><span><div class="input-field"><select><option value="" disabled selected>Regulator value</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></div></span></div><div class="switch"><label>off<input type="checkbox"><span class="lever"></span>on</label></div></div></div></div></div>');
		}
	}

	 $('button').on("click", function(){
	 	var name = $(this).parent().children()[0].innerText;
	 	var select = $(this).parent().parent()[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0];
	 	var regulatorValue = select.options[select.selectedIndex].value;
	 	var lever = $(this).parent().parent()[0].childNodes[1].childNodes[1].childNodes[0].childNodes[1];
	 	var checked = lever.checked;
	 });
});

function getAllDevices() {
	let totalDevices = 0;
	returnContractDetails(getInstance(),1,"0xe4c3e7fb8d8f90f439c530eaa2936a48eb6eb5e4", function(instance) {
        instance.getDeviceCount(function(error, result) {
        	if(!error){
		    	totalDevices = result;
		    	console.log(totalDevices)
		        // let promises = [];
		        // for(let index=0; index < totalDevices; index++) {
		        //     promises.push(instance
		        //                  .getDeviceAtIndex(index).call());
		        // }

		        // Promise.all(promises).then(devices => {
		        //     console.log(devices)
		        // });

        }
        });

	})
}