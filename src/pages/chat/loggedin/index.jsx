import React, { useRef, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//-------------------------------- FIREBASE
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/analytics';


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
const firestore = firebase.firestore();

import { 
  Container,
  ShadowBox,
  Icon_Settings,
  Chat_Bg,
  Btn_New,
  Text_BtnNew,

  Input_Chat,

  Btn_Send,
  Text_Send,
  
  Chat_Box,
  Chat_TextUser,
  Chat_ImgUser,
  Chat_Text_Inner,
  

  Text_UserName,
  Input_UserName,
  
  Text_Desc1,

  
  
} from './LoggedInElements'


// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(25);


//   //ASYNC updates using use collection hook
//   const [messages] = useCollectionData(query, { idField: 'id' });

//   const [formValue, setFormValue] = useState('');


//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL
//     })

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   return (<>
//     <main>

//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

//       <span ref={dummy}></span>

//     </main>

//     <form onSubmit={sendMessage}>

//       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

//       <button type="submit" disabled={!formValue}>🕊️</button>

//     </form>
//   </>)
// }


// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//       <p>{text}</p>
//     </div>
//   </>)
// }






/*afterlogin box */
const LoggedIn = () => {

  const [user] = useAuthState(auth);

  //sign in 
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  
  //sign out
  function SignOut() {
    auth.signOut();
    console.log("test oml");
  }

  
  //chat room
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState(''); //state bool


  const sendMessage = async (e) => {

   


    let inputBox = document.querySelector('#TheMessage').value;

    if(inputBox != ""){

      toast("Sending Msg");
       e.preventDefault();

    const {displayName, uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
      
    } else {



       toast("Your Msg Box is empty.. you silly goose");
    }
    
  
  }


  //props for chat message
  function ChatMessage(props) {
  const { text, uid, photoURL, displayName} = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>

      
      
      <Chat_Box>
        
      <Chat_ImgUser src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        
      <Chat_Text_Inner>{text}</Chat_Text_Inner>

      <Chat_TextUser>{displayName}</Chat_TextUser>
      </Chat_Box>
   

      
   
    </>
  )}
  
  


  return(

    <Container>

    <ShadowBox>

      <Icon_Settings  onClick={SignOut}/>

      <Chat_Bg>
        
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>

      </Chat_Bg>

      <Btn_New>
        <Text_BtnNew>
        New
        </Text_BtnNew>
      </Btn_New>


            
        <Btn_Send onClick={sendMessage}>
          <Text_Send>
          Send
          </Text_Send>
        </Btn_Send>

        <Input_Chat  id="TheMessage" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Dont be stupid"/>
  

        
        <Text_UserName>
        User Name:
        </Text_UserName>

      <Input_UserName placeholder="Your User"/>
      

     
    
  
    
    </ShadowBox>

    </Container>

  
 
  )
    
}

export default LoggedIn;
