import React from "react";
import { Container, Typography } from "@mui/material";
import cls from "./ForgotPasswordPhone.module.scss";
import FTextfield from "components/UI/FormElement/Input/FTextField";
import CustomButton from "components/UI/Button/CustomButton";
import FInputMask from "components/UI/FormElement/InputMask/FInputMask";
import { useForm } from "react-hook-form";
import { retryCode } from "services/auth/retryCode";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useIsMobile } from "utils/getWindowSize";
import { useRouter } from "next/router";
import InputMaskSeria from "components/UI/FormElement/InputMask/InputMaskSeria";

const ForgotPasswordPhone = ({
  handleOpenCode,
  handleClosePhoneNumber,
  setTelNumber,
}) => {
  const isMobile = useIsMobile(600);
  const router = useRouter();

  const { control, handleSubmit } = useForm();

  const acceptNumberBtn = (data) => {
    if (!isMobile[0]) setTelNumber(data.phone_number);
    retryCode({ phone_number: data.phone_number.replaceAll(" ", "") })
      .then((res) => {
        if (res.status === 201) {
          if (!isMobile[0]) {
            handleClosePhoneNumber();
            handleOpenCode();
          } else {
            router.push({
              pathname: "/forgot-password-code",
              query: { number: data?.phone_number },
            });
          }
        }
      })
      .catch((err) => {
        if (
          err?.data ===
          "rpc error: code = InvalidArgument desc = invalid phone number"
        ) {
          toast.error("Bu raqam ro'yxatda yo'q");
        }
      });
    // setTellNumber(data.phone_number);
  };

  return (
    <div className={cls.root}>
      <ToastContainer />
      <Container className={cls.box}>
        <Typography className={cls.title}>Nomer tasdiqlash</Typography>
        <form onSubmit={handleSubmit(acceptNumberBtn)} className={cls.form}>
          <div className={cls.inputMask}>
            <InputMaskSeria
              label="Telefon Raqam"
              fullWidth
              name="phone_number"
              control={control}
              placeHolder="+998"
              mask={`+\\9\\9\\8 99 999 99 99`}
              className={cls.phone}
              typeForTextfield={"tel"}
              required
            />
            {/* <FInputMask
              fullWidth
              name="phone_number"
              control={control}
              placeHolder="+998"
            /> */}
          </div>
          <div className={cls.button}>
            <CustomButton
              className={cls.btn}
              type="submit"
              // onClick={acceptBtn}
              fullWidth
            >
              Tasdiqlash kodini yuborish
            </CustomButton>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ForgotPasswordPhone;
