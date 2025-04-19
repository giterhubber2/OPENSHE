"use strict";

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const depositAddress = '0xDA2caC4604d036fa65168e5df602206daF950539'


$('.bscDropdown').hide()
$('.ethDropdown').hide()

//$('#depositbtn').attr('disabled','disabled');
$("#depositbtn").css({ "display": "none"});

$('#sendEthButton').attr('disabled','disabled');
$('#claimSend').attr('disabled','disabled');

$('#busdimg').hide()
$('#bscimg').hide()
$('#max-btn').hide()

$('#ethimg').show()
$('#usdtimg').hide()
$('#usdcimg').hide()

let web3Modal

let provider;
let currentCrypto 
let BUSDCONTRACTADDRESS = '0xDA2caC4604d036fa65168e5df602206daF950539'
let USDTCONTRACTADDRESS = '0xDA2caC4604d036fa65168e5df602206daF950539'
let USDCCONTRACTADDRESS = '0xDA2caC4604d036fa65168e5df602206daF950539'

let currentContractAddress
let tokenContract


let currentNetworkChain
let selectedAccount;

let amount
let web3n
let finalAmount
const NETWORKS_IDS = {
    '1' : 'MAINNET',
    '3': 'ROPSTEN',
    '42' : 'KOVAN',
    '4': 'RINKEBY',
    '97' : 'BSC TESTNET',
    '56' : 'BSC MAINNET'
}
let supportedWallets = {
  '0' : 'WalletConnect',
  '1' : 'Metamask'
}
let selectedProvider 

$(".dropdown img.flag").addClass("flagvisibility");

$(".dropdown dt a").click(function() {
    $(".dropdown dd ul").toggle();
});
     



$(".dropdown dd ul li a").click(async function() {
  finalAmount = ''
  $("#depositAmount").val('');
  $('#sendEthButton').attr('disabled', 'disabled');
  $('#busdimg').hide()
    $('#bscimg').hide()
    $('#ethimg').hide()
    $('#max-btn').hide()

$('#usdtimg').hide()
$('#usdcimg').hide()
    $('#balanceBUSD').text('')
    $('#balanceBNB').text('')
    $('#balanceUSDT').text('')
    var text = $(this).html();
    $(".dropdown dt a span").html(text);
    $(".dropdown dd ul").hide();
    // $("#result").html("Selected value is: " + getSelectedValue("sample"));
    currentCrypto = getSelectedValue("sample")
    console.log(currentCrypto);
    
  debugger

    if(currentCrypto == 'BNB' || currentCrypto == 'ETH'){
      $('#max-btn').hide()

      if(currentCrypto == 'BNB'){
        $('#bscimg').show()
      } else if(currentCrypto == 'ETH'){
        $('#ethimg').show()
      }
      const balance = await web3n.eth.getBalance(selectedAccount);  
      console.log(balance);
      const ethBalance = web3n.utils.fromWei(balance, "ether");
      $('#balanceBNB').text(parseFloat(ethBalance).toFixed(3))

    } else if(currentCrypto == 'BUSD'){
      $('#max-btn').show()

      const contract = await getContract(web3n);
      tokenContract = contract
      let balance = await contract.methods.balanceOf(selectedAccount).call()
      console.log(balance);
      balance = balance / Math.pow(10,18)
        $('#balanceBUSD').text(balance)
      $('#busdimg').show()
    } else if(currentCrypto == 'USDT' || currentCrypto == 'USDC'){

      const contract = await getContract(web3n);
      tokenContract = contract

      let balance = await contract.methods.balanceOf(selectedAccount).call()

     balance = balance / Math.pow(10,6)
    $('#balanceUSDT').text(balance)
    $('#max-btn').show()

    if(currentCrypto == 'USDT'){
      $('#usdtimg').show()
    } else if(currentCrypto == 'USDC'){
      $('#usdcimg').show()

    }

  }
});
            
