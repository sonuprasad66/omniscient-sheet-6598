import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { Heading, Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide

} from 'swiper/react';
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
      spaceBetween={50}
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
          "width": 768,
          slidesPerView: 4,},
      }}
      navigation
      Autoplay
      pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiper-ad"
    >
      <SwiperSlide className='swiper_slide_1'>
         <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/obsqdxfyey6qswltzhry.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zvd6zwzgmocbwjyohpfa.png"></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/sojsfqsqrtwqgdpg5jlc.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
    </Swiper>
            </div>
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
       450:{
         "width":450,
         slidesPerView:2
        },
        640: {
          "width": 640,
          slidesPerView: 4,
        },
        // when window width is >= 768px
        768: {
          "width": 768,
          slidesPerView: 6,},
      }}
      navigation
      Autoplay
      pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiper-ad"
    >
      <SwiperSlide className='swiper_slide_1'>
         <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/obsqdxfyey6qswltzhry.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jvvov6ke3fbjxtxfc4mh.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zvd6zwzgmocbwjyohpfa.png"></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/sojsfqsqrtwqgdpg5jlc.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide_1'>
        <Image src='https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xo0ots8fv2ylazjd2ovb.png'></Image>
      </SwiperSlide>
    </Swiper>
            </div>
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
            <p className='Featured_Brands'>Featured Brands
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
    </div>
    </div>
  )
}

export default Home