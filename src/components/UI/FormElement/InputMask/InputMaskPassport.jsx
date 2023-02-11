import React from "react";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";

const InputMaskPassport = ({
  disabled = false,
  control,
  name,
  placeHolder,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      label={placeHolder}
      render={({ field: { onChange, value } }) => (
        <InputMask
          mask={`999 99 99`}
          maskChar={null}
          required={true}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          // placeholder="Telefon raqamingizni kiriting"
        />
      )}
    />
  );
};

export default InputMaskPassport;
