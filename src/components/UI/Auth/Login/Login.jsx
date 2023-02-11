import React, { useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import FTextfield from "components/UI/FormElement/Input/FTextField";
import CustomButton from "components/UI/Button/CustomButton";
import { CircularProgress, Container, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import cls from "./Login.module.scss";
import FInputMask from "components/UI/FormElement/InputMask/FInputMask";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { loginAuth } from "services/auth/login";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useIsMobile } from "utils/getWindowSize";
import FPasswordTextField from "components/UI/FormElement/Input/FPasswordTextField";
import InputMaskSeria from "components/UI/FormElement/InputMask/InputMaskSeria";

const Login = ({ handleCloseLogin, handleOpenPhoneNumber }) => {
  const isMobile = useIsMobile(600);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  const { control, handleSubmit, register } = useForm();

  const forgotPasswordBtn = () => {
    if (!isMobile[0]) {
      handleCloseLogin();
      handleOpenPhoneNumber();
    } else {
      router.push("/forgot-password-phone");
    }
  };
  const loginBtn = (data) => {
    setIsLoading(true);
    loginAuth({
      ...data,
      username: data.username.replaceAll(" ", ""),
    })
      .then((res) => {
        if (res.status === 201) {
          cookie.set("userId", res?.data?.user?.id);
          setIsLoading(false);
          if (!isMobile[0]) handleCloseLogin();
          router.push("/personal");
        }
      })
      .catch((err) => {
        if (
          err?.data ===
          "rpc error: code = InvalidArgument desc = invalid password"
        ) {
          toast.error("Iltimos parolni 6 simboldan ko'p kiriting");
        }

        if (
          err?.data ===
          "rpc error: code = InvalidArgument desc = password is wrong"
        ) {
          toast.error("Parol noto'g'ri");
        }

        if (
          err?.data ===
          "rpc error: code = InvalidArgument desc = invalid username"
        ) {
          toast.error("Bunday raqam ro'yxatda yo'q");
        }

        setIsLoading(false);
      });
  };

  return (
    <div className={cls.login}>
      <ToastContainer />
      <Container className={cls.box}>
        <img
          onClick={handleCloseLogin}
          className={cls.closeLoginBtn}
          src="/images/closeIcon.svg"
          alt="close"
        />
        {/* <CloseIcon className={cls.closeLoginBtn} onClick={handleCloseLogin} /> */}
        <Typography className={cls.title}>Saytga kirish</Typography>
        <form onSubmit={handleSubmit(loginBtn)} className={cls.form}>
          <div className={cls.info}>
            <div className={cls.inputMask}>
              <InputMaskSeria
                label="Telefon Raqam"
                name="username"
                control={control}
                fullWidth
                placeHolder="+998 "
                mask={`+\\9\\9\\8 99 999 99 99`}
                className={cls.phone}
                typeForTextfield={"tel"}
                required
              />
            </div>
            <FPasswordTextField
              control={control}
              name="password"
              label="Parol qaytadan"
            />
          </div>
          <div className={cls.button}>
            <div className={cls.appButton}>
              <CustomButton type="submit" className={cls.btn} fullWidth>
                {isLoading ? (
                  <CircularProgress
                    sx={{
                      padding: 0,
                      margim: 0,
                      width: "20px!important",
                      height: "20px!important",
                    }}
                  />
                ) : (
                  "Kirish"
                )}
              </CustomButton>
            </div>
            <Typography
              onClick={forgotPasswordBtn}
              className={cls.forgetPssword}
              cursor="pointer"
            >
              <span>Parolni esdan chiqardim</span>
              <ArrowForwardIcon
                sx={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </Typography>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;
