
import React, {useState} from 'react' //react library
import { ethers } from "ethers"; //ethers
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import meraki from '../../../smart-contract/utils/meraki.json';  //contract1

//https://goerli.etherscan.io/address/0xAA091E3392931F994405e68B65521Fd1CC33fAA7
const CONTRACT_ADDRESS = "0xaa091e3392931f994405e68b65521fd1cc33faa7";

import {Button1} from '../ButtonElements'

//componenet
import {
  
  HeroContainer,
  HeroBg,
  VideoBg,
  GifBg,

  HeroContent,
  HeroH1,
  HeroH1Orange,
  HeroP, 
  
  HeroBtnWrapper, 

  HeroWrapper,
  ArrowForward,
  ArrowRight

} from './HeroSectionElements' 


import {
 MintWrapper,
 MintBoxTransparent,

 MintTextTitle,
  MintBtn,
  MintBtn_NotConnected,
  
  MintBtnTxt,
  
  MintText_Total,
  MintText_Cost,

  
  MintText_Amount,
  
  MintInnerBox,
  MintInnerBox_Number,
  MintInnerBox_Plus,
  MintInnerBox_PlusA,
  MintInnerBox_PlusB,

  MintCircle1,
  MintCircle2,

  
  MintInnerBox_Minus,
  MintInnerBox_MinusA

} from './MintElements' 




const HeroSection01 = () => {

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
  }//end of Connect Wallet Function


  const disconnectWallet = () => {
   
      toast("Disconnecting...");

      window.location.reload(false);

      Moralis.User.logOut();
      
  };


   //numbers for mint qty
  let number = 1;
  const addNum = async () => {
    
    if(number<=2){
      number++;
      document.getElementById("changeNum").innerHTML = number;
      toast("+1     [Total: " + number + "]");
    }
  }

  const subNum = async () => {

    if(number>=2){
      number--;
      document.getElementById("changeNum").innerHTML = number;
      toast("-1     [Total: " + number + "]");  
    }
  }
  
  //this is to call the contract
  const mintNFT = async () => {

    toast("Calling Mint Function");

    //minting button 
    try {
      const { ethereum } = window;

        if (ethereum) 
        {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();

          //This is where an error might stem
          //What ever the contract name is.
          //put it there example: contractname = CronoVerse
          //CronoVerse.abi, signer ....

          const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, meraki.abi, signer);

          console.log("Going to pop wallet now to pay gas...")
          let nftTxn = await connectedContract.publicMint(number);

          console.log("Start of loading animation ~");

          // const grabElement = document.querySelector('#el'); //picks element
          // grabElement.classList.remove("hidden-class");  //shows loading symbol

          console.log("Mining...please wait.")
          await nftTxn.wait();

          console.log("End of loading animation ~");

          // grabElement.classList.add("hidden-class");

          console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);

          //need a function to bring rarible account activity
          //like going to the your collection page for your address
          if (window.confirm('Success!\nWould you like to visit the rarible link for the NFT? If you click "OK" you will be redirected.', signer)) {

            //IMPORTED ---------------------------
            /*
            * Check if we're authorized to access the user's wallet
            */
            const accounts = await ethereum.request({ method: 'eth_accounts' });

              /*
              User can have multiple authorized accounts, we grab the first one if its there!
              */
              if (accounts.length !== 0) {
                
                //var is enable globally
                var account = accounts[0];
                console.log("Account grabbed:", account);

              } else {
                console.log("account error 0x1")
              }
            //--------------------------------


            //!CHANGE
            let text1 = "https://testnet.rarible.com/collection/";
            let text2 = account; //account is declared up above
            let result = text1.concat(text2, "/");

            console.log("Rarible Link:\n --", result)

            //NEW RNG function confirm
            window.open(result, '_blank');

          };

        
        } else {
          console.log("Ethereum object doesn't exist!");
        }// end of if (ethereum) 

    } catch (error) {
      console.log(error)
    }

  }// end of Const askContractToMintNft



 












  

  /* on hover for arrow icon */
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  return(

    <div>

    <HeroContainer> 
      
      <HeroWrapper>  

      <HeroContent>
        
        <HeroH1>
          Discover, Collect
        </HeroH1>
           <HeroH1>
         and sell amazing
        </HeroH1>
        <HeroH1Orange>
         digital art
        </HeroH1Orange>
      
      </HeroContent>

      <HeroContent>
        <MintWrapper>

          
          <MintCircle1></MintCircle1>
          <MintCircle2></MintCircle2>


          <MintBoxTransparent>

            
            
            <MintTextTitle> Mint NFT</MintTextTitle>


              <MintInnerBox>

                <MintInnerBox_Plus onClick={addNum}>
                  <MintInnerBox_PlusB/>
                  <MintInnerBox_PlusA/>
                
                </MintInnerBox_Plus>

                 <MintInnerBox_Number id="changeNum">1</MintInnerBox_Number>
                
                <MintInnerBox_Minus onClick={subNum}>
                  <MintInnerBox_MinusA>
                  </MintInnerBox_MinusA>
                </MintInnerBox_Minus>
                
              </MintInnerBox>

          
          
           <MintText_Amount>Max. mint amount: 3</MintText_Amount>
           <MintText_Total> Total </MintText_Total>
           <MintText_Cost> 0.01 OKT + gas</MintText_Cost>

             {currentAccount === "" ? 
          (
                <MintBtn_NotConnected onClick={connectWallet}>
              <MintBtnTxt>
              Connect
              </MintBtnTxt>
            </MintBtn_NotConnected>
           
              
            ) : (

              
            <MintBtn  onClick={mintNFT}>
              <MintBtnTxt>
              Mint
              </MintBtnTxt>
            </MintBtn>
            
          )}

            



          








            
          
          </MintBoxTransparent>

        </MintWrapper>
      </HeroContent>
  
      </HeroWrapper>
      
      
    </HeroContainer> 
      
    </div>

  );

}

export default HeroSection01