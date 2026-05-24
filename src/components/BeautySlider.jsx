import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function BeautySlider() {
  const images = [
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1000",

    "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1000",

    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000",

    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1000",
  ];

  return (
    <div className="mt-20">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-[30px]">
              <img
                src={img}
                loading="lazy"
                alt="Beauty"
                className="w-full h-80 md:h-96 object-cover hover:scale-110 duration-700"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BeautySlider;