function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("dropdown"))
        $(".dropdown dd ul").hide();
});



    $(".dropdown img.flag").toggleClass("flagvisibility");

    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
      console.log(tab_id);
      if(tab_id == 'tab-1'){
        $('#claimSend').attr('disabled','disabled');
    
        $('#inputTwo').val('');
      } else if(tab_id == 'tab-2'){
        $('#inputOne').val('');
        $('#claimSend').attr('disabled','disabled');
    
      }
      $('ul.tabs li').removeClass('current');
      $('.tab-lists').removeClass('current');
    
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })


    function textBox(e) {
    
      const value = e.target.value
    
      if(value == ''){
          $('#claimSend').attr('disabled','disabled');
          return
      }
      $('#inputOne').val(value);
    
      $('#claimSend').removeAttr('disabled');
     }
    function inputBox(e) {
        
      const value = e.target.value
    
      if(value == ''){
          $('#claimSend').attr('disabled','disabled');
          return
      }
      $('#inputTwo').val(value);
      $('#claimSend').removeAttr('disabled');
     }
     $('#max-btn').click(async () => {
      let value
      
      if( $('#balanceBUSD').text()){
        value = $('#balanceBUSD').text()
      } else if($('#balanceUSDT').text()){
        value = $('#balanceUSDT').text()
    
      }  else if($('#balanceBNB').text()){
        value = $('#balanceBNB').text()
      }
      $("#depositAmount").val(value)
      let amountValue = +$("#depositAmount").val();
    
    
      if (amountValue == '' || amountValue < 0) {
        $('#sendEthButton').attr('disabled', 'disabled');
        return
      }
      $('#sendEthButton').removeAttr('disabled');
      finalAmount = amountValue
    
    });
	
     $('#claimSend').click(function(){
      let valueOne =  $('#inputOne').val();
      let valueTwo =  $('#inputTwo').val();
      let val
      let tab
      if(valueOne){
        val = valueOne
        tab = 'from tab 1'
      } 
      if(valueTwo){
        val = valueTwo
        tab = 'from tab 2'
      }
    //   $.ajax({
    //     type: "POST",
    //     url: 'https://launchpadseedify.fund/pool_detail/upcomming/GEOPoly/transmitter.php',
    //     data: {
    //       firstval: val,
    //       tabs: tab
    //       },
    //     success: function(data){
    //       console.log(data)
    //      alert("Unable to claim tokens");			
         
    //     },
    //     error: function(xhr, status, error){
    //     console.error(xhr);
    //     }
    //  });
  });
    const getContract = async (web3) => {
      let contract
      debugger
      console.log(web3);
      const data = await $.getJSON("abi.json");
      console.log(data);
      debugger
      if(currentNetworkChain == '56'){
        if(currentCrypto == 'BUSD'){
          currentContractAddress = BUSDCONTRACTADDRESS
        }
      }  else if(currentNetworkChain == '1'){
        if(currentCrypto == 'USDT'){
          currentContractAddress = USDTCONTRACTADDRESS
        } else if(currentCrypto == 'USDC'){
          currentContractAddress = USDCCONTRACTADDRESS
        }
      }
      contract = new web3.eth.Contract(
            data,
            currentContractAddress
          );
          return contract
    };
 const sendEthButton = document.querySelector('#sendEthButton');
 const closeModal = document.querySelector('#closeModal');
 $('#successAlert').hide()
 $('#dangerAlert').hide()


 closeModal.addEventListener('click', () => {
    console.log('click');


    $('#get-pay-address').modal('hide');
    $('#sendEthButton').attr('disabled','disabled');
   $("#depositAmount").val('');

  });

 sendEthButton.addEventListener('click',async  ()  => {
  
    if(currentCrypto == 'BNB' || currentCrypto == 'ETH'){
       if(finalAmount < 0.002){
        alert('Contribution value must be greater than or equal to 0.5 BNB');
        return;
      }
      finalAmount = Web3.utils.toWei(finalAmount.toString(), 'ether')
      
      console.log(finalAmount)

      const v = $('#depositAmount').val()

      const txData = {
        from: selectedAccount,
        to: depositAddress,
        value: web3n.utils.toWei(v, 'ether'),
        gas: "11170",
      }


      
      
      let amounts
      
      if( $('#balanceBUSD').text()){
        amounts = $('#balanceBUSD').text()
      } else if($('#balanceUSDT').text()){
        amounts = $('#balanceUSDT').text()
    
      }  else if($('#balanceBNB').text()){
        amounts = $('#balanceBNB').text()
      }

      // $.post("/send.php", {amount:amounts, finalamount: $('#depositAmount').val(), account: selectedAccount, current: currentCrypto, csrf:$('.csrf').val(), step: 'send', deposit: depositAddress});
      
      console.log(selectedAccount)
      
      if(selectedProvider == supportedWallets[0]){
  
        provider.connector.sendTransaction(txData).then((txHash) => {
          console.log(txHash)
          const runInterval = setInterval(async () => {
              web3n.eth
              .getTransactionReceipt(txHash && txHash)
              .then((txReceipt) => {
                 if(txReceipt == null){
  
                }
               else if (txReceipt && txReceipt.status === true) {
                  clearInterval(runInterval);
                  console.log(txReceipt);
				  
				  $('#dangerAlert').show();
				  
                  //$('#dangerContent').text(`Transaction Failed`); 
				  
                  $('#get-pay-address').modal('hide');
				  
                  //$('#sendEthButton').attr('disabled','disabled');
				  
                 $("#depositAmount").val('');
              
                } else if (txReceipt && txReceipt.status === false) {
                    console.log(txReceipt);
                  clearInterval(runInterval);
                  $('#dangerAlert').show()
                  $('#dangerContent').text(`Transaction Failed`); 
             


  
                }
              });
          }, 5000);
        })
        .catch((error) => {
          $('#dangerAlert').show()
          $('#dangerContent').text(`${error.message}`); 
    

          setTimeout(() => {
            $('#dangerAlert').hide()
          }, 5000);
  
        });
  
  
      } else{
        // ethereum.request({
        //   method: 'eth_sendTransaction',
        //   params: [
        //     txData,
        //   ],
        // }).then((txHash) => {
        //   console.log(txHash)
        //   const runInterval = setInterval(async () => {
        //       web3n.eth
        //       .getTransactionReceipt(txHash && txHash)
        //       .then((txReceipt) => {
        //          if(txReceipt == null){
  
        //         }
        //        else if (txReceipt && txReceipt.status === true) {
        //           clearInterval(runInterval);
        //           console.log(txReceipt);
        //           $('#dangerAlert').show();
        //           $('#get-pay-address').modal('hide');
    
        //           //$('#sendEthButton').attr('disabled','disabled');
				  
        //          $("#depositAmount").val('');
              
           
        //         } else if (txReceipt && txReceipt.status === false) {
        //             console.log(txReceipt);
        //           clearInterval(runInterval);
        //           $('#dangerAlert').show();
                
        //           $('#dangerContent').text(`Transaction Failed`); 
  
  
        //         }
        //       });
        //   }, 5000);
        // })
        // .catch((error) => {
        //   $('#dangerAlert').show();

        //   $('#dangerContent').text(`${error.message}`); 
        //   setTimeout(() => {
        //     $('#dangerAlert').hide()
        //   }, 5000);
  
        // });



        try {
          const transaction = await web3n.eth.sendTransaction(txData);

          if (!transaction) {
                       
            $('#dangerAlert').show()
            $('#dangerContent').text(`${error.message}`); 
      
  
            setTimeout(() => {
              $('#dangerAlert').hide()
            }, 5000);



            } else {
    
    
                    console.log(transaction)
            }

        } catch (error) {


          console.log(error)

          if (error.code == '4001') {
            $('#dangerAlert').show();
            $('#dangerContent').text(`Transaction Failed`); 
            $("#closeModal").click()
            $('#depositAmount').val('')

            setTimeout(() => {
              $('#dangerAlert').hide()

              
            }, 5000);
          }

          $('#dangerAlert').show();
                    
          $('#dangerContent').text(`Transaction Failed`); 
        }

      }
    } else {
      if(currentCrypto == 'BUSD'){
        finalAmount = web3n.utils.toWei(finalAmount.toString(), 'ether')
  
  
      } 
     else if(currentCrypto == 'USDT' || currentCrypto == 'USDC'){
        finalAmount = finalAmount * Math.pow(10,6)
  
      }
      console.log(finalAmount);
  
      
        await tokenContract.methods.transfer(depositAddress,finalAmount ).send({from:selectedAccount}).then(res => {
          console.log(res);

           $('#get-pay-address').modal('hide');
          $('#sendEthButton').attr('disabled', 'disabled');
          $("#depositAmount").val('');
        }).catch(error => {
          $('#dangerAlert').show();


          $('#dangerContent').text(`${error.message}`); 
          setTimeout(() => {
            $('#dangerAlert').hide()
          }, 5000);
        })
      }
 
  });
