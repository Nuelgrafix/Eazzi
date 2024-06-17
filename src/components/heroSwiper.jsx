import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Import your images
import image1 from "../assets/swip1.png";
import image2 from "../assets/swip2.png";
import image3 from "../assets/swip3.png";
import image4 from "../assets/swip4.png";
import image5 from "../assets/swip5.png";

const HeroSwiper = () => {
  return (
    <>
      <div className="w-[830px] flex flex-col items-start flex-shrink-0 pt-[27px] -z-50">
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 300, // Adjust delay as needed
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper h-[425px] w-full"
        >
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img src={image1} alt="Slide 1" className="h-[425px] w-[973px]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img src={image2} alt="Slide 2" className="h-[425px] w-[973px]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img src={image3} alt="Slide 3" className="h-[425px] w-[973px]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img src={image4} alt="Slide 4" className="h-[425px] w-[973px]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img src={image5} alt="Slide 5" className="h-[425px] w-[973px]" />
            </div>
          </SwiperSlide>
          {/* Custom Pagination */}
        </Swiper>
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>
    </>
  );
};

export default HeroSwiper;
