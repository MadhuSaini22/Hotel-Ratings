import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import Card from "./Card";
import { hotelData } from "@/constants";
import AppSwiper from "./AppSwiper";

export default function Popular() {
     const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
       <AppSwiper setActiveIndex={setActiveIndex}/>
      </Swiper>
    </div>
  );
}
