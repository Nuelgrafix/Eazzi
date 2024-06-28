
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
import image6 from "../assets/mobswip1.png";
import image7 from "../assets/mobswip2.jpeg";
import image8 from "../assets/mobswip3.jpeg";

const HeroSwiper = () => {
  return (
    <>
      {/* MOBILE */}
      <div className="w-full sm:hidden flex-col items-center mt-[4.5rem] px-[14px] mb-10">
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-paginationf",
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bulletf"></span>`;
            },
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 2000, // Adjust delay as needed
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper w-full rounded-[10px]"
        >
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image6}
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image7}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image8}
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image6}
                alt="Slide 4"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image6}
                alt="Slide 5"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="custom-paginationf mt-4 flex justify-center"></div>
      </div>

      <div className="w-full hidden sm:flex lg:hidden flex-col items-center mt-[4.5rem] px-[14px] mb-10 ">
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-paginationg",
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bulletg"></span>`;
            },
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 2000, // Adjust delay as needed
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper w-full rounded-[10px] "
        >
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image1}
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image2}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image3}
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image4}
                alt="Slide 4"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image5}
                alt="Slide 5"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="custom-paginationg mt-4 flex justify-center"></div>
      </div>

      {/* DESKTOP */}
      <div className="hidden w-[830px] lg:flex flex-col items-center mt-5 -z-50">
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
            delay: 2000, // Adjust delay as needed
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image1}
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image2}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image3}
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image4}
                alt="Slide 4"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content w-full h-full">
              <img
                src={image5}
                alt="Slide 5"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>
    </>
  );
};

export default HeroSwiper;
