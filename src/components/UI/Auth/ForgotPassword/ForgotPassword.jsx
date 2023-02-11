import React, { useRef, useState } from "react";
import { Container, InputAdornment, Typography } from "@mui/material";
import FTextfield from "components/UI/FormElement/Input/FTextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import cls from "./ForgotPassword.module.scss";
import CustomButton from "components/UI/Button/CustomButton";
import { useForm } from "react-hook-form";
import { resetPassword } from "services/auth/resetPassword";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useRouter } from "next/router";
import { useIsMobile } from "utils/getWindowSize";
import FPasswordTextField from "components/UI/FormElement/Input/FPasswordTextField";

const ForgotPassword = ({
  handleOpenLogin,
  handleCloseForgetPass,
  telNumber,
}) => {
  const isMobile = useIsMobile(600);
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  const schema = yup.object().shape({
    password: yup.string().required(),
    confirmPwd: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Parol mos emas"),
  });

  const formOptions = { resolver: yupResolver(schema) };
  const { control, handleSubmit, register, formState } = useForm(formOptions);
  const { errors } = formState;

  const resetPasswordBtn = (data) => {
    resetPassword(
      !isMobile[0]
        ? {
            user_id: telNumber.replaceAll(" ", ""),
            password: data?.password,
            platform_id: "7d4a4c38-dd84-4902-b744-0488b80a4c02",
          }
        : {
            user_id: router?.query?.number.replaceAll(" ", ""),
            password: data?.password,
            platform_id: "7d4a4c38-dd84-4902-b744-0488b80a4c02",
          }
    )
      .then((res) => {
        if (res.status === 200) {
          if (!isMobile[0]) {
            handleCloseForgetPass();
            handleOpenLogin();
          } else {
            router.push("/login");
          }

          toast.success("Parol yangilandi");
        }
      })
      .catch((err) => {
        if (
          err?.response?.data?.data ===
          "rpc error: code = Unknown desc = password must not be less than 6 characters"
        )
          toast.error("Iltimos parolni 6 simboldan ko'p kiriting");
      });
  };

  return (
    <div className={cls.root}>
      <ToastContainer />
      <Container className={cls.box}>
        <Typography className={cls.title}>Parolni yangilang</Typography>
        <form onSubmit={handleSubmit(resetPasswordBtn)}>
          <div className={cls.password}>
            <FPasswordTextField
              control={control}
              name="password"
              label="Parol qaytadan"
            />
          </div>
          <div className={cls.retryPassword}>
            <FPasswordTextField
              control={control}
              name="confirmPwd"
              label="Parol qaytadan"
            />

            <p style={{ color: "red" }}>{errors?.confirmPwd?.message ? "Parolni tasdiqlang" : errors?.confirmPwd?.message}</p>
          </div>
          <div className={cls.button}>
            <CustomButton type="submit" className={cls.btn} fullWidth>
              Saytga kirish
            </CustomButton>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ForgotPassword;
