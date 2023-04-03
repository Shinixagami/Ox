
import styled from 'styled-components'

//import key frames
import { keyframes } from 'styled-components'

import vector1 from '../../images/gg/vector/Vector1.png';

import vector2 from '../../images/gg/vector/Vector2.png';



const fade = keyframes`

  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
`




export const MintWrapper = styled.div`

  /*z index of 1 is the lowest value*/
  z-index: 1;
  
/*   background-color: yellow; */


  box-sizing: border-box;

  position: relative;






  /*z index of 1 is the lowest value*/
 


/*   background-color: blue; */
  
/*   max-width: 1200px; */

  display: flex;
  flex-direction: column;


   z-index: 1;

    /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {

      transform: scale(0.45);



    

   

    

    
  } 


   /* if it is over 600 this it will do this */
  @media screen and (min-width: 601px) {
    

  } 
  


  
`


export const MintCircle1 = styled.div`

  position: absolute;

/*   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */


  width: 186px;
  height: 186px;
  
  background-image: url(${vector1});

  left: -45px;
  top: 380px;

  
`



export const MintCircle2 = styled.div`


  
  background-image: url(${vector1});

/*   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  

  width: 140px;
  height: 140px;

  position: absolute;

    

  right: -60px;
  top: -40px;


    

  width: 140px;
  height: 140px;


  background-image: url(${vector2});

  
    transform: scale(0.8);
 
  
`






export const MintBoxTransparent = styled.div`







    animation: ${fade} 12s ease;
    



/*   transform: scale(0.9); */

  box-sizing: border-box;

  width: 795px;
  height: 501px;


  
  
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 20px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );




  /*z index of 1 is the lowest value*/
 


/*   background-color: blue; */
  
/*   max-width: 1200px; */

  display: flex;
  flex-direction: column;


   z-index: 99;
   


  padding-top: 2%;

   @media screen and (min-width: 800px) {
  }
  

  @media screen and (min-width: 1200px) {

  }

  @media screen and (min-width: 1400px) {

  }


    /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {
/*     background-color: GREEN; */
/*     transform: scale(0.4);
    padding: 1%; */


    align-self: center;

  

    
  } 


   /* if it is over 600 this it will do this */
  @media screen and (min-width: 601px) {
    


  } 
  

  
`

export const MintTextTitle = styled.div`


  top: 61px;
  left: 289px;
  
  width: 220.91px;
  
  justify-content: center;
  
  text-align: center;
  
  color: #000000;


  /*z index of 1 is the lowest value*/
  z-index: 1;

  position: absolute;
  
  height: 48px;

  display: flex;


font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 48px;



/*   background-color: gray; */

   @media screen and (min-width: 800px) {
  }
  

  @media screen and (min-width: 1200px) {

  }

  @media screen and (min-width: 1400px) {

  }
`



export const MintBtn= styled.div`

  cursor: pointer;

  position: absolute;
  width: 666.69px;
  height: 71px;
  left: 64.82px;
  top: 369px;
  
  /* Gradient */
  
  background: linear-gradient(90.46deg, #FDC93D -33.38%, #FF5538 108.63%);
  border-radius: 20px;
  

  /*z index of 1 is the lowest value*/
  z-index: 99;



  background-color: red;
  
  max-width: 1200px;

  display: flex;
  flex-direction: column;

   @media screen and (min-width: 800px) {
  }
  

  @media screen and (min-width: 1200px) {

  }

  @media screen and (min-width: 1400px) {

  }
  


  &:hover{

    transform: scale(1.07);


    cursor: pointer;

    transition: all 0.25s ease-in-out;
    
  }

   /* button press */
  &:active{

    transform: scale(.8);
    
  }
  
`


export const MintBtn_NotConnected= styled.div`

  cursor: pointer;


  position: absolute;
  width: 666.69px;
  height: 71px;
  left: 64.82px;
  top: 369px;
  
  /* Gradient */
  
  background: linear-gradient(90.46deg, #FDC93D -33.38%, #FF5538 108.63%);
  border-radius: 20px;
  

  /*z index of 1 is the lowest value*/
  z-index: 99;

  background-color: red;
  
  max-width: 1200px;

  display: flex;
  flex-direction: column;

   @media screen and (min-width: 800px) {
  }
  

  @media screen and (min-width: 1200px) {

  }

  @media screen and (min-width: 1400px) {

  }
  


  &:hover{

    transform: scale(1.07);


    cursor: pointer;

    transition: all 0.25s ease-in-out;
    
  }

   /* button press */
  &:active{

    transform: scale(.8);
    
  }
  
`



export const MintBtnTxt= styled.div`


  position: absolute;
  width: 63px;
  height: 36px;
  left: 302.18px;
  top: 18px;

  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  
  display: flex;
  align-items: center;
  text-align: center;
  
  color: #FFFFFF;



  /*z index of 1 is the lowest value*/
  z-index: 2;


/*   background-color: blue; */
  
  max-width: 1200px;

  display: flex;
  flex-direction: column;

   @media screen and (min-width: 800px) {
  }
  

  @media screen and (min-width: 1200px) {

  }

  @media screen and (min-width: 1400px) {

  }
`


