// Connect to the Ethereum network
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // Set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// Define the smart contract ABI and address
var contractABI = [ /* Your contract ABI */ ];
var contractAddress = '0x123456789...'; // Replace with your contract address

// Create an instance of the contract
var contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to handle user login
function login() {
  var username = document.getElementById('username').value;
  var address = document.getElementById('address').value;

  // Call the smart contract function to store the username and address
  contract.methods.login(username, address).send({ from: web3.eth.defaultAccount })
    .on('transactionHash', function(hash){
      console.log('Transaction Hash: ' + hash);
      // Add code here to handle successful login
    })
    .on('error', function(error) {
      console.error('Error: ' + error.message);
      // Add code here to handle errors
    });
}
