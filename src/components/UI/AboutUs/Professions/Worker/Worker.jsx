import React from "react";
import { Container, Typography } from "@mui/material";
import cls from "./Worker.module.scss";

const Worker = () => {
  return (
    <div className={cls.worker}>
      <Container className={cls.container}>
        <div className={cls.rector}>
          <img src="/images/aboutImage/rectorDesktop.png" alt="" />
          <div className={cls.name}>
            <Typography className={cls.title}>Abdullajanov Azimjon</Typography>
            <Typography className={cls.rectorPosition}>Rektor</Typography>
          </div>
          <div className={cls.info}>
            <Typography className={cls.content}>
              O’zbekiston Respublikasi Vazirlar mahkamasi huzuridagi Davlat test
              markazi bo’lim boshlig’i, Oliy va o’rta mahsus ta’lim vazirligi
              bosh boshqarma boshlig’i o’rinbosari, S.X.Sirojiddinov nomidagi
              Respublika akademik litsey direktori.
            </Typography>
          </div>
        </div>
        <div className={cls.headDepartment}>
          <img src="/images/aboutImage/leadDesktop.png" alt="" />
          <div className={cls.name}>
            <Typography className={cls.title}>Zokirov Kamoliddin</Typography>
            <Typography className={cls.rectorPosition}>
              Bo’lim boshlig’i
            </Typography>
          </div>
          <div className={cls.info}>
            <Typography className={cls.content}>
              Cornell University, International Monetary Fund Institute, Centil
              Advisory, Colibri Law Firm, Westminster International University
              in Tashkent
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Worker;
