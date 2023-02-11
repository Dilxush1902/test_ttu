import React from "react";
import cls from "./CustomButton.module.scss";

const CustomButton = ({
  type = "button",
  size = "small",
  className = "",
  children,
  fullWidth,
  ...restProps
}) => {
  return (
    <button
      className={`${cls.button} ${className} ${
        fullWidth ? cls.fullWidth : ""
      } ${cls[size]}`}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