export const MintText_Total= styled.div`


position: absolute;
width: 82.01px;
height: 36px;
left: 64.82px;
top: 304px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
/* identical to box height */


color: #000000;



  /*z index of 1 is the lowest value*/
  z-index: 1;
/*   background-color: yellow; */
  max-width: 1200px;
  display: flex;
  flex-direction: column;
 

   @media screen and (min-width: 800px) {
  }
  

  @media screen and (min-width: 1200px) {

  }

  @media screen and (min-width: 1400px) {

  }
`


export const MintText_Cost= styled.div`


   position: absolute;
  width: 248.69px;
  height: 36px;
  left: 482.82px;
  top: 304px;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  
  text-align: right;
  
  color: #000000;
  




  /*z index of 1 is the lowest value*/
  z-index: 1;


/*   background-color: yellow; */
  
  max-width: 1200px;
  display: flex;
  flex-direction: column;
 


   @media screen and (min-width: 800px) {
  }
  

  @media screen and (min-width: 1200px) {

  }

  @media screen and (min-width: 1400px) {

  }
  
`


export const MintText_Amount= styled.div`

    position: absolute;
    width: 267.2px;
    height: 27px;
    left: 64.82px;
    top: 245px;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    
    
    color: #000000;


  

 
`

export const MintInnerBox= styled.div`


  position: absolute;
  width: 666.69px;
  height: 86px;
  
  left: 64.82px;
  top: 134px;
  
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;


  /*z index of 1 is the lowest value*/
  z-index: 1;
  max-width: 1200px;


  display: flex;
  flex-direction: column;

   @media screen and (min-width: 800px) {
  }
  

  @media screen and (min-width: 1200px) {

  }

  @media screen and (min-width: 1400px) {

  }
`

export const MintInnerBox_Number= styled.div`


  position: absolute;
  width: 17.2px;
  height: 48px;
  left: 325.41px;
  top: 27px;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  /* identical to box height */
  
  
  color: #000000;




  /*z index of 1 is the lowest value*/
  z-index: 1;

  background-color: ;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
 

   @media screen and (min-width: 800px) {
  }
  

  @media screen and (min-width: 1200px) {

  }

  @media screen and (min-width: 1400px) {

  }
`


export const MintInnerBox_Plus= styled.div`


  position: absolute;
  width: 87.3px;
  height: 59px;
  left: 559.54px;
  top: 14px;
  
  background: #FFFFFF;
  border-radius: 8px;



  /*z index of 1 is the lowest value*/
  z-index: 1;

  background-color: white;
  
  max-width: 1200px;

  display: flex;
  flex-direction: column;


   @media screen and (min-width: 800px) {
  }
  

  @media screen and (min-width: 1200px) {

  }

  @media screen and (min-width: 1400px) {

  }


  
  &:hover{

    transform: scale(1.07);
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    
  }

   /* button press */
  &:active{

    transform: scale(.8);
    
  }

  




  
`

export const MintInnerBox_PlusA= styled.div`


position: absolute;
width: 33.07px;
height: 0px;
left: 27.78px;
top: 29px;

border: 3px solid #000000;



 
`

export const MintInnerBox_PlusB= styled.div`

  position: absolute;
  width: 25px;
  height: 0px;

  
  left: 31.8px;
  top: 28.5px;
  
  border: 3px solid #000000;
  transform: rotate(-90deg);

 
`




export const MintInnerBox_Minus= styled.div`

  position: absolute;
  width: 87.3px;
  height: 59px;
  left: 21.16px;
  top: 14px;
  
  background: #FFFFFF;
  border-radius: 8px;


  /*z index of 1 is the lowest value*/
  z-index: 1;


  background-color: white;
  
  max-width: 1200px;
  display: flex;
  flex-direction: column;
 

   @media screen and (min-width: 800px) {
  }
  

  @media screen and (min-width: 1200px) {

  }

  @media screen and (min-width: 1400px) {

  }

   
  &:hover{

    transform: scale(1.07);
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    
  }

   /* button press */
  &:active{

    transform: scale(.8);
    
  }

  
`

export const MintInnerBox_MinusA= styled.div`

  position: absolute;
  width: 33.07px;
  height: 0px;
  
  left: 27.78px;
  top: 29px;
  
  border: 3px solid #000000;
  
`























export const HeroContent = styled.div`

  /*z index of 1 is the lowest value*/
  z-index: 1;


  background-color: cyan;

  
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  
  align-items:center;

  padding-top: 2%;

   @media screen and (min-width: 800px) {
   padding-top: 2%;
  }
  

  @media screen and (min-width: 1200px) {

   padding-top: 2%;
  }

  @media screen and (min-width: 1400px) {

   padding-top: 2%;
  }
`