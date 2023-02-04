// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Pagination } from "swiper";
//
import slider from "../../assets/images/slider/slider1.png";

export default function HeroSlider() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={slider} alt="slider" className="h-full w-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider} alt="slider" className="h-full w-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider} alt="slider" className="h-full w-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider} alt="slider" className="h-full w-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider} alt="slider" className="h-full w-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}
