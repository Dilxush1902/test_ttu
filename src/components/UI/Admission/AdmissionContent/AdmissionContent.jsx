import React from "react";
import CardContent from "./CardContent/CardContent";
import YoutubeContent from "./YoutubeContent/YoutubeContent";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import cls from "./AdmissionContent.module.scss";

const AdmissionContent = () => {
  const card = [
    {
      number: "1",
      text: "TTU kabinetida ro'yhatdan o'tish va qabul uchun abiturient arizasini to'ldirish.",
    },
    {
      number: "2",
      text: "DTM testidan 60 baldan ko'proq olganlik haqida hujjat taqdim etish, yokiTTU maxsus imtihonlarini topshirish.",
    },
    {
      number: "3",
      text: "Talabalikka tavsiya etilganingizdan so'ng shartnomani yuklab olib to'lovni oshirish.",
    },
  ];
  const SwiperButtons = ({ children }) => {
    const swiper = useSwiper();
    return (
      <div className={cls.swiperButtons}>
        <button
          onClick={() => swiper.slidePrev()}
          className={cls.swiper_button_prev}
        >
          <NavigateBeforeIcon
            sx={{
              color: "#84919A!important",
              "&:hover": { color: "#333333!important" },
            }}
          />
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className={cls.swiper_button_next}
        >
          {" "}
          <NavigateNextIcon
            sx={{
              color: "#84919A!important",
              "&:hover": { color: "#333333!important" },
            }}
          />
        </button>
      </div>
    );
  };
  return (
    <div className={cls.card}>
      <div className={cls.cardContent}>
        {card.map((item, index) => (
          <CardContent key={item.id} number={item.number} text={item.text} />
        ))}
      </div>
      <div className={cls.root}>
        <div className={cls.crosshair_top_right}></div>
        <div className={cls.crosshair_top_left}></div>
        <div className={cls.crosshair_bottom_right}></div>
        <div className={cls.crosshair_bottom_left}></div>
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          // onSlideChange={(slideIndex) => setActiveSlide(slideIndex.realIndex)}
          modules={[Pagination]}
          spaceBetween={24}
          className="mySwiper"
          // grabCursor={true}
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          <SwiperSlide>
            <img
              src="/images/aboutImage/image.png"
              height="364px"
              width="100%"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/aboutImage/image.png"
              height="364px"
              width="100%"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/aboutImage/image.png"
              height="364px"
              width="100%"
              alt=""
            />
          </SwiperSlide>

          <div className={cls.swiperButton}>
            <SwiperButtons />
          </div>
        </Swiper>
      </div>
      <YoutubeContent />
    </div>
  );
};

export default AdmissionContent;
