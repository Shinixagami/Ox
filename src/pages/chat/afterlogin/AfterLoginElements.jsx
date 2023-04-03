import styled, { keyframes } from 'styled-components'

import {Link as LinkS} from 'react-scroll'

import cato from '../assets/cato.png'
import cog from '../assets/settings.png'


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


  @media screen and (max-width: 768px) {

    transform: scale(0.82);
    
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


export const Text_Desc2 = styled.div`

  position: absolute;
  width: 220px;
  height: 48px;
  left: 672px;
  top: 417px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  
  color: #FFFFFF;

`


export const Text_Desc3 = styled.div`

  position: absolute;
  width: 294px;
  height: 24px;
  left: 162px;
  top: 503px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  
  color: #FFFFFF;
  


`


export const Text_Desc4 = styled.div`

  position: absolute;
  width: 137px;
  height: 24px;
  left: 710px;
  top: 503px;
  
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

export const Btn_Go_Text = styled.div`

  position: absolute;
  width: 28px;
  height: 24px;
  left: 141px;
  top: 10px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #FFFFFF;

`


export const Btn_Go = styled.div`

  position: absolute;
  width: 314px;
  height: 44px;
  left: 623px;
  top: 538px;
  
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


/* if chat enter than add array list*/
export const Input_ChatInterest = styled.input`

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
  width: 449px;
  height: 44px;
  left: 162px;
  top: 538px;
  
  background: #4E4848;
  border-radius: 11px;

`



