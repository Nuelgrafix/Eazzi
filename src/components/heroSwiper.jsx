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
    <div className="w-[975px] pt-[27px] pr-[9rem] relative">
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
          delay: 400, // Adjust delay as needed
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src={image1} alt="Slide 1" className="image-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src={image2} alt="Slide 2" className="image-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src={image3} alt="Slide 3" className="image-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src={image4} alt="Slide 4" className="image-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src={image5} alt="Slide 5" className="image-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Custom Pagination */}
      <div className="custom-pagination mt-4 flex justify-center"></div>
    </div>
  );
};

export default HeroSwiper;
