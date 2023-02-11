import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Checkbox, InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const FPasswordTextField = ({
  control,
  name,
  disabledHelperText,
  InputProps,
  register,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Controller
      name={name || ""}
      control={control || controlDemo}
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => (
        <TextField
          value={value}
          name={name}
          onChange={onChange}
          type={isPasswordVisible ? "text" : "password"}
          InputProps={{
            ...InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <Checkbox
                  icon={<VisibilityOff />}
                  checkedIcon={<Visibility />}
                  checked={isPasswordVisible}
                  onChange={(e) => setIsPasswordVisible(e.target.checked)}
                />
              </InputAdornment>
            ),
          }}
          {...props}
        />
      )}
    />
  );
};

export default FPasswordTextField;
