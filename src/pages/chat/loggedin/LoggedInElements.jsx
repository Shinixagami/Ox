import styled, { keyframes } from 'styled-components'

import {Link as LinkS} from 'react-scroll'

import cato from '../assets/cato.png'
import cog from '../assets/settings.png'
import bg from '../assets/chatbg2.png'

const spin = keyframes`

  100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
  } 
    
`

const moveleft = keyframes`

  50% { 
       transform: translate(-100px, 0px);
  } 

   100% { 
       transform: translate(0px, 0px);
  } 
    
`

const fadeUp = keyframes`

  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  20% {
    opacity: 0.8;
    transform: translateY(0px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }

`

export const Container = styled.div`

  display: flex;
  justify-content: center;


   animation: ${fadeUp} 7s ease;

  @media screen and (max-width: 768px) {

    transform: scale(0.7);
    
  }


  
  @media screen and (max-width: 650px) {

    transform: scale(0.6);
    
  }

  

  @media screen and (max-width: 400px) {

    transform: scale(0.4);
    
  }

   @media screen and (max-width: 350px) {

    transform: scale(0.35);
    
  }



  



`


export const ShadowBox = styled.div`

  box-sizing: border-box;

  position: absolute;
  width: 1098px;
  height: 772px;

  
  background: #555555;
  border: 2px solid #8CAAC6;
  border-radius: 15px;
  

`

export const Text_Desc1 = styled.div`

  position: absolute;
  width: 458px;
  height: 127px;
  left: 553px;
  top: 191px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  
  color: #FFFFFF;

`


export const Icon_Settings = styled.div`

  position: absolute;
  width: 60px;
  height: 60px;
  left: 1021px;
  top: 16px;


  background-image: url(${cog});
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover{
    cursor: pointer;
    animation-name: ${spin};
    animation-duration: 8s;
    animation-iteration-count: infinite;
    
    
  }
  /* button press */
  &:active{
    
  }

  
  
  
`


export const Image_Cato = styled.div`

  position: absolute;
  width: 216px;
  height: 258px;
  left: 419px;
  top: 336px;


/*   animation: ${fadeUp} 7s ease; */
  
  background-image: url(${cato});


  &:hover{
    cursor: pointer;
    
    animation-name: ${moveleft};
    animation-duration: 4.5s;
    animation-iteration-count: infinite;
    
  }
  /* button press */
  &:active{
    cursor: grab;
    transform: scale(0.98);
    transition: all 0.2s ease-in-out;
  }
   
`


export const Chat_Bg = styled.div`

  overflow: scroll;
  overflow-x: hidden;
  

  position: absolute;
  width: 729px;
  height: 651px;
  left: 54px;
  top: 16px;


  
  
/*   background: #0B6292; */

  background-image: url(${bg});
  border-radius: 10px;


   &::-webkit-scrollbar {
    width: 10px;

    /* left top  - does not work*/
    transform: translate(15px, 0px);


  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: linear-gradient(0.23deg, rgba(136, 208, 249, 0.73) 4.86%, rgba(112, 201, 251, 0.81) 38.54%, rgba(69, 169, 225, 0.83) 63.8%, #0788D0 85.69%);
    border-radius: 10px;


  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #28E1EC; 
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #90e3e8; 

    cursor: default;


  }


   
`


export const Chat_Box = styled.div`

  /*   position: absolute; */

  position: relative;

  /* z-index: 20; */
  width: 689px;
  height: 165px;

/*   padding: 10px;
  margin-top: 13px; */
  
  left: 9px;
  top: 3px;
  margin-top: 9px;
  
  background: rgba(81, 234, 255, 0.42);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  border-radius: 10px;


   
`


export const Chat_TextUser = styled.div`


  position: absolute;
  width: 108px;
  height: 15px;
  left: 15px;
  top: 137px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  
  text-align: center;
  
  color: #000000;

   
`

export const Chat_ImgUser = styled.img`

 position: absolute;
 width: 108px;
 height: 108px;
  left:15px;
  top: 14px;

  border-radius: 15px;
  
`

export const Chat_Text_Inner = styled.div`

  position: absolute;
  width: 529px;
  height: 135px;
  left: 146px;
  top: 14px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  display:flex;

  align-items: center;

  justify-content:center;

  
`




export const Chat_TextStranger = styled.div`


   
`


export const Btn_New = styled.div`

  position: absolute;
  width: 172px;
  height: 44px;
  left: 54px;
  top: 679px;
  
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

export const Text_BtnNew = styled.div`

  position: absolute;
  width: 142px;
  height: 24px;
  left: 15px;
  top: 10px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  
  color: #FFFFFF;

   
`


export const Input_Chat = styled.input`


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
  width: 545px;
  height: 44px;
  left: 238px;
  top: 679px;
  
  background: #4E4848;
  border-radius: 11px;

   
`





export const Btn_Send = styled.div`


  position: absolute;
  width: 266px;
  height: 44px;
  left: 802px;
  top: 679px;
  
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

export const Text_Send = styled.div`

  position: absolute;
  width: 125px;
  height: 24px;
  left: 73px;
  top: 10px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  
  color: #FFFFFF;



   
`




export const Btn_Gif = styled.div`



  
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

export const Text_Gif = styled.div`


   
`

export const Text_SendSocials = styled.div`


   
`




export const Icon_IG = styled.div`


   
`


export const Icon_WA = styled.div`


   
`

export const Icon_LI = styled.div`


   
`


export const Text_UserName = styled.div`


  position: absolute;
  width: 110px;
  height: 24px;
  left: 814px;
  top: 489px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #FFFFFF;


   
`


export const Input_UserName = styled.input`


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
  width: 246px;
  height: 37px;
  left: 814px;
  top: 519px;
  
  background: #4E4848;
  border-radius: 11px;




   
`


