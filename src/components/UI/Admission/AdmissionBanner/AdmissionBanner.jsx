import { Typography } from "@mui/material";
import { Header } from "components/UI/Header/Header";
import React, { useState } from "react";
import cls from "./AdmissionBanner.module.scss";

const AdmissionBanner = () => {
  const [loadImg, setLoadImg] = useState(false);

  return (
    <div className={cls.main}>
      <div className={cls.image}>
        <img
          src="/images/admissionImage/bannerImage.png"
          style={loadImg ? {} : { display: "none" }}
          onLoad={() => setLoadImg(true)}
          className={cls.loadImage}
        />
      </div>

      <div className={cls.banner}>
        <div className={cls.header}>
          <Header />
        </div>
        <div className={cls.text}>
          <Typography className={cls.title}>Qabul jarayoni</Typography>
        </div>
        {loadImg && (
          <div className={cls.list}>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right1}></div>
              <div className={cls.crosshair_top_left1}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right1}></div>
              <div className={cls.crosshair_top_left1}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right1}></div>
              <div className={cls.crosshair_top_left1}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.listItem}>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmissionBanner;
