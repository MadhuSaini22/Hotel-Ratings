import React, { useCallback, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";
import { hotelData } from "@/constants";
import { Navigation } from "swiper";
export default function AppSwiper({ data }) {
 
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {hotelData.map((hotel) => (
          <div key={hotel.id}>
            <SwiperSlide>
              <Card hotel={hotel} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
