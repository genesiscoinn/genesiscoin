if(typeof web3 !== 'undefined'){
  var web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

window.ethereum.enable();

const interact = async()=>{
  const accounts = await web3.eth.getAccounts();
  const balance = Number(web3.utils.fromWei(await web3.eth.getBalance(accounts[0]))).toFixed(3);
  console.log(balance)
}

interact();

$('#btn-connect').on('click', function(){
  var web3 = new Web3(window.web3.currentProvider);
  window.ethereum.enable();
  interact()
})
