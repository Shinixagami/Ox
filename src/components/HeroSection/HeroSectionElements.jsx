
import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

//

export const HeroContainer = styled.div`


  border: none;

  position: relative;

/*   padding-bottom: 20%; */

  padding-top: 13%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

/*   background-color: cyan; */
  
     @media screen and (max-width: 768px) {

       padding-top: 10%;
       margin-bottom: -10%;

    }


`


export const HeroBg = styled.div`



  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  rigt: 0;

  width: 100%;
  height: 100%;
  overflow: hidden; 

  border: none;

  object-fit: cover;

`

export const HeroWrapper = styled.div`



  display: flex;

  flex-direction: column;

  padding: 50px;

  z-index: 99;
  
/*   margin-top: -20vh; */

  
/*   background-color: gray; */


   /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {

    padding-top: 30%;

    
  } 


   /* if it is over 600 this it will do this */
  @media screen and (min-width: 601px) {
  

  } 


  
  @media screen and (max-width: 1200px) {
/*       background-color: pink; */
/*      margin-top: -10%; */
  }
  



  


`



export const VideoBg = styled.video`

  /*set to two so profile picture does not overalp*/
  z-index: 1;
  width: 100%;
  height: 100%;

  -o-object-fit: cover; 

  object-fit: cover;
  background:  #232a34;
`

export const GifBg = styled.div`

  width: 100%;
  height: 100%;
  
/*   background-image: url("  https://www.teahub.io/photos/full/11-111194_cyberpunk-pixel-art-gif.gif");
 */
  /* whale */

/*   background-image: url("https://i.imgur.com/Mgw1Q0J.png"); */


  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

  background-repeat: no-repeat;
  background-size: cover;

 
`





export const HeroContent = styled.div`

  /*z index of 1 is the lowest value*/
  z-index: 1;


/*   background-color: cyan; */


  
/*   max-width: 1400px; */

  display: flex;
  flex-direction: column;
  align-items: center;



  padding: 3%



  
  /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {

    
    

    

    
  } 


   /* if it is over 600 this it will do this */
  @media screen and (min-width: 601px) {
    


  } 

  


  

   @media screen and (min-width: 800px) {
   padding-top: 2%;
  }


  @media screen and (max-width: 1100px) {
    
  }
  

  @media screen and (min-width: 1200px) {
   padding-top: 2%;
    
  }

  @media screen and (min-width: 1400px) {

   padding-top: 2%;
  }

`

export const HeroH1 = styled.div`




  color: black;


/*   background-color: yellow; */
  line-height: 1;
  letter-spacing: -0.06em;


  font-family: 'Poppins', sans-serif;


  font-style: normal;
  font-weight: 700;
  font-size: 6.7rem;

  
  text-align: center;

  @media screen and (max-width: 768px) {
/*     font-size: 40px */
  }

  @media screen and (max-width: 480px) {
/*     font-size: 32px; */
  }



   
  /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {
/*     background-color: GREEN; */
/*     transform: scale(0.4);
    padding: 1%; */


    font-size: 2.3rem;

    width: 100vw;

    


  } 


   /* if it is over 600 this it will do this */
  @media screen and (min-width: 601px) {
    
  } 





  
  

  


  

`

export const HeroH1Orange = styled.div`

  color: #fff;



    padding-bottom: 3%;

    line-height: 1;
    letter-spacing: -0.06em;
    


background: linear-gradient(94.33deg, #FEAD3C 15.04%, #FF5E39 83.15%);
-webkit-background-clip: text;
-webkit-text-fill-color:

background-clip: text;
text-fill-color: transparent;


  background-size: 200% 200%;
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  



  font-family: 'Poppins', sans-serif;


  font-style: normal;
  font-weight: 700;
  font-size: 6.7rem;

  font-weight: 700;
  

  

  text-align: center;

  @media screen and (max-width: 768px) {
/*     font-size: 40px */
  }

  @media screen and (max-width: 480px) {
/*     font-size: 32px; */
  }


     
  /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {
/*     background-color: GREEN; */
/*     transform: scale(0.4);
    padding: 1%; */
     width: 100vw;

    font-size: 2.3rem;


  } 


   /* if it is over 600 this it will do this */
  @media screen and (min-width: 601px) {
    
  } 
  


`



export const HeroP = styled.div`

  margin-top 20px;
  color: #fff;

  font-size: 24px; 
  text-align: center;

  max-width: 600px; 

  @media screen and (max-width: 768px) {
    font-size: 24px
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;


// not used
export const HeroButton = styled.div`

  background-color: blue;
  background: blue;
  padding: 20px 10px;

  &:hover{

  }

  

`