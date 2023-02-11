import { TextField } from "@mui/material";
import React from "react";
import cls from "./FTextField.module.scss";

const FTextfield = ({
  label,
  type = "",
  value,
  size = "small",
  innerPlaceholder,
  className = "",
  fullWidth,
  name,
  middleWidth,
  placeHolder,
  register = () => ({}),
  required = false,
  inputProps,
  disabled = false,
  stepLabel,
  ...restProps
}) => {
  return (
    <div className={`${cls.inputLabel} ${stepLabel ? cls.stepLabel : ""}`}>
      <TextField
        {...restProps}
        type={type}
        value={value}
        className={`${cls.input} ${className} ${
          fullWidth ? cls.fullWidth : ""
        } ${middleWidth ? cls.middleWidth : ""}`}
        {...register(name)}
        variant="outlined"
        required={true}
        label={placeHolder}
        placeholder={innerPlaceholder}
        inputProps={inputProps}
        disabled={disabled}
        autoComplete="off"
        sx={{ position: "relative" }}
      />
    </div>
  );
};

export default FTextfield;
