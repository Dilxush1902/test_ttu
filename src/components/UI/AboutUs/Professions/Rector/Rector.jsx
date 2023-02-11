import React from "react";
import { Container, Typography } from "@mui/material";
import cls from "./Rector.module.scss";

const Rector = () => {
  return (
    <div className={cls.box}>
      <Container className={cls.container}>
        <div className={cls.text}>
          <div className={cls.name}>
            <Typography className={cls.title}>Abdullajanov Azimjon</Typography>
            <Typography className={cls.rector}>Rektor</Typography>
          </div>

          <img src="/images/aboutImage/rector.png" alt="" />
          <div className={cls.crosshair_top_right}></div>
          <div className={cls.crosshair_top_left}></div>
          <div className={cls.crosshair_bottom_right}></div>
          <div className={cls.crosshair_bottom_left}></div>
        </div>
        <div className={cls.info}>
          <Typography className={cls.content}>
            O’zbekiston Respublikasi Vazirlar mahkamasi huzuridagi Davlat test
            markazi bo’lim boshlig’i, Oliy va o’rta mahsus ta’lim vazirligi bosh
            boshqarma boshlig’i o’rinbosari, S.X.Sirojiddinov nomidagi
            Respublika akademik litsey direktori.
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

export default Rector;
