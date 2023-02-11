import React from "react";
import { PlayArrowIcon } from "/public/icons/icons";

import cls from "./Youtube.module.scss";

const YoutubeContent = () => {
  return (
    <div className={cls.root}>
      <div className={cls.content}>
        <iframe src="https://www.youtube.com/embed/uXWycyeTeCs"></iframe>
      </div>
    </div>
  );
};

export default YoutubeContent;
