//react library
import React, {useState, Component } from 'react'

import Faq from 'react-faq-component';
/* FAQ DATA -QUESTIONS HERE */
import {data} from './FAQ_Data' 



// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



//lure page
import {

  InfoContainerBG,
  InfoWrapper,
  InfoRowOne,
  ImgContainer,
  ImageOne,
  InfoRowTwo,
  InfoRowTwoTitle,
  InfoRowTwoBody,

  InfoBox1_wrapper,
  InfoBox1_Icon,
  InfoBox1,
  InfoBox1_Title,
  InfoBox1_Text,
  InfoBox1_Btn,
  InfoBox1_BtnText,

  InfoRow_Wrapper,
  InfoRow,
  InfoRow_Number,
  InfoRow_Title,
  InfoRow_Text
  
  
} from './InfoElements1' 

//traits page
import {

  InfoContainerTraitsBG,
  InfoWrapperTraits,
  InfoRowOneTraits,
  InfoRowTwoTraits,

  InfoBox2_Wrapper,
  InfoBox2,
  InfoBox2_Image,
  InfoBox2_Title,
  InfoBox2_Text,
  
  



  

  SwiperContainer,
  SwiperWrapper,
  SwiperBox,
  SwiperBox_Image,
  SwiperBox_Title,
  SwiperBox_Btn,
  SwiperBox_Btn_Text,


  SwiperBox_MobileWrapper,


  
  
  
  
} from './InfoElements2' 


//traits page FOR MOBILE
import {

  InfoContainerTraitsBGMobile,
  InfoWrapperTraitsMobile,
  InfoRowOneTraitsMobile,
  InfoRowTwoTraitsMobile,
  MobileTextContainer,
  MobileText,

} from './InfoElements2mobile' 



//Q&A page
import {

  InfoContainerQABG,
  InfoWrapperQA,
  InfoRowOneQA,
  InfoRowTwoQA,

  InfoBox,
  InfoBox_Icon,
  InfoBox_Title,
  InfoBox_Text,
  InfoBox_Btn,
  InfoBox_Btn_Text,
  
  
  
} from './InfoElements3_FAQ' 


//SWIPER SLIDES - MUST EDIT
import {

  SwipeContainer,
  SwipeWrapper,
  SwipeItemOne,
  SwipeItemTwo,
  SwipeImgContainer,
  SwipeImage
  
} from './SwiperElements' 


import {

  TimerBGContainer,
  TimerWrapper,
  TimerContainer
  
} from './Timer' 



import orca from '../../images/whales/Orca.png';

/* counnt down */
import Countdown from "react-countdown";

/* TOAST */
import { ToastContainer, toast } from 'react-toastify';


// ReactModal.setAppElement('#main');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
     position: 'fixed',
    overlay: {zIndex: 1000},
  },
};



