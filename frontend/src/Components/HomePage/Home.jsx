import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { Box, Heading, Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide

} from 'swiper/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
 import "swiper/css/autoplay"
 import "./Home.css"
  // import styles bundle
  import 'swiper/css/bundle';
  import { AiFillStar } from "react-icons/ai";
  // function Feature({ title, desc, ...rest }) {
  //   return (
  //     <Box p={5} shadow='md' borderWidth='1px' {...rest}>
  //       <Heading fontSize='xl'>{title}</Heading>
  //       <Text mt={4}>{desc}</Text>
  //     </Box>
  //   )
  // }
const Home = () => {
  return (
    <div>
        <div className='top_Ad_section'>
        <div className='Ad_swiper-section'>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiper-ad"
    >
      <SwiperSlide className='swiper_slide_1'>
         <Image src='https://onemg.gumlet.io/3a5d9aa3-4b44-4f92-affe-2261cfa288fd_1661248108.jpg?w=911&h=200&format=auto'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_911,h_200,c_fit,q_auto,f_auto/a7v2ipno4azmdu6cnjuu.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src="https://onemg.gumlet.io/a_ignore,w_911,h_200,c_fit,q_auto,f_auto/edq9awox0cpywojoubhb.png"></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_911,h_200,c_fit,q_auto,f_auto/kcdcsb5yrkpxok5bpm8y.png'></Image>
      </SwiperSlide>
      
    </Swiper>
    </div>
    <Image src='https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/rohm7mk20fc4mairgjg0.png' width={'auto'}></Image>
    </div>
    <div>
        <Heading color={'#808080'} className="Heading_below_ad" fontSize={"2xl"} marginTop='5'>
          TATA 1mg India's leading pharmacy and HealthCare Platform
        </Heading>
    </div>
    <div>
        <div className='ad_below_heading'>
        <Image src='https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png'>
        </Image>
        </div>
        <div>
            <p className='Featured_Brands'>Featured Brands
            </p>
            <div className='Featured_Brands_swiper'>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={10}
      breakpoints={{
        // when window width is >= 640px
      0:{
        slidesPerView:1,
        spaceBetween:40
      },
       450:{
         
         slidesPerView:2,
         spaceBetween:30
        },
        640: {
          
          slidesPerView: 3,
          spaceBetween:25
        },
        // when window width is >= 768px
        768: {
          
          slidesPerView: 4,
          spaceBetween:20
        },
        900:{
          slidesPerView:6,
          spaceBetween:10
        }
      }}
      navigation
      Autoplay
      pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiper-ad"
    >
      <SwiperSlide className='swiper_slide_2'>
         <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/obsqdxfyey6qswltzhry.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zvd6zwzgmocbwjyohpfa.png"></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/sojsfqsqrtwqgdpg5jlc.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
    </Swiper>
            </div>
        </div>
        <div>
            <p className='Featured_Brands'>Popular Categories
            </p>
            <div className='Featured_Brands_swiper'>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={10}
      breakpoints={{
        // when window width is >= 640px
      0:{
        slidesPerView:1,
        spaceBetween:40
      },
       450:{
         
         slidesPerView:2,
         spaceBetween:30
        },
        640: {
          
          slidesPerView: 3,
          spaceBetween:25
        },
        // when window width is >= 768px
        768: {
          
          slidesPerView: 4,
          spaceBetween:20
        },
        900:{
          slidesPerView:6,
          spaceBetween:10
        }
      }}
      navigation
      Autoplay
      pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiper-ad"
    >
      <SwiperSlide className='swiper_slide_2'>
         <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/obsqdxfyey6qswltzhry.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zvd6zwzgmocbwjyohpfa.png"></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/sojsfqsqrtwqgdpg5jlc.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
    </Swiper>
            </div>
        </div>
        
        <div>
            <p className='Featured_Brands'>Top Sellers From Healthvit
            </p>
            <div className='Featured_Brands_swiper'>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={10}
      breakpoints={{
        // when window width is >= 640px
       450:{
         "width":450,
         slidesPerView:2
        },
        640: {
          "width": 640,
          slidesPerView: 3,
        },
        // when window width is >= 768px
        768: {
          "width": 1068,
          slidesPerView: 4,},
      }}
      navigation
      Autoplay
      pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiper-ads"
    >
      <SwiperSlide className='swiper-slide-3'>
        <div>
          <div className='Healthvit_image'>
         <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/obsqdxfyey6qswltzhry.png'></Image>
         </div>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
    </Swiper>
            </div>
      </div>
      <div>
            <p className='Featured_Brands'>Trending now
            </p>
            <div className='Featured_Brands_swiper'>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={10}
      breakpoints={{
        // when window width is >= 640px
       450:{
         "width":450,
         slidesPerView:2
        },
        640: {
          "width": 640,
          slidesPerView: 3,
        },
        // when window width is >= 768px
        768: {
          "width": 1068,
          slidesPerView: 4,},
      }}
      navigation
      Autoplay
      pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiper-ads"
    >
      <SwiperSlide className='swiper-slide-3'>
        <div>
          <div className='Healthvit_image'>
         <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/obsqdxfyey6qswltzhry.png'></Image>
         </div>
         
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
    </Swiper>
            </div>
      </div>
      <div>
            <p className='Featured_Brands'>Shop by Health Concerns
            </p>
            <div className='Featured_Brands_swiper'>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={10}
      breakpoints={{
        // when window width is >= 640px
      0:{
        slidesPerView:1,
        spaceBetween:40
      },
       450:{
         
         slidesPerView:2,
         spaceBetween:30
        },
        640: {
          
          slidesPerView: 3,
          spaceBetween:25
        },
        // when window width is >= 768px
        768: {
          
          slidesPerView: 4,
          spaceBetween:20
        },
        900:{
          slidesPerView:6,
          spaceBetween:10
        }
      }}
      navigation
      Autoplay
      pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiper-ad"
    >
      <SwiperSlide className='swiper_slide_2'>
         <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/obsqdxfyey6qswltzhry.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zvd6zwzgmocbwjyohpfa.png"></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/sojsfqsqrtwqgdpg5jlc.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_2'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
    </Swiper>
            </div>
        </div>
        <div>
            <p className='Featured_Brands'>Deals of the day
            </p>
            <div className='Featured_Brands_swiper'>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={10}
      breakpoints={{
        // when window width is >= 640px
       450:{
         "width":450,
         slidesPerView:2
        },
        640: {
          "width": 640,
          slidesPerView: 3,
        },
        // when window width is >= 768px
        768: {
          "width": 1068,
          slidesPerView: 4,},
      }}
      navigation
      Autoplay
      pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiper-ads"
    >
      <SwiperSlide className='swiper-slide-3'>
        <div>
          <div className='Healthvit_image'>
         <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/obsqdxfyey6qswltzhry.png'></Image>
         </div>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide-3'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
        <div className='Healthvit_heading'>
             Healthvit Cenivitan Women multivitamin & multimineral
         </div>
         <Text fontSize='12px' color={'#757575'}> In love with React & Next</Text>
         <div className='card_span_star'>
            <div className='card_star_rating'>
              4.3
              <AiFillStar color='white'/>
            </div>
            7
         </div>
         <div className='card_cuttoff'>
           <Text color={'#757575'} marginRight="2px">MRP</Text>
           <span>550</span>
         </div>
         <div>
          <Heading fontSize={'16px'} marginLeft={'10px'}>426</Heading>
         </div>
      </SwiperSlide>
    </Swiper>
            </div>
      </div>
      <Accordion defaultIndex={[0]} allowMultiple width={'80%'} margin={'auto'}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Heading fontSize={"18px"}>Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and Healthcare Platform</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    
      <Heading fontSize={'16px'} marginBottom={'20px'}>We Bring Care to Health.</Heading>
      <Text>Tata 1mg is India's leading digital healthcare platform. From doctor consultations on chat to online pharmacy and lab tests at home: we have it all covered for you. Having delivered over 25 million orders in 1000+ cities till date, we are on a mission to bring "care" to "health" to give you a flawless healthcare experience.</Text><br />
      <Heading fontSize={'16px'}>Tata 1mg: Your Favourite Online Pharmacy!</Heading><br />
      <Text>Tata 1mg is India's leading online chemist with over 2 lakh medicines available at the best prices. We are your one-stop destination for other healthcare products as well, such as over the counter pharmaceuticals, healthcare devices and homeopathy and ayurveda medicines.</Text><br />
      <Text>With Tata 1mg, you can buy medicines online and get them delivered at your doorstep anywhere in India! But, is ordering medicines online a difficult process? Not at all! Simply search for the products you want to buy, add to cart and checkout. Now all you need to do is sit back as we get your order delivered to you.</Text><br />
      <Text>In case you need assistance, just give us a call and we will help you complete your order.</Text><br />
      <Text>Don't want to go through the hassle of adding each medicine separately? You can simply upload your prescription and we will place your order for you. And there is more! At Tata 1mg, you can buy health products and medicines online at best discounts.</Text><br />
      <Text>Now, isn't that easy? Why go all the way to the medicine store and wait in line, when you have Tata 1mg Pharmacy at your service.</Text><br />
      <Heading fontSize={'16px'}>The Feathers in Our Cap</Heading><br/>
      <Text>At Tata 1mg, our goal is to make healthcare understandable, accessible and affordable in India. We set out on our journey in 2015, and have come a long way since then. Along the way, we have been conferred with prestigious titles like</Text>
      <span>BML Munjal Award for 'Business Excellence through Learning and Development', Best Online Pharmacy in India Award</span><br></br><br></br>
      <Heading fontSize={'16px'}>The Services We Offer</Heading><br/>
      <Text>Tata 1mg is India's leading digital healthcare platform, where you can buy medicines online with discount. Buy medicine online in Delhi, Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata, Chennai, Ahmedabad, Lucknow and around a 1000 more cities. Besides delivering your online medicine order at your doorstep, we provide accurate, authoritative & trustworthy information on medicines and help people use their medicines effectively and safely.</Text><br />
      <Text>We also facilitate lab tests at home. You can avail over 2,000 tests and get tested by 120+ top and verified labs at the best prices. Need to consult a doctor? On our platform, you can talk to over 20 kinds of specialists in just a few clicks.</Text><br />
      <Text>Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists looks into each order to give you a fulfilling experience.</Text><br/>
      <Text>We’ve made healthcare accessible to millions by giving them quality care at affordable prices. Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists looks into each order to give you a fulfilling experience.</Text><br />
      <Text>Visit our online medical store now, and avail online medicine purchase at a discount.</Text>
      <Text>Stay Healthy!</Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<Box>
  <Heading textAlign={'center'}>
    India Largest Healthcare Platform
  </Heading>
  <Box padding={'2rem 0px'} display="flex" justifyContent={'space-around'} textAlign='center'>
     <Box fontSize={'1.7rem'} fontWeight={'bold'}>
      160+ <br/>
      <Text fontWeight={'400'} fontSize="1.2rem">
        Visitors
      </Text>
     </Box>
     <Box fontSize={'1.7rem'} fontWeight={'bold'}>
      27m+ <br/>
      <Text fontWeight={'400'} fontSize="1.2rem">
        Visitors
      </Text>
     </Box>
     <Box fontSize={'1.7rem'} fontWeight={'bold'}>
      1800+ <br/>
      <Text fontWeight={'400'} fontSize="1.2rem">
        Visitors
      </Text>
     </Box>
  </Box>
</Box>
    </div>
    </div>
  )
}

export default Home