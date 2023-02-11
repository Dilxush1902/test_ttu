import React from "react";
import { Container, Typography } from "@mui/material";
import cls from "./Licence.module.scss";

const Licence = () => {
  return (
    <div className={cls.licence}>
      <Container className={cls.box}>
        <div className={cls.text}>
          <Typography className={cls.title}>Litsenziya</Typography>
          <div className={cls.crosshair_top_right}></div>
          <div className={cls.crosshair_top_left}></div>
          <div className={cls.crosshair_bottom_right}></div>
          <div className={cls.crosshair_bottom_left}></div>
        </div>
        <div className={cls.info}>
          <Typography className={cls.content}>
            Toshkent Texnologiyalar Universiteti O'zbekiston Respublikasi
            Vazirlar Mahkamasi huzuridagi Ta'lim sifatini nazorat qilish davlat
            inspeksiyasi tomonidan 2022 yil 19 dekabrda berilgan N12345-sonli
            davlat litsenziyaga asosan faoliyat ko'rsatadi. O'zbekiston
            Respublikasi "Ta'lim to'g'risida"gi qonunining 31-moddasiga muvofiq
            TTU bitiruvchilariga davlat tomonidan tasdiqlangan Diplom beriladi.
          </Typography>
          <Typography className={cls.downloadLicence}>
            <img
              src="/images/cabineImage/downloadIcon.png"
              className={cls.icon}
              alt=""
            />
            <span>Litsenziya yuklab olish</span>
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

export default Licence;
