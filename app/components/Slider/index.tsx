"use client";

import { type FC, type ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import { Pagination, FreeMode, Mousewheel, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css"; 
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

export interface HorizontalSliderProps extends SwiperOptions { 
  slides: {
    _id: string;
    element: ReactElement;
  }[];
}

export const HorizontalSlider: FC<HorizontalSliderProps> = ({
  slides,
  ...props
}) => {
  return (
    Boolean(slides) && (
      <Swiper
        modules={[Pagination, FreeMode, Mousewheel, Navigation, Autoplay]} 
        {...props}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            aria-label={`${index + 1} of ${slides.length}`}
            key={slide._id}
            tag="li"
          >
            {slide.element}
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
};
