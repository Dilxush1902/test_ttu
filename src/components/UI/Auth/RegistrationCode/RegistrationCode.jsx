import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactCodeInput from "react-verification-code-input";
import { CircularProgress, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
import cls from "./RegistrationCode.module.scss";
import CustomButton from "components/UI/Button/CustomButton";
import { Controller, useForm } from "react-hook-form";
import formatCodeExpireDuration from "utils/countDown";
import { registrationAuthVerify } from "services/auth/registrationCode";
import { retryCode } from "services/auth/retryCode";
import cookie from "js-cookie";
import { useIsMobile } from "utils/getWindowSize";
import { toast, ToastContainer } from "react-toastify";

const RegistrationCode = ({ closeRegisterCodeModal, phone }) => {
  const isMobile = useIsMobile(600);
  const [isLoading, setIsLoading] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const router = useRouter();
  const registerBtn = () => {
    router.push("/registration");
  };

  const { control, handleSubmit } = useForm();

  const registerVerifyBtn = (data) => {
    setIsLoading(false);

    registrationAuthVerify(
      !isMobile[0]
        ? {
            code: data?.code?.replace(/\s/g, ""),
            phone_number: phone.replaceAll(" ", ""),
          }
        : {
            code: data?.code?.replace(/\s/g, ""),
            phone_number: router?.query?.number.replaceAll(" ", ""),
          }
    )
      .then((res) => {
        if (res.status === 201) {
          cookie.set("userId", res.data?.id);

          !isMobile[0] && closeRegisterCodeModal();
          setIsLoading(false);
          router.push("/personal");
        }
      })
      .catch((err) => {
        setIsLoading(false);
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
            phone_number: phone.replaceAll(" ", ""),
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

  const verifyButton = () => {
    if (seconds === 0) {
      retryCodeBtn();
    } else {
      registerVerifyBtn();
    }
  };

  useEffect(() => {
    let timer;
    if (seconds !== 0) {
      timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      clearTimeout(timer);
    }
  }, [seconds]);
  return (
    <div className={cls.registerCode}>
      <div>
        <ToastContainer />
      </div>
      <Container className={cls.box}>
        <Typography className={cls.title}>Nomer tasdiqlash</Typography>
        <Typography className={cls.content}>
          {!isMobile[0] ? phone : router?.query?.number} raqamiga yuborilgan
          kodni tering
        </Typography>
        <Typography className={cls.text} onClick={registerBtn}>
          <ArrowBackIcon
            sx={{
              width: "20px",
              height: "20px",
              fontSize: "20px",
            }}
          />
          <span>Nomerni o'zgartirish</span>
        </Typography>
        <form
          onSubmit={handleSubmit(
            seconds === 0 ? retryCodeBtn : registerVerifyBtn
          )}
          style={{ textAlign: "center" }}
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
                  // name="code"
                  value={value}
                  onChange={onChange}
                  autoComplete={false}
                />
              )}
            />
          </div>
          <div
            style={{ width: "100%", margin: "5px auto", textAlign: "center" }}
          >
            {formatCodeExpireDuration(seconds)}
          </div>
          <div className={cls.button}>
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

export default RegistrationCode;
