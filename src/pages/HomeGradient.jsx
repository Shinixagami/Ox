import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'


import grad1_tl from '../images/gg/gradients/Gradient_LeftTop.png';

import grad1_tr from '../images/gg/gradients/Gradient_RightTop.png';

import grad2_cl from '../images/gg/gradients/Gradient_CenterLeft.png';

import grad2_cr from '../images/gg/gradients/Gradient_CenterRight.png';

import grad3_bl from '../images/gg/gradients/Gradient_BottomLeft.png';

import grad3_br from '../images/gg/gradients/Gradient_BottomRight.png';

export const T_Left = styled.div`

   position: absolute;


    background-image: url(${grad1_tl});

    width: 538px;
    height: 690px;

    top:0px;
    left: 0px;


`


export const T_Right = styled.div`

   position: absolute;

    background-image: url(${grad1_tr});

    width: 505px;
    height: 933px;

    top:0px;
    right: 0px;



`



export const C_Left = styled.div`

   position: absolute;

    background-image: url(${grad2_cl});

    width: 547px;
    height: 1198px;

    top:900px;
    left: 0px;

`


export const C_Right = styled.div`

 position: absolute;

  background-image: url(${grad2_cr});

    width: 568px;
    height: 1198px;

    top:1340px;
    right: 0px;

    
/* 
    background-color: green; */
    


`

export const B_Left = styled.div`

 position: absolute;



/* not done */
   background-image: url(${grad3_bl});

    width: 475px;
    height: 839px;

    top:2700px;
    left: 0px;


     


     

 


`

export const B_Right = styled.div`

 position: absolute;



/*  not done */
   background-image: url(${grad3_br});


    width: 431px;
    height: 839px;

    top:2750px;
    right: 0px;



 


`