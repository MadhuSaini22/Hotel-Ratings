import React, { useState } from "react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import AppSwiper from "./AppSwiper";
import Heading from "./Heading";

export default function Popular() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="mb-16">
      <Heading heading={"Top destinations for your next vacation"} />
      <AppSwiper setActiveIndex={setActiveIndex} />
    </div>
  );
}
