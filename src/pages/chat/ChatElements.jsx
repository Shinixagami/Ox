
import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Background = styled.div`


/*    
  background-image: url("https://64.media.tumblr.com/02648a34627f058bb3ea408aa06ff537/57c69f3a8388c24a-b9/s1280x1920/e75e44dbf6694d5f8104915b6b6d09861a0685b9.gifv");
 */


  background: linear-gradient(322.39deg, #3B6A84 29.37%, #28546C 53.85%, #183C51 84.77%);
  
/*  
  background-repeat: no-repeat;  */
  background-size: cover;


  /*text*/
  font-family: 'VT323', monospace;

  /*body*/
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  width: 100vw;
  height: 100vh;

 

  @media screen and (max-width: 768px) {

      padding-top: 4vh;
    
  }
  

  

/*   filter: blur(2px); */
  

  

`

export const Container = styled.div`

  


  padding-top: 15vh;

  display: flex;
  justify-content: center;


  @media screen and (max-width: 768px) {

    transform: scale(0.82);
    
  }
  


  
  
  




`



export const Footer = styled.div`

  /* ONLY SHOWS ON MOBILE*/
   /* From https://css.glass */
  background: rgba(255, 207, 122, 0.2);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px;
    
    display: inherit; 
    
    width: 100%;
 
  
    /* text */
    text-align: center;
    font-size: 18px;
    color: black;
    
    
    height: 36px;
    padding-top: 10px;
   
    
    text-align: center;
    margin: auto;

  

  @media screen and (max-width: 1116px) {
  
    
  } 
  

`