const InfoSection01 = () => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  const CompletionistMSG = () => {
    toast("FINISHED");
  }

   const Completionist = () =>
   <span>Timer is UP!!</span>;


  return(
    
    <div>

      <ToastContainer position="bottom-left" autoClose={3100}/>
      
      <InfoContainerBG>

        <InfoBox1_wrapper>
          
          <InfoBox1>
            
            <InfoBox1_Icon/>


            <InfoBox1_Title>
            How Does it Work?
            </InfoBox1_Title>

            <InfoBox1_Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat mollis egestas nam luctus facilisis ultrices
            </InfoBox1_Text>


            <InfoBox1_Btn>
              <InfoBox1_BtnText>
              
              Know More →
              </InfoBox1_BtnText>
            </InfoBox1_Btn>
              

          </InfoBox1>
        </InfoBox1_wrapper>


        <InfoRow_Wrapper>

          <InfoRow>
            <InfoRow_Number>
            01
            </InfoRow_Number>

            <InfoRow_Title>
            Headline One
            </InfoRow_Title>

            <InfoRow_Text>
              Massa enim libero dictumst consectetur in convallis lobortis
            </InfoRow_Text>
          </InfoRow>

           <InfoRow>
            <InfoRow_Number>
            02
            </InfoRow_Number>

            <InfoRow_Title>
            Headline Two
            </InfoRow_Title>

            <InfoRow_Text>
              Massa enim libero dictumst consectetur in convallis lobortis
            </InfoRow_Text>
          </InfoRow>

           <InfoRow>
            <InfoRow_Number>
            03
            </InfoRow_Number>

            <InfoRow_Title>
            Headline 3
            </InfoRow_Title>

            <InfoRow_Text>
              Massa enim libero dictumst consectetur in convallis lobortis
            </InfoRow_Text>
          </InfoRow>

           <InfoRow>
            <InfoRow_Number>
            04
            </InfoRow_Number>

            <InfoRow_Title>
            Headline Four
            </InfoRow_Title>

            <InfoRow_Text>
              Massa enim libero dictumst consectetur in convallis lobortis
            </InfoRow_Text>
          </InfoRow>
        
        </InfoRow_Wrapper>




        
        <InfoBox2_Wrapper>
        
          <InfoBox2>

            <InfoBox2_Image/> 

            <InfoBox2_Title>
              Check our awesome artwork
            </InfoBox2_Title>

            <InfoBox2_Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat mollis egestas nam luctus facilisis ultrices
              
            
            
            </InfoBox2_Text>

            
          
          
          </InfoBox2>


          
        
        
        
        
        
        
        </InfoBox2_Wrapper>


        






        
        <SwiperContainer>

          <SwiperWrapper>

          <Swiper

              slidesPerView={4}
        centeredSlides={true}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
            
            
        grabCursor={true}
          pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
            
          >


            <SwiperSlide> 
              <SwiperBox>
                <SwiperBox_Image/> 
                <SwiperBox_Title> SMART MINDZ NFT </SwiperBox_Title>

                <SwiperBox_Btn>
                  <SwiperBox_Btn_Text>
                    MINT NOW (0.02 ETH)
                  </SwiperBox_Btn_Text>
                </SwiperBox_Btn>
              </SwiperBox>
            </SwiperSlide>

            <SwiperSlide> 
              <SwiperBox>
                <SwiperBox_Image/> 
                <SwiperBox_Title> SMART MINDZ NFT </SwiperBox_Title>

                <SwiperBox_Btn>
                  <SwiperBox_Btn_Text>
                    MINT NOW (0.02 ETH)
                  </SwiperBox_Btn_Text>
                </SwiperBox_Btn>
              </SwiperBox>
            </SwiperSlide>

             <SwiperSlide> 
              <SwiperBox>
                <SwiperBox_Image/> 
                <SwiperBox_Title> SMART MINDZ NFT </SwiperBox_Title>

                <SwiperBox_Btn>
                  <SwiperBox_Btn_Text>
                    MINT NOW (0.02 ETH)
                  </SwiperBox_Btn_Text>
                </SwiperBox_Btn>
              </SwiperBox>
            </SwiperSlide>
 
            <SwiperSlide> 
              <SwiperBox>
                <SwiperBox_Image/> 
                <SwiperBox_Title> SMART MINDZ NFT </SwiperBox_Title>

                <SwiperBox_Btn>
                  <SwiperBox_Btn_Text>
                    MINT NOW (0.02 ETH)
                  </SwiperBox_Btn_Text>
                </SwiperBox_Btn>
              </SwiperBox>
            </SwiperSlide>

    
            <SwiperSlide> 
              <SwiperBox>
                <SwiperBox_Image/> 
                <SwiperBox_Title> SMART MINDZ NFT </SwiperBox_Title>

                <SwiperBox_Btn>
                  <SwiperBox_Btn_Text>
                    MINT NOW (0.02 ETH)
                  </SwiperBox_Btn_Text>
                </SwiperBox_Btn>
              </SwiperBox>
            </SwiperSlide>

            <SwiperSlide> 
              <SwiperBox>
                <SwiperBox_Image/> 
                <SwiperBox_Title> SMART MINDZ NFT </SwiperBox_Title>

                <SwiperBox_Btn>
                  <SwiperBox_Btn_Text>
                    MINT NOW (0.02 ETH)
                  </SwiperBox_Btn_Text>
                </SwiperBox_Btn>
              </SwiperBox>
            </SwiperSlide>

             <SwiperSlide> 
              <SwiperBox>
                <SwiperBox_Image/> 
                <SwiperBox_Title> SMART MINDZ NFT </SwiperBox_Title>

                <SwiperBox_Btn>
                  <SwiperBox_Btn_Text>
                    MINT NOW (0.02 ETH)
                  </SwiperBox_Btn_Text>
                </SwiperBox_Btn>
              </SwiperBox>
            </SwiperSlide>


             <SwiperSlide> 
              <SwiperBox>
                <SwiperBox_Image/> 
                <SwiperBox_Title> SMART MINDZ NFT </SwiperBox_Title>

                <SwiperBox_Btn>
                  <SwiperBox_Btn_Text>
                    MINT NOW (0.02 ETH)
                  </SwiperBox_Btn_Text>
                </SwiperBox_Btn>
              </SwiperBox>
            </SwiperSlide>

            
          
          
           </Swiper>

          </SwiperWrapper>


          <SwiperBox_MobileWrapper>
          
          MOBILE
          </SwiperBox_MobileWrapper>
        
        
        </SwiperContainer>


        
     
      
      </InfoContainerBG>


      


    




      
      <InfoContainerQABG>

        <InfoBox>
        <InfoBox_Icon/>

      <InfoBox_Title>Frequently asked questions</InfoBox_Title>

          <InfoBox_Text>
          got any questions? 
          </InfoBox_Text>

          <InfoBox_Btn>
            <InfoBox_Btn_Text>
              Explore all projects  →
            </InfoBox_Btn_Text>
          
          
          </InfoBox_Btn>

        </InfoBox>


        



        
        


        
        <InfoWrapperQA>
          
           <div>
            <Faq 
              data={data}
               styles={{
                bgColor: "white",
                titleTextColor: "black",
                rowTitleColor: "#1c1c1a",
                rowTitleTextSize: 'large',
                rowContentColor: "#615e57",
                rowContentTextSize: '16px',
                rowContentPaddingTop: '2px',
                rowContentPaddingBottom: '2px',
                rowContentPaddingLeft: '5px',
                rowContentPaddingRight: '5px',
                arrowColor: "black",
                }} 
            />
          </div>

          
        
        </InfoWrapperQA>
      </InfoContainerQABG>


 


      


      


      
      



  
      
    </div>
  
  );

}

export default InfoSection01