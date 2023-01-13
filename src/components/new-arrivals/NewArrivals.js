import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

import { Layout as L } from "../layout/Layout";

export default function NewArrivals() {
  return (
    <div className="bg-alice-blue">
      <L.Fluid>
        <L.Container>
          <div className="flex justify-between">
            <L.Title className="text-start">New Arrivals</L.Title>
            <L.Desc className="text-end">
              <a href="/new-arrivals" className="hover:underline">
                View all
              </a>
            </L.Desc>
          </div>
          <div className="bg-white rounded-xl p-5 flex justify-center gap-5 overflow-x-auto">
            <Swiper
              slidesPerView={5}
              Navigation={true}
              spaceBetween={20}
              freeMode={true}
              modules={[Navigation, FreeMode]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
            </Swiper>
          </div>
        </L.Container>
      </L.Fluid>
    </div>
  );
}

export const Card = ({ href = "/" }) => (
  <a
    href={href}
    className="flex flex-col items-start bg-white max-w-[290px] w-56"
  >
    <div className="flex items-center w-full aspect-square bg-alice-blue rounded-xl overflow-hidden"></div>
    <div className="flex flex-col p-4 text-start">
      <div className="lg:text-lg font-medium text-navy">Product Name</div>
      <div className="font-medium text-red-700">$399.00</div>
    </div>
  </a>
);
