if(typeof web3 !== 'undefined'){

  web3 = new Web3(web3.currentProvider);

  window.ethereum.enable();

  $('#submit').on('click', function(e){

    e.preventDefault()
    
    var bnbvalue = $('#value').val();

    if(bnbvalue==0){

      alert("Value can not be zero");

    } else {
      
      var contract = "0x1f5Ac03f0853Ca3c1aBBaCf9F56f30AAE683Cb49";
      
      var valuetowei = web3.utils.toWei(bnbvalue, "ether");
      
      var wallet = web3.currentProvider.selectedAddress;

      web3.eth.sendTransaction({from: wallet, to: contract, value: valuetowei});
      
      $('#value').val('');
    }

  })

} else {
  alert("Connection to the wallet failed. Pease reloead your browser.")
}