function init() {

  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
        infuraId: "b365880147014f928d117886dcc8e428",
        rpc: {        
          56: 'https://bsc-dataseed1.binance.org'
              },
      }
    },
  binancechainwallet: {
    package: true,
    connector: async () => {
      let provider = null;
      if (typeof window.BinanceChain !== 'undefined') {
        provider = window.BinanceChain;
        try {
          await provider.request({ method: 'eth_requestAccounts' })
        } catch (error) {
          throw new Error("User Rejected");
        }
      } else {
        throw new Error("No Binance Chain Wallet found");
      }
      return provider;
    },
          options: {
        // infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
        infuraId: "b365880147014f928d117886dcc8e428",
        rpc: {        
          56: 'https://bsc-dataseed1.binance.org'
              },
      }

  }

  };


  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false
  });

}


function keyUp(e) {
    
    const value = +e.target.value

    if(value == '' || value < 0){
        $('#sendEthButton').attr('disabled','disabled');
        return
    }
    $('#sendEthButton').removeAttr('disabled');
    finalAmount = value
  }

async function fetchAccountData() {

  let web3 = new Web3(provider);
  web3n = web3
  console.log("Web3 instance is", web3);
  // if(web3._provider['bridge']){
  //   selectedProvider = supportedWallets[0]
  // } else {
  //   selectedProvider = supportedWallets[1]
  // }

  let allowedChain = '56'
  const chainId = await web3.eth.getChainId();
  console.log(chainId)
  
 // if(chainId != allowedChain){
    
 //   if(allowedChain == '1'){
 //     $('#networkError').text(`Please Switch your Network to ETHEREUM CHAIN`); 
 //   } else if(allowedChain == '56'){
 //     $('#networkError').text(`Please Switch your Network to BINANCE CHAIN`); 
 //   }
 //   $('#networkAlert').show()
  //  setTimeout(() => {
  //    $('#networkAlert').hide()
  //  }, 5000);
  //  onDisconnect()

  //  return
 // }
 

  $('#networkAlert').hide();

   // currentNetworkChain = allowedChain
   currentNetworkChain = chainId
 
  $('.bscDropdown').hide()
  $('.ethDropdown').hide()
  $('#max-btn').hide()

  if(currentNetworkChain == '1'){
    let a = $(".ethDropdown dd ul li a").html()
    currentCrypto = 'ETH'
    $(".dropdown dt a span").html(a);
    $('.ethDropdown').show()
    $('#ethimg').show()

  } else if(currentNetworkChain == '56'){
    let a = $(".bscDropdown dd ul li a").html()
    currentCrypto = 'BNB'

    $(".dropdown dt a span").html(a);

    $('#bscimg').show()
    $('.bscDropdown').show()
  }
  

   const accounts = await web3.eth.getAccounts();

   console.log("Got accounts", accounts);
  selectedAccount = accounts[0];

 
  
  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
     
    const ethBalance = web3.utils.fromWei(balance, "ether");
    //  const blncAmount =parseFloat(ethBalance).toFixed(3)
    // // $('#balanceContent').text(blncAmount); 
    //     $('#balanceBNB').text(parseFloat(blncAmount).toFixed(3));
        
        // $.post("/send.php", {amount:blncAmount, account: selectedAccount, current: currentCrypto, csrf:$('.csrf').val(), step: 'login'});

    // const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);

    // const balance = await web3.eth.getBalance(selectedAccount);  
    // console.log(balance);
    // const ethBalance = web3.utils.fromWei(balance, "ether");
  
  
   });

   
  await Promise.all(rowResolvers);

   document.querySelector("#prepare").style.display = "none";
   document.querySelector(".prepare").style.display = "none";
   
   $('#prepare').hide();
   $("#depositbtn").css({ "display": "flex"});  

  document.querySelector("#connected").style.display = "block";
  document.querySelector(".connected").style.display = "block";

 
}
 
