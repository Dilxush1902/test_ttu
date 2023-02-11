import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";

const InputMaskSeria = ({
  disabled = false,
  name,
  control,
  mask = "aa",
  className = "",
  type = "text",
  label,
  typeForTextfield,
  ...restProps

}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <InputMask
          {...field}
          disabled={disabled}
          mask={mask}
          maskChar={null}
          type={type}
        >
          {(inputProps) => {
            return (
              <TextField
                {...inputProps}
                {...restProps}
                InputLabelProps={disabled ? { shrink: true } : {}}
                className={className}
                disabled={disabled}
                label={label}
                value={field.value}
                type={typeForTextfield}
                autoComplete="off"
              />
            );
          }}
        </InputMask>
      )}
    />
  );
};

export default InputMaskSeria;
