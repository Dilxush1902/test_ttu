import { Typography } from "@mui/material";
import CustomButton from "components/UI/Button/CustomButton";
import React from "react";
import cls from "./LogOut.module.scss";

const LogOut = ({ handleClose, logOut }) => {
  return (
    <div className={cls.box}>
      <div className={cls.image}>
        <img src="/images/cabineImage/exitIcon.svg" alt="" />
      </div>
      <div className={cls.content}>
        <Typography className={cls.text}>
          Kabinetdan chiqmoqchimisiz?
        </Typography>
      </div>
      <div className={cls.button}>
        <CustomButton onClick={handleClose} className={cls.cencelBtn}>
          Yo'q
        </CustomButton>
        <CustomButton onClick={logOut} className={cls.acceptBtn}>
          Chiqish
        </CustomButton>
      </div>
    </div>
  );
};

export default LogOut;
