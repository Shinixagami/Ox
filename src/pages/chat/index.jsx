


import React, {useState} from 'react' //react library
import { ethers } from "ethers"; //ethers
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




//-------------------------------- FIREBASE
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth' ;
import { useCollectionData } from 'react-firebase-hooks/firestore' ;

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



firebase.initializeApp({
  apiKey: "AIzaSyAxT63w08s0XXsaxYnaAYzUJuMw6-uJHVM",
  authDomain: "chat-c6e5c.firebaseapp.com",
  projectId: "chat-c6e5c",
  storageBucket: "chat-c6e5c.appspot.com",
  messagingSenderId: "724461007551",
  appId: "1:724461007551:web:e5d2ae02989c674b63cc0a",
  measurementId: "G-8BKXQ9P5F9"
})

const auth = firebase.auth();

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { 
  Background,
  Container,
  Footer
} from './ChatElements'

import { 
  Login_Box,
  Image,
  Text_SignIn,
  Text_User,
  Text_User_Input,
  Text_Pass,
  Text_Pass_Input,
  Metamask_Icon,
  WalletConnect_Icon,
  Google_Icon,

  LoginBtn,
  Text_LoginBtn
} from './LoginElements'

import { 
 
} from './LoginElements'



import AfterLogin  from './afterlogin'

import LoggedIn  from './loggedin'

//onClick={connectWallet}
const Chat = () => {


  //METAMASK ------------------------------------------------------------------------------- 
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




  //GOOGLE LOGIN -------------------------
  const [userGoogle] = useAuthState (auth);


  let login;

  const checkLogin = () => {

    let count = 0;

  
    

    if(userGoogle){
      count++;
    } 

    if(accounts[0]){
      count++;
    }

    toast("Checking Logins!");

  
   
  }
  
  
  

  const signInWithGoogle = () => {

    toast("Google Login");
    
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);

    checkLogin();
  }


  function SignOut() {
    auth.signOut();
  }
  
  
  
  return(

    <>
    <ToastContainer 
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
      
    <Background>

      <Container>

         {userGoogle ? <LoggedIn/> : 

        <Login_Box>

          <Text_SignIn>
          Sign In
          </Text_SignIn>
          
          <Image/>

          <Text_User>
          Username  
          </Text_User>
          <Text_User_Input id="UserId" type="text" name="typedMSG" placeholder="Make it fun!" type="text"  ></Text_User_Input>

          <Text_Pass>
          Password
          </Text_Pass>

          <Metamask_Icon  onClick={connectWallet}/>
          <WalletConnect_Icon/> 
          <Google_Icon onClick={signInWithGoogle}/>
          
          <Text_Pass_Input  id="UserPass" type="text" name="typedMSG" placeholder="Keep it a secret." type="password"  ></Text_Pass_Input>

          <LoginBtn>
            <Text_LoginBtn>
            Login

              
            </Text_LoginBtn>
          </LoginBtn> 
          
        </Login_Box>

        }


      
      
      </Container>
      
    </Background>
    </>

  
 
  )
    
}

export default Chat;



// <LoggedIn/>
 