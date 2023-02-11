import React, { useState, useEffect } from 'react'
import { Container, Typography } from '@mui/material'
import cls from './AboutUs.module.scss'
import FacultyList from './FacultyList/FacultyList'
import { getFacultySpeciality } from 'services/facultyCost'

const AboutUs = () => {
  const [facultyList, setfacultyList] = useState({})

  const getData = () => {
    getFacultySpeciality().then((res) => setfacultyList(res?.data))
  }

  useEffect(() => getData(), [])
  return (
    <div className={cls.about}>
      <Container className={cls.container}>
        <div className={cls.info}>
          {/* <Typography className={cls.title}>Biz haqimizda</Typography> */}
          <Typography className={cls.content}>
            TTU bu zamonaviy va sifatli ta'lim kafolati. Bizning universitetda
            mavjud bo'lgan samarali o'quv dasturlari, zakovatli professorlar,
            xalqaro darajadagi metodikalar, progressiv ilmiy muhit, ilg'or
            texnologiyalar va zamonaviy sharoitlarning barchasi talabalar
            muvaffaqiyati uchun tashkillashtirilgan.
          </Typography>
          <img src='/images/admission.png' alt='' />
        </div>

        <FacultyList facultyList={facultyList}/>

        {/* <div className={cls.button}>
          <CustomButton fullWidth>Ariza qoldirish</CustomButton>
        </div> */}
      </Container>
    </div>
  )
}

export default AboutUs
