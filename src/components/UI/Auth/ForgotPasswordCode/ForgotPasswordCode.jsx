import React, { useEffect, useState } from "react";
import ReactCodeInput from "react-verification-code-input";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import CustomButton from "components/UI/Button/CustomButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
import { CircularProgress, Container, Typography } from "@mui/material";
import formatCodeExpireDuration from "utils/countDown";
import CloseIcon from "@mui/icons-material/Close";
import { Controller, useForm } from "react-hook-form";
import cls from "./ForgotPassword.module.scss";
import { retryCode } from "services/auth/retryCode";
import { registrationAuthVerify } from "services/auth/registrationCode";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useIsMobile } from "utils/getWindowSize";

const ForgotPasswordCode = ({
  handleCloseCode,
  handleOpenPhoneNumber,
  handleOpenForgetPass,
  telNumber,
}) => {
  const isMobile = useIsMobile(600);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const userId = cookies.get("userId");

  const { control, handleSubmit } = useForm();

  const acceptBtn = () => {
    router.push("/forgot-password");
  };


  const verifyCodeBtn = (data) => {
    registrationAuthVerify(
      !isMobile[0]
        ? {
            code: data?.code?.replace(/\s/g, ""),
            phone_number: telNumber.replaceAll(" ", ""),
          }
        : {
            code: data?.code?.replace(/\s/g, ""),
            phone_number: router?.query?.number.replaceAll(" ", ""),
          }
    )
      .then((res) => {
        if (res.status === 201) {
          if (!isMobile[0]) {
            // handleOpenPhoneNumber();
            handleCloseCode();
            handleOpenForgetPass();
          } else {
            router.push({
              pathname: "/forgot-password",
              query: { number: router?.query?.number },
            });
          }
        }
      })
      .catch((err) => {
        if (
          err?.data === "rpc error: code = InvalidArgument desc = INVALID OTP"
        ) {
          toast.error("SMS kod xato");
        }
      });
  };

  const retryCodeBtn = () => {
    setIsLoading(true);
    retryCode(
      !isMobile[0]
        ? {
            phone_number: telNumber.replaceAll(" ", ""),
          }
        : {
            phone_number: router?.query?.number.replaceAll(" ", ""),
          }
    )
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
    setSeconds(60);
  };

  useEffect(() => {
    let timer;
    if (seconds !== 0) {
      timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      // handleOpenPhoneNumber();
      // handleCloseCode();
      clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <div className={cls.root}>
      <ToastContainer />
      <Container className={cls.box}>
        <img
          onClick={handleCloseCode}
          className={cls.closeCode}
          src="/images/closeIcon.svg"
          alt="close"
        />
        {/* <CloseIcon className={cls.closeCode} onClick={handleCloseCode} /> */}
        <Typography className={cls.title}>Nomer tasdiqlash</Typography>
        <Typography className={cls.content}>
          {!isMobile[0] ? telNumber : router?.query?.number} raqamiga yuborilgan
          kodni tering
        </Typography>
        <form
          onSubmit={handleSubmit(seconds === 0 ? retryCodeBtn : verifyCodeBtn)}
        >
          <div className={cls.code}>
            <Controller
              control={control}
              name="code"
              render={({ field: { onChange, value } }) => (
                <ReactCodeInput
                  className={cls.inputCode}
                  fieldWidth="100%"
                  id="messageCode"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
          <Typography className={cls.time}>
            {formatCodeExpireDuration(seconds)}
          </Typography>
          <div className={cls.button}>
            <CustomButton
              className={cls.btn}
              type="submit"
              style={
                {
                  // cursor: seconds > 0 ? "not-allowed" : "",
                  // background: seconds > 0 ? "#cccccc" : "",
                }
              }
              fullWidth
            >
              {isLoading ? (
                <CircularProgress
                  sx={{
                    padding: 0,
                    margim: 0,
                    width: "20px!important",
                    height: "20px!important",
                  }}
                />
              ) : seconds === 0 ? (
                "Qayta kod yuborish"
              ) : (
                "Kirish"
              )}
            </CustomButton>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ForgotPasswordCode;
