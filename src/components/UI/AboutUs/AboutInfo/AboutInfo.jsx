import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import cls from "./AboutInfo.module.scss";
import FacultyList from "./FacultyList/FacultyList";
import { getFacultySpeciality } from "services/facultyCost";

const AboutInfo = () => {
  const [facultyList, setfacultyList] = useState({});

  const getData = () => {
    getFacultySpeciality().then((res) => setfacultyList(res?.data));
  };

  useEffect(() => getData(), []);

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <Typography className={cls.content}>
          TTU bu zamonaviy va sifatli ta'lim kafolati. Bizning universitetda
          mavjud bo'lgan samarali o'quv dasturlari, zakovatli professorlar,
          xalqaro darajadagi metodikalar, progressiv ilmiy muhit, ilg'or
          texnologiyalar va zamonaviy sharoitlarning barchasi talabalar
          muvaffaqiyati uchun tashkillashtirilgan.
        </Typography>
        {/* <FacultyList facultyList={facultyList} /> */}
        <FacultyList facultyList={facultyList}  />
      </Container>
    </div>
  );
};

export default AboutInfo;
