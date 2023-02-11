import React from "react";
import InputMask from "react-input-mask";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";

const FInputMask = ({
  disabled = false,
  control,
  name,
  placeHolder,
  label,
  ...restProps
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <InputMask
          mask={`+\\9\\9\\8 99 999 99 99`}
          maskChar={null}
          required={true}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          disabled={disabled}

          // placeholder="Telefon raqamingizni kiriting"
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
              />
            );
          }}
        </InputMask>
      )}
    />
  );
};

export default FInputMask;
