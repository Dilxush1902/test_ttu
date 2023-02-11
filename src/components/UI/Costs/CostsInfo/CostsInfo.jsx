import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import cls from "./CostsInfo.module.scss";
import AccordionView from "./Accordion/AccordionView";

const CostsInfo = () => {
  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <div className={cls.crosshair_top_right}></div>
        <div className={cls.crosshair_top_left}></div>
        <div className={cls.crosshair_bottom_right}></div>
        <div className={cls.crosshair_bottom_left}></div>
        <AccordionView />

        <div className={cls.eduContent}>
          <div className={cls.edu}>
            <p className={cls.eduTitle}>Ta’lim krediti</p>
          </div>
          <div className={cls.eduInfo}>
            <p className={cls.infoTitle}>
              Hohlagan bank orqali ta'lim krediti olishingiz mumkin. Buning
              uchun kerak bo'ladigan hujjatlar:
            </p>
            <ul>
              <li>Ariza</li>
              <li>Pasport yoki ID </li>
              <li>To'lov kontrakti shartnomas</li>
              <li>Kredit qaytarilishi ta'minoti</li>
              <li>
                Kafil va birgalikda qarz oluvchilarning - kredit siyosatida
                belgilangan hujjatlari
              </li>
            </ul>
            <p className={cls.infoTitle}>Afzalliklari:</p>
            <ul>
              <li>
                Kreditning asosiy qismi o'qish tugagandan so'ng 7- oydan boshlab
                7 yil davomida qaytariladi
              </li>
              <li>
                Kredit foizi Markaziy Bank asosiy stavkasiga teng. Kelajakda
                stavka tushsa, foizlar tushadi, lekin stavka ko'tarilsa, foizlar
                o'zgarmaydi.
              </li>
              <li>
                Xotin qiz talabalar uchun foiz stavkasi 0%. Foiz davlat
                tomonidan qoplanadi.
              </li>
            </ul>
          </div>
        </div>
        {/* <div className={cls.space}></div> */}
      </Container>
    </div>
  );
};

export default CostsInfo;
