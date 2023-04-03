import styled from 'styled-components'




import icon2 from '../../images/gg/Icon.png';


import one from '../../images/gg/nfts/1.png';


import four from '../../images/gg/nfts/4.png';

// import pencil from '../../images/gg/pencil.png';

export const InfoBox2_Wrapper = styled.div`

 padding: 1%;
/* 
 background-color: green; */


 padding-top: 4%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

export const InfoBox2 = styled.div`

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  
  

    
  
  width: 672px;
  height: 328px;
  
  
  /* Inside auto layout */
  
  flex: none;
  order: 0;
  flex-grow: 0;


/*   background-color: blue; */


  
`




 // background-image: url(${pencil});

export const InfoBox2_Image = styled.div`

    width: 64px;
    height: 64px;


    

    background-image: url(${icon2});


    padding: 20px;

    margin-bottom: 20px;


  
`

export const InfoBox2_Title = styled.div`

  width: 512px;
  height: 128px;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  /* or 114% */
  
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
  
 
  
`


export const InfoBox2_Text = styled.div`


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



  
  
`











export const SwiperContainer = styled.div`

/*   background-color: red; */


  padding-bottom: 5%;
   padding-left: 1vw;
    padding-right: 1vw;
   
  width: 100%;

  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  /*if it is less than 600 it will go to this */
  @media screen and (min-width: 1300px) {
/*     border: 15px solid cyan; */
  } 
  
`


export const SwiperWrapper = styled.div`

/*   display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center; */


/*   background-color: blue; */

  padding-bottom: 20px;




  /*if it is less than 600 it will go to this */
  @media screen and (min-width: 1300px) {

/*     border: 15px solid orange; */

  } 
  
`

/* make this dissapear when it is less than 600px*/
export const SwiperBox = styled.div`

/* Auto layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


width: 358px;
height: 480.37px;


/* Inside auto layout */





  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;


/*   background-color: pink; */

  /*if it is less than 600 it will go to this */
  @media screen and (min-width: 1300px) {


  } 
  
`


export const SwiperBox_Image = styled.img`

  position: absolute;
  width: 358px;
  height: 322px;
  left: 0px;
  top: 0px;
  


  object-fit: cover;


  
  
  background-image: url(${four});
  border-radius: 20px;





  background-color: red;

  /*if it is less than 600 it will go to this */
  @media screen and (min-width: 1300px) {


  } 
  
`

export const SwiperBox_Title = styled.div`

  position: absolute;

  top: 325px;

  

    /* Heading-04 */
  
/*   font-family: 'General Sans';
  font-style: normal;
  font-weight: 600; */
  font-size: 1.6rem;
/*   line-height: 40px; */
  /* identical to box height, or 125% */
  
/*   display: flex;
  align-items: center;
  letter-spacing: -0.02em; */
  
  /* Black / Black-100% */
  
  color: #000000;
  

  /*if it is less than 600 it will go to this */
  @media screen and (min-width: 1300px) {

/*     border: 15px solid cyan; */

  } 
  
`


export const SwiperBox_Btn = styled.div`

  position: absolute;
  width: 358px;
  height: 56.37px;
  top: 380px;
  
  background: linear-gradient(90.46deg, #FDC93D -33.38%, #FF5538 108.63%);
  border-radius: 8px;


  /*if it is less than 600 it will go to this */
 
  
`


export const SwiperBox_Btn_Text = styled.div`

  /* MINT NOW (3.13 ETH ) */


    position: absolute;
    width: 167px;
    height: 20px;
    left: 96px;
    top: 18px;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 123.02%;
    /* identical to box height, or 20px */
    
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.01em;
    
    color: #FFFFFF;

  /*if it is less than 600 it will go to this */
 
  
`





export const SwiperBox_MobileWrapper = styled.div`

    display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;



  /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {

  background-color: GREEN;

  } 



  @media screen and (min-width: 601px) {

   background-color: GREEN;

    display: none;

  } 
  
  
`













//THIS IS LEFT TRAITS CONTAINER
export const InfoContainerTraitsBG = styled.div`


    display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;


  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  z-index: 12; /*hero section is 10 */

/*   transform: skewY(-2deg); */
  

  width: 100%;
  padding: 10px;
  
  /* added css*/
  min-height: 130vh;
  height: auto;
  
  border: 10px solid orange;
  padding-bottom: 12%;
 
  font-size: 2em;
  color: white;



  &:hover{
  }


    /* turns off display if its over 1000 */
   @media screen and (max-width: 1000px) {

    display: none;

  } 

`

//THIS IS LEFT TRAITS CONTAINER
export const InfoWrapperTraits = styled.div`

  
  
  justify-content: space-between;
  align-items: center;

  text-align: center;


  

/*   display: flex;
 */
  margin: auto;
  flex-direction: row;

  
  /* over flow to auto resize div */
  overflow: hidden;



  /* important */
  width: 100%;
  height: 100vh;
  
  border: 15px solid green;

 
  &:hover{


  }




  /*if it is less than 600 it will go to this */
  @media screen and (min-width: 1300px) {
    height: 125vh;
  } 


  

`

//left 
export const InfoRowOneTraits = styled.div`

  justify-content: space-between;
  

  
  /* important */
  height: 50%;
  width: 50%;

  display: inline-block;
  
  border: 15px solid purple;

  &:hover{

  }

  /*if it is less than 600 it will go to this */
  @media screen and (min-width: 1300px) {

    border: 15px solid cyan;

  } 


  
`

//right
export const InfoRowTwoTraits = styled.div`

  
  width: 80%;
  border: 15px solid cyan;
 
  &:hover{

    

  }

`












