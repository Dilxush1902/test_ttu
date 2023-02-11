import { Typography } from "@mui/material";
import React from "react";
import cls from "./CardContent.module.scss";

const CardContent = ({ number, text }) => {
  return (
    <div className={cls.card}>
      <Typography className={cls.number}>
        <span>{number}</span>
      </Typography>
      <Typography className={cls.content}>{text}</Typography>
      <div className={cls.crosshair_top_right}></div>
      <div className={cls.crosshair_top_left}></div>
      <div className={cls.crosshair_bottom_right}></div>
      <div className={cls.crosshair_bottom_left}></div>
    </div>
  );
};

export default CardContent;
