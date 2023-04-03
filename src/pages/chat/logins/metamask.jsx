import React, {useState} from 'react' //react library
import { ethers } from "ethers"; //ethers
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Metamask() {

   //state for accounts
  const [currentAccount, setCurrentAccount] = useState("");
  
  //finding the wallet
  const checkIfWalletIsConnected = async () => {

    //ethereum window comes from provider
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    //check if we are authorized to use the wallet
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    //checking accounts
    if (accounts.length !== 0) {
      
      var account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);

       toast("Wallet Connected!");

    } else {
      console.log("No authorized account found")
    }

    /*
    check if Chain is correct 
    */
    let chainId = await ethereum.request({ method: 'eth_chainId' });
    console.log("Connected to chain " + chainId);

    // String, hex code of the chainId of the Rinkebey test network
    //declared as variable VGF
    var goerliChainId = "0x5";  //this is the chain ID

    if (chainId !== goerliChainId) {

        toast("Switching Networks");
   
        //switch networks
        await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ 
        chainId: '0x5'  //0x5 is goerli
          }], // chainId must be in hexadecimal numbers
        });
    }

  }//end of checkWallet


  /*
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {

    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please use this app along side a wallet.\n");

        if (window.confirm('Would you like to download MetaMask? If you click "OK" you will be redirected.')) {
        window.open("https://metamask.app.link/dapp/www.dvcblockchain.com/", '_blank');

        };
        
        return;
      }


      /*
      * Fancy method to request access to account.
      */
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      /*
      * Boom! This should print out public address once we authorize Metamask.
      */
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);


      //change element
      // document.getElementById("changeText").innerHTML = accounts[0];


      
      toast("Wallet Connected!");
      
      let printUser = "User: "  + accounts[0];

      setTimeout(function(){ toast(printUser); }, 2100);

      
        /*if the user is not on the right chang*/
                let chainId = await ethereum.request({ method: 'eth_chainId' });
                console.log("Connected to chain " + chainId);
            
                // String, hex code of the chainId of the Rinkebey test network
                //declared as variable VGF
                var goerliChainId = "0x5";  //this is the chain ID
            
                if (chainId !== goerliChainId) {
            
            
                    toast("Switching Networks");
               
                    //switch networks
                    await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ 
                    chainId: '0x5'  //0x5 is goerli
                      }], // chainId must be in hexadecimal numbers
                    });
                }

    } catch (error) {
      console.log(error)
    }
  } //end of Connect Wallet Function

  


 
  

  return(
    <>

      test
    </>
    
  )

} 
  
