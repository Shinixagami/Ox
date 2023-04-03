import styled from 'styled-components'


import pencil from '../../images/gg/pencil.png';



export const InfoContainerBG = styled.div`

  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  

  
  z-index: 11; /*hero section is 10 */

  
/*   transform: skewY(-2deg); */

  
  width: 100%;

  /* added css*/
/*   min-height: 110vh;
  height: auto; */
  
/*   border: 15px solid yellow; */
/*   padding: 5%; */
/*   margin-top: -2%; */

  /* centers to middiel Y VALUE*/
  justify-content: center;


  font-size: 2em;
  color: white;


  /* over flow to auto resize div */
  overflow: hidden;

  

  &:hover{

    
    }

`
export const InfoBox1_wrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    align-self: center;
/*     border: 10px dashed cyan; */

    padding-top: 3%;
    


 
`

export const InfoBox1 = styled.div`

    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;


    
    

    align-self: center;
    
    padding: 0px;
    gap: 20px;
    
    width: 590px;
    height: 340px;
    
    
    /* Inside auto layout */
    
/*     flex: none;
    order: 0;
    flex-grow: 0; */


/*     background-color: lime; */
    


`


export const InfoBox1_Icon = styled.div`


width: 80px;
height: 80px;
left: 12px;



 background-image: url(${pencil});



`

export const InfoBox1_Title = styled.div`


/* Auto layout */


align-self: center;


font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 56px;
/* line-height: px; */
/* identical to box height, or 114% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

/* Black / Black-100% */

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 1;




`

export const InfoBox1_Text = styled.div`


width: 570px;
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
flex-grow: 1;



`


export const InfoBox1_Btn = styled.div`


box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 24px;
gap: 4px;

width: 169px;
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

export const InfoBox1_BtnText = styled.div`


/* Know more */


width: 120px;
height: 24px;

/* Button/Size/Large */

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
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





export const InfoWrapper = styled.div`


  width: 100%;
/*   border: 15px solid green; */
  

  display: flex;
   /* over flow to auto resize div */
  overflow: hidden;
  



  /*if it is less than 1116 it will go to this */
  @media screen and (max-width: 1000px) {

    /* pushes items to center*/
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;

    /* height */

    height: 100% ;

  } 
  

  



  &:hover{

    

    }

`

//left 
export const InfoRowOne = styled.div`

  

  width: 100%;0
  border: 15px solid purple;
 
  &:hover{


  }

`


export const ImgContainer = styled.div`

  object-fit: 

  width: 100%;
  border: 10px solid orange;
 
  &:hover{


  }

`



export const ImageOne = styled.img`

  object-fit: cover;

  width: 100%;

  transform: translate(-42px, 50px) scale(1.2);;
 
  border: 5px dashed red;
 
  &:hover{


  }


   /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {

    /* pushes items to center*/
    transform: translate(-15px, 20px)  scale(1.5);

  } 



  
`



export const InfoRow_Wrapper = styled.div`

  padding: 1%;

   display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  
`


export const InfoRow = styled.div`


  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  
  width: 332px;
  height: 176px;
  
  
  /* Inside auto layout */
  
  flex: none;
  order: 0;
  flex-grow: 0;

/* 
  background-color: green; */

   /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {

  } 
  


`



export const InfoRow_Number = styled.div`

  width: 57px;
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
  
  color: #FF6239;
  
  
  /* Inside auto layout */
  
  flex: none;
  order: 0;
  flex-grow: 0;


   

`



export const InfoRow_Title = styled.div`

  width: 227px;
  height: 40px;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */
  
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  
  /* Black / Black-100% */
  
  color: #000000;
  
  
  /* Inside auto layout */
  
  flex: none;
  order: 0;
  flex-grow: 0;



`

export const InfoRow_Text = styled.div`

   width: 272px;
  height: 52px;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  /* or 26px */
  
  text-align: center;
  
  /* Gray/Gray-dark */
  
  color: #333B42;
  
  
  /* Inside auto layout */
  
  flex: none;
  order: 0;
  flex-grow: 0;

   
 


`




































//right
export const InfoRowTwo = styled.div`

  width: 100%;
  border: 8px solid cyan;
 
  font-size: 85%;

  &:hover{

    

  }

`


export const InfoRowTwoTitle = styled.div`

  width: 100%;
  font-size: 3rem;
  border: 8px dashed yellow;
 

  &:hover{

  }


  /*if it is less than 1116 it will go to this */
  @media screen and (max-width: 1116px) {
    

  } 


  

`





export const InfoRowTwoBody = styled.div`

  width: 100%;
  font-size: 2.5rem;
  border: 8px dashed yellow;

  
  &:hover{


    
  }


    /*if it is less than 1116 it will go to this */
  @media screen and (max-width: 1116px) {

    /* pushes items to center*/

    font-size: 1.6rem;
    

  } 


  /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {

    /* pushes items to center*/

    font-size: 1.5rem;
    

  } 


`







