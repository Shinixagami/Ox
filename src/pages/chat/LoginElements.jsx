
import styled, { keyframes } from 'styled-components'
import {Link as LinkS} from 'react-scroll'


import dvcblockchain from './assets/dvcblockchain.png'
import google from './assets/google.png'
import metamask from './assets/metamask.png'
import walletconnect from './assets/walletconnect.png'


const fadeUpBox = keyframes`

  0% {
    opacity: 0;

  }
  20% {
    opacity: 0.5;

  }

  50% {
    opacity: 0.8;

  }

  90% {
    opacity: 0.9;

  }

  100% {
    opacity: 1;
  }
`

const gradientAnimation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const Login_Box = styled.div`


   /* shadow */
  box-shadow: 0px 0px 17px 8px #6e8291;
  

  box-sizing: border-box;

  position: absolute;


  width: 400px;
  height: 600px;

  background: #555555;
  border: 2px solid #8CAAC6;
  border-radius: 15px;

`

export const Image = styled.div`

  position: absolute;
  width: 162px;
  height: 131px;
  left: 122px;
  top: 92px;
  
  
  background-image: url(${dvcblockchain});
  
`



export const Text_SignIn = styled.div`

  position: absolute;
  width: 221px;
  height: 29px;
  left: 91px;
  top: 44px;
  
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  
  color: #FFFFFF;

`

export const Text_User = styled.div`

  position: absolute;
  width: 45px;
  height: 24px;
  left: 51px;
  top: 264px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  
  color: #FFFFFF;
  
`

export const Text_User_Input = styled.input`

  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 19px;
  line-height: 24px;
  outline: none;
  padding-left: 10px;
  color: white;
  text-shadow: cyan;

  border: none;
  position: absolute;
  width: 315px;
  height: 44px;
  left: 46px;
  top: 293px;
  
  background: #4E4848;
  border-radius: 11px;

`

export const Text_Pass = styled.div`

  position: absolute;
  width: 93px;
  height: 24px;
  left: 51px;
  top: 347px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  
  color: #FFFFFF;

`

export const Text_Pass_Input = styled.input`

  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 19px;
  line-height: 24px;
  outline: none;
  padding-left: 10px;
  color: white;
  text-shadow: cyan;

  border: none;
  position: absolute;
  width: 315px;
  height: 44px;
  left: 46px;
  top: 376px;
  
  background: #4E4848;
  border-radius: 11px;


`


export const Text_CreateAccount = styled.div`

  position: absolute;
  width: 106px;
  height: 15px;
  left: 55px;
  top: 425px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  
  
  color: gray;


   &:hover{
    color: whitesmoke;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    text-shadow: 1px 1px 2px cyan;
    text-decoration: underline white;  
     
     
     
  }
  /* button press */
  &:active{
    transform: scale(.95);
  }
  


`



export const Metamask_Icon = styled.div`

  position: absolute;
  width: 57.06px;
  height: 50px;
  left: 51px;
  top: 448px;

  background-image: url(${metamask});


  &:hover{
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  /* button press */
  &:active{
    transform: scale(.9);
  }
    

`


export const WalletConnect_Icon = styled.div`

  position: absolute;
  width: 50px;
  height: 50px;
  
  left: 143px;
  top: 448px;
  
  background-image: url(${walletconnect});

  &:hover{
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  /* button press */
  &:active{
    transform: scale(.9);
  }

`

export const Google_Icon = styled.div`

  position: absolute;
  width: 50px;
  height: 51.2px;
  left: 228px;
  top: 448px;

  background-image: url(${google});

  &:hover{
    transform: scale(1.1);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
  /* button press */
  &:active{
    transform: scale(.9);
  }
  
`














/*only show if input is filled in */
export const LoginBtn = styled.div`

  user-select: none;

  position: absolute;
  width: 314px;
  height: 44px;
  left: 45px;
  top: 520px;
  
  background: linear-gradient(115.23deg, #36CBEC 34.77%, #40ABF9 66.02%);
  border-radius: 12px;

   &:hover{
    cursor: pointer;
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
  }
  /* button press */
  &:active{
    transform: scale(0.99);
    transition: all 0.2s ease-in-out;
  }
  

`

export const Text_LoginBtn = styled.div`

  position: absolute;
  width: 54px;
  height: 24px;
  left: 128px;
  top: 10px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  
  color: #FFFFFF;


`