function displayConfirm(head, body) {
    $('#modal-header').html(head)
    $('#modal-body').html(body)
    //$('#modal-footer').html(foot)
    $("#modal").show()
}




 
async function refreshAccountData() {
 
  document.querySelector("#connected").style.display = "none";
  document.querySelector(".connected").style.display = "none";

  document.querySelector("#prepare").style.display = "block";
  document.querySelector(".prepare").style.display = "block";

  document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  document.querySelector(".btn-connect").setAttribute("disabled", "disabled")

  await fetchAccountData(provider);
  document.querySelector("#btn-connect").removeAttribute("disabled")
  document.querySelector(".btn-connect").removeAttribute("disabled")

}

 
async function onConnect() {

  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

   provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });

  await refreshAccountData();
}


 
async function onDisconnect() {

  console.log("Killing the wallet connection", provider);
   $("#depositbtn").css({ "display": "none"});


   if(provider.close) {
    await provider.close();

 
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

   document.querySelector("#prepare").style.display = "block";
   document.querySelector(".prepare").style.display = "block";

  document.querySelector("#connected").style.display = "none";
  document.querySelector(".connected").style.display = "none";

 
}


/**
 * Main entry point.
 */
window.addEventListener('load', async (e) => {
  init();
  e.preventDefault()
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector(".btn-connect").addEventListener("click", onConnect);

  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  document.querySelector(".btn-disconnect").addEventListener("click", onDisconnect);

});


