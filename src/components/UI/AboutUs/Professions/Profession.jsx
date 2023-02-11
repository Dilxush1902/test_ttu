import { Box, Container } from "@mui/material";
import React from "react";
import HeadDepartment from "./HeadDepartment/HeadDepartment";
import PictureSwiper from "./PictureSwiper/PictureSwiper";
import YoutubeContent from "components/UI/Admission/AdmissionContent/YoutubeContent/YoutubeContent";
import cls from "./Profession.module.scss";
import Rector from "./Rector/Rector";
import Worker from "./Worker/Worker";

const Profession = () => {
  return (
    <div className={cls.box}>
      <Container className={cls.container}>
        <div className={cls.profession}>
          <Rector />
          <HeadDepartment />
        </div>
        <div className={cls.worker}>
          <Worker />
        </div>
        <div className={cls.swiper}>
          <PictureSwiper />
          <div className={cls.content}>
            <YoutubeContent />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profession;
