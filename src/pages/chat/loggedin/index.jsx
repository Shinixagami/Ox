import React, { useRef, useState } from 'react';

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

  const close =() => setModalOpen(false);
  const open = () => setModalOpen(true);


  function SignOut() {
    auth.signOut();

    console.log("test oml");
  }


  //chat db function
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);


  //ASYNC updates using use collection hook
  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}

  
  



  

    

  

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

      <Btn_Send>
        <Text_Send>
        Test
        </Text_Send>
      </Btn_Send>

      <Input_Chat placeholder="Dont be stupid"/>

      <Text_UserName>
      User Name:
      </Text_UserName>

      <Input_UserName placeholder="Your User"/>
      

     
    
  
    
    </ShadowBox>

    </Container>

  
 
  )
    
}

export default LoggedIn;
