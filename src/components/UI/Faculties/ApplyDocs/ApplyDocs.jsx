import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { getFacultyById } from "services/faculty";
import cls from "./ApplyDocs.module.scss";

const ApplyDocs = ({ facultyItem }) => {
  function createMarkup(c) {
    return {__html: c}
  }
  return (
    <div className={cls.apply}>
      <div className={cls.box}>
        <div className={cls.deadline}>
          <Typography className={cls.title}>Qabul Muddati</Typography>
          <Typography className={cls.content}>
          <div className={cls.infoItem} dangerouslySetInnerHTML={createMarkup(facultyItem?.visiting_month)}></div>
          </Typography>
        </div>

        <div className={cls.docs}>
          <Typography className={cls.title}>Kerakli hujjatlar</Typography>
          <div className={cls.docList}>
            <div className={cls.list}>
            <div className={cls.listItem} dangerouslySetInnerHTML={createMarkup(facultyItem?.document_info)}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyDocs;
