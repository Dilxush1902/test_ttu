import React from "react";
import { Typography } from "@mui/material";
import cls from "./FacultyInfo.module.scss";

const FacultyInfo = ({ facultyItem }) => {
  return (
    <div className={cls.info}>
      <div className={cls.box}>
        <Typography className={cls.content}>
          {facultyItem?.description_uz}
        </Typography>
        {facultyItem?.specialities &&
          facultyItem?.specialities.map((item) => (
            <ul className={cls.list} key={item.id}>
              <li className={cls.listItem}>
                <Typography className={cls.textTitle}>
                  {item?.name_uz}
                </Typography>
              </li>
              <li className={cls.listItem}>
                {item?.course_deadline >= 1 && item?.price_daytime >= 1 ? (
                  <Typography className={cls.text}>
                    <span>
                      Kunduzgi{" "}
                      {item?.course_deadline ? item?.course_deadline : "-"} yil
                    </span>{" "}
                    <br></br>
                    {item?.price_daytime
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                  </Typography>
                ) : (
                  <Typography className={cls.noText}>-</Typography>
                )}
              </li>
              <li className={cls.listItem}>
                {item?.course_deadline_external >= 1 &&
                item?.price_external >= 1 ? (
                  <Typography className={cls.text}>
                    <span>
                      Sirtqi{" "}
                      {item?.course_deadline_external
                        ? item?.course_deadline_external
                        : "-"}{" "}
                      yil
                    </span>{" "}
                    <br></br>
                    {item?.price_external
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                  </Typography>
                ) : (
                  <Typography className={cls.noText}>-</Typography>
                )}
              </li>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </ul>
          ))}
      </div>
      <div className={cls.crosshair_top_right}></div>
      <div className={cls.crosshair_top_left}></div>
      <div className={cls.crosshair_bottom_right}></div>
      <div className={cls.crosshair_bottom_left}></div>
    </div>
  );
};

export default FacultyInfo;
