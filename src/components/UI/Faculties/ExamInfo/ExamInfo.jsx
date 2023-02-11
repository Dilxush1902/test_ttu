import { Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getFacultyById } from "services/faculty";
import cls from "./ExamInfo.module.scss";

const ExamInfo = ({ facultyItem }) => {
  function createMarkup(c) {
    return {__html: c}
  }
  return (
    <div className={cls.licence}>
      <div className={cls.box}>
        <div className={cls.text}>
          <Typography className={cls.title}>Imtihon haqida</Typography>
          <div className={cls.crosshair_top_right}></div>
          <div className={cls.crosshair_top_left}></div>
          <div className={cls.crosshair_bottom_right}></div>
          <div className={cls.crosshair_bottom_left}></div>
        </div>
        
        <div className={cls.infoList}>
          <div className={cls.infoItem} dangerouslySetInnerHTML={createMarkup(facultyItem?.exam_description)}></div>

          <div className={cls.crosshair_top_right}></div>
          <div className={cls.crosshair_top_left}></div>
          <div className={cls.crosshair_bottom_right}></div>
          <div className={cls.crosshair_bottom_left}></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ExamInfo;
