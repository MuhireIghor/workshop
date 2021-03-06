import React from 'react';
import { useNav } from './context/useNav';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "./css/styles.css";
import { EffectCube, Navigation, Pagination, Autoplay, Lazy } from 'swiper';
import Fade from 'react-reveal/Fade';
import { data } from './Imageslider';

console.log(data);
function Body() {
  const bodyRef = useNav('Home');
  return (
    <section ref={bodyRef} id='homeCont' className=' flex flex-col justify-center items-center w-screen h-screen py-2  '>
      <Swiper className='swiper' effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 90,
          shadowScale: 0.80,
          autoplay: true,
          loop: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }
        }
        pagination={{
          dynamicBullets: true
        }}
        modules={[EffectCube, Pagination, Autoplay]}
        loop={true}

      >
        <SwiperSlide className='swiper-slide bg-[url("Images/pic.jpg")] bg-contain bg-no-repeat bg-center bg-cover'>
          <Fade left duration={3000}>
            <div className="text flex flex-col" >
              <p className='text-white text-3xl font-semibold'>Hope Shop stores</p>
              <p className='text-white text-2xl font-lightweight'>Kwambara Neza kwawe Ni Ishema Ryacu</p>
            </div>
          </Fade>
        </SwiperSlide>

        <SwiperSlide className='swipper-slide bg-[url("Images/Ppic.jpg")] object-scale-down bg-center bg-contain'>
          <Fade right duration={10000}>
            <div className="text flex flex-col w-1/2" >
              <p className='text-white text-3xl font-semibold'> Welcome on Hope Shop stores sisters</p>
              <p className='text-white text-2xl font-lightweight'>Get all dream Clothes and at a low Price only at HOPE STORES</p>
            </div>
          </Fade>
        </SwiperSlide>
        <SwiperSlide className='swipper-slide bg-[url("Images/pic2.jpg")]'>
          <Fade duration={60000} >
            <div className="text flex flex-col w-1/2" >
              <p className='text-white text-3xl font-semibold'> Get Started with Hope Shop stores</p>
              <p className='text-white text-2xl font-lightweight'>Get started with out App</p>
            </div>
          </Fade>
        </SwiperSlide>
      </Swiper>
      <div className="about">
      </div>
    </section>
  )
}
export default Body;
