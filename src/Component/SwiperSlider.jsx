import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import {
  EffectCoverflow,
  Pagination,
  Keyboard,
  Autoplay,
} from 'swiper/modules';
import { myProjects } from '../data';

const SwiperSlider = () => {
  return (
    <Wrapper>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={50}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        modules={[EffectCoverflow, Pagination, Keyboard, Autoplay]}
        className='mySwiper'
      >
        {myProjects.map((curElem, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='box'>
                <h3>{curElem.title}</h3>
                <img src={curElem.img} alt={curElem.id} />
                <div className='hover-effect'>
                  <div className='button-group '>
                    <a
                      href={curElem.link}
                      className='btn btn-light'
                      target='blank'
                    >
                      Live Link
                    </a>
                    <a
                      href={curElem.sourceCode}
                      className='btn btn-light'
                      target='blank'
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .mySwiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

    .swiper-slide {
      background-position: center;
      background-size: contain;
      width: 30%;
      height: 650px;
      border-radius: 10px;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 0 20px -10px #333;
      @media (max-width: 768px) {
        width: 60%;
      }
      .box {
        height: 650px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        h3 {
          width: 100%;
          background: linear-gradient(
            to right,
            #baffe8ff 0%,
            #80ffd5ff 50%,
            #baffe8ff 100%
          );
          font-size: 20px;
          font-weight: 600;
          padding: 15px;
          text-transform: capitalize;
          text-align: center;
          border-radius: 10px;
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          box-shadow: 0 0 20px -10px #333;
        }
        .hover-effect {
          width: 100%;
          height: 100%;
          position: absolute;
          bottom: -15px !important;
          left: 0;
          background: linear-gradient(to top, #22ffb5b5 0%, #ffffff00 40%);
          opacity: 0;
          transition: all 0.4s linear;
          .button-group {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: end;
            padding-bottom: 50px;
          }
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
`;
export default SwiperSlider;
