import React from "react";
import { Container, Typography } from "@mui/material";
import cls from "./HeadDepartment.module.scss";

const HeadDepartment = () => {
  return (
    <div className={cls.box}>
      <Container className={cls.container}>
        <div className={cls.text}>
          <div className={cls.name}>
            <Typography className={cls.title}>Zokirov Kamoliddin</Typography>
            <Typography className={cls.rector}>Bo’lim boshlig’i</Typography>
          </div>

          <img src="/images/aboutImage/lead.png" alt="" />
          <div className={cls.crosshair_top_right}></div>
          <div className={cls.crosshair_top_left}></div>
          <div className={cls.crosshair_bottom_right}></div>
          <div className={cls.crosshair_bottom_left}></div>
        </div>
        <div className={cls.info}>
          <Typography className={cls.content}>
            Cornell University, International Monetary Fund Institute, Centil
            Advisory, Colibri Law Firm, Westminster International University in
            Tashkent
          </Typography>
          <div className={cls.crosshair_top_right}></div>
          <div className={cls.crosshair_top_left}></div>
          <div className={cls.crosshair_bottom_right}></div>
          <div className={cls.crosshair_bottom_left}></div>
        </div>
      </Container>
    </div>
  );
};

export default HeadDepartment;
