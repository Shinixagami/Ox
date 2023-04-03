import styled from 'styled-components'


import icon1 from '../../images/gg/Icon.png';

//Q AND A
export const InfoContainerQABG = styled.div`


/*   position: relative;
 */


  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


/*   background-color: white; */
  


  /* this changes the layout */
/*   flex-direction: column;  */
  
  z-index: 12; /*hero section is 10 */

/*   transform: skewY(2deg); */
  
   
/*   margin-top: -7%; */
  
/*   width: 100%; */

  /* added to extend componenet*/
  min-height: 100vh;
/*   height: auto; */
  
/*   border: 15px solid #1988ff; */
  padding: 50px;


   padding-bottom: 10px;

    padding-top: 1px;

  font-size: 2em;
  color: white;


  &:hover{

  }


    /* turns off display if its over 1000 */
   @media screen and (max-width: 600px) {

      padding: 30px;

  } 


`



export const InfoWrapperQA = styled.div`

   width: 100%;
/*   border: 8px solid green; */


  &:hover{

  

    }

`




export const InfoBox = styled.div`

/*   background-color: cyan; */


  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;
  
  width: 1223px;
  height: 516.57px;


  
  /* Inside auto layout */
  
  flex: none;
  order: 0;
  flex-grow: 0;



    /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {
/*     background-color: GREEN; */
/*     transform: scale(0.4);
    padding: 1%; */

    width: 100vw;

    
  } 


   /* if it is over 600 this it will do this */
  @media screen and (min-width: 601px) {
    


  } 


  

  

`


export const InfoBox_Icon = styled.div`

/* position: absolute; */

/*   background-color: cyan; */

  width: 88px;
  height: 88px;



  

   background-image: url(${icon1});



`



export const InfoBox_Title = styled.div`

/*   background-color: cyan; */

  width: 779px;
height: 64px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 56px;
line-height: 64px;
/* identical to box height, or 114% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;
text-transform: capitalize;

/* Black / Black-100% */

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;



    /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {
/*     background-color: GREEN; */
/*     transform: scale(0.4);
    padding: 1%; */

    width: 100vw;


    font-size: 1.9rem;

    
  } 


   /* if it is over 600 this it will do this */
  @media screen and (min-width: 601px) {
    


  } 





`

export const InfoBox_Text = styled.div`

/*   background-color: cyan; */


  width: 672px;
height: 48px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */

text-align: center;
letter-spacing: 0.02em;

/* Gray/Gray-dark */

color: #333B42;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;




    /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {
/*     background-color: GREEN; */
/*     transform: scale(0.4);
    padding: 1%; */

    width: 100vw;


    font-size: 1.1rem;

    
  } 


   /* if it is over 600 this it will do this */
  @media screen and (min-width: 601px) {
    


  } 





  


  

`

export const InfoBox_Btn = styled.div`
/* 
  background-color: cyan;
 */

  box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 24px;
gap: 4px;

width: 192px;
height: 56px;

border: 1px solid #FF6239;
border-radius: 8px;

/* Inside auto layout */

flex: none;
order: 3;
flex-grow: 0;


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


export const InfoBox_Btn_Text = styled.div`

/*   background-color: cyan; */

  width: 150px;
  height: 24px;
  
  /* Button/Size/Large */
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 24px;
  /* identical to box height, or 133% */
  
  text-align: center;
  letter-spacing: 0.02em;
  
  color: #FF6239;
  
  
  /* Inside auto layout */
  
  flex: none;
  order: 0;
  flex-grow: 0;
  



`



















//left 
export const InfoRowOneQA = styled.div`

 width: 80%;
  border: 15px solid purple;

  &:hover{


  }

`

//right
export const InfoRowTwoQA = styled.div`

    width: 80%;
  border: 15px solid cyan;



  &:hover{

    

  }

`








