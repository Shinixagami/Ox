


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




import { 
  Container,
  ShadowBox,

  Text_Desc1,
  Text_Desc2,
  Text_Desc3,
  Text_Desc4,

  Image_Cato,
  Icon_Settings,
  

  Btn_Go_Text,
  Btn_Go,
  

  Input_ChatInterest
  
  
  
} from './AfterLoginElements'

/*afterlogin box */
const AfterLogin = () => {

  const close =() => setModalOpen(false);
  const open = () => setModalOpen(true);


  
  function SignOut() {
    auth.signOut();

    console.log("test oml");
  }

  

  return(

    <Container>
    
    <ShadowBox>

      <Icon_Settings  onClick={SignOut} />
      
      <Text_Desc1>Omegle (oh·meg·ull) is a great way to meet new friends. When you use Omegle, you are paired randomly with another person to talk one-on-one. If you prefer, you can add your interests and you’ll be randomly paired with someone who selected some of the same interests</Text_Desc1>

      <Text_Desc2>
      But this time its web3.0 Safer & More Secure
      </Text_Desc2>


      <Image_Cato/>
      <Text_Desc3>
      What do you wanna talk about?
      </Text_Desc3>

      <Text_Desc4>
      Start Chatting:
      </Text_Desc4>

      <Btn_Go>
        <Btn_Go_Text>
        Go
        </Btn_Go_Text>
      </Btn_Go>


      

      <Input_ChatInterest>
      
      </Input_ChatInterest>
    
    
    
    
    
    </ShadowBox>

    

    </Container>

  
 
  )
    
}

export default AfterLogin;
