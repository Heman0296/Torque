$(document).ready(function() {


	getAllDevices();

	var listItem = {
		deviceName : "Air Conditioner",
		isRegutable : false,
		status : false
	};

	var devicesList = [];
	devicesList.push(listItem);

	var listItem = {
		deviceName : "Refrigerator",
		isRegutable : true,
		status : true,
		regulatedValue : 5
	};

	devicesList.push(listItem);

	for( var i = 0; i < devicesList.length; i++) {
		if(devicesList[i].status === true) {
			$("#cardsDiv").append('<div class="row"><div class="col s12 m6"><div class="card"><div class="card-content white-text"><span class="card-title" id="title' + i + '">' + devicesList[i].deviceName + '</span></div><div class="card-action" id="action"><div class="status" id="status' + i + '">ON</div><div class="switch"><label>on<input type="checkbox" checked id="lever' + i + '"><span class="lever"></span>off</label></div></div></div></div></div>');
		}else{
			$("#cardsDiv").append('<div class="row"><div class="col s12 m6"><div class="card"><div class="card-content white-text"><span class="card-title" id="title' + i + '">' + devicesList[i].deviceName + '</span></div><div class="card-action" id="action"><div class="status" id="status' + i + '">OFF</div><div class="switch"><label>on<input type="checkbox" id="lever' + i + '"><span class="lever"></span>off</label></div></div></div></div></div>');
		}
	}

	/*$('#status0').on( "click", function() {
		var name = $('#title0').text();
    	console.log(name);
});*/
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