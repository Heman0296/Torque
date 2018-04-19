function getInstance() {
	
	if(typeof web3 != 'undefined'){
        web3 = new Web3(web3.currentProvider);
    }

    console.log(web3)
    return web3;
}

function returnContractDetails(web3,contractName,contractAddress, callback) {

	$.getJSON("../contracts/PublicDeviceStateManager.json",function(data){
      /*  let contractLocation = getContractLocation();*/

        let contractDetails = {};
        contractDetails.contract = data;
        contractDetails.abi = contractDetails.contract.abi;
        // TODO: To be changed with entry from config file
        contractDetails.address = contractAddress;
        contractDetails.instance = web3.eth.contract(contractDetails.abi).at(contractAddress);
        callback(contractDetails.instance);
    });

}