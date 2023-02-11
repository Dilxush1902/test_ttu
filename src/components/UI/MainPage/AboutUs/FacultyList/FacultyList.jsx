import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import cls from "./FacultyList.module.scss";

const FacultyList = ({ facultyList }) => {
  const router = useRouter();
  return (
    <div className={cls.root}>
      {facultyList &&
        facultyList?.facultyWithSpecialities?.map((item) => (
          <div className={cls.card} key={item.id}>
            <div
              className={cls.image}
              onClick={() => {
                router.push(`/faculty/${item.id}`);
              }}
            >
              <img
                src={process.env.NEXT_PUBLIC_BASE_CDN_URL + item.image_url}
                alt=""
              />
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
            <div className={cls.faculties}>
              <ul className={cls.list}>
                {item?.specialities?.map((listItem, idx) => (
                  <li className={cls.listItem} key={idx}>
                    <Typography className={cls.text}>
                      {listItem.name_uz}
                    </Typography>
                  </li>
                ))}
              </ul>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FacultyList;
