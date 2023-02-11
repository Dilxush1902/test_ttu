import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { useForm } from "react-hook-form";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import { Container, Typography, CircularProgress } from "@mui/material";
import cls from "./Registration.module.scss";
import FInputMask from "components/UI/FormElement/InputMask/FInputMask";
import "dayjs/locale/uz";
import { makeStyles } from "@mui/styles";
import { registrationAuth } from "services/auth/registration";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useIsMobile } from "utils/getWindowSize";
import FPasswordTextField from "components/UI/FormElement/Input/FPasswordTextField";
import InputMaskSeria from "components/UI/FormElement/InputMask/InputMaskSeria";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "8px",
    "& .MuiFormControl-root": {},
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid rgba(0, 0, 0, 0.12) !important",
    },
  },
});

const Registration = ({
  handleClose,
  openRegisterCodeModal,
  handleOpenLogin,
  setPhone,
}) => {
  const isMobile = useIsMobile(600);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const classes = useStyles();
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

  const loginPage = () => {
    if (!isMobile[0]) {
      handleClose();
      handleOpenLogin();
    } else {
      router.push("/login");
    }
  };

  const registerBtn = (data) => {
    if (!isMobile[0]) setPhone(data?.phone_number);
    setIsLoading(false);

    registrationAuth({
      ...data,
      // last_name: data.last_name.replace(/^[ \t]+|[ \t]+$/gm, ""),
      phone_number: data.phone_number.replaceAll(" ", ""),
    })
      .then((res) => {
        if (res.status === 201) {
          localStorage.clear();
          if (!isMobile[0]) {
            openRegisterCodeModal();
            handleClose();
          } else {
            router.push({
              pathname: "/registerCode",
              query: { number: data?.phone_number },
            });
          }
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (err.data === "user registered") {
          toast.error("Telefon raqami ro'yxatdan o'tgan");
        }
        if (
          err.data ===
          "rpc error: code = InvalidArgument desc = invalid password"
        ) {
          toast.error("Iltimos parolni 6 simboldan ko'p kiriting");
        }
        setIsLoading(false);
      });
  };

  return (
    <div className={cls.register}>
      <Container className={cls.box}>
        <div>
          <ToastContainer />
        </div>
        {!isMobile[0] && (
          <div className={cls.cencel}>
            <Typography className={cls.title1}>Ro’yhatdan o’tish</Typography>

            <img
              onClick={handleClose}
              className={cls.closeBtn}
              src="/images/closeIcon.svg"
              alt="close"
            />
          </div>
        )}
        {isMobile[0] && (
          <Link href="/" passHref>
            <ArrowBackIcon />
          </Link>
        )}
        <form onSubmit={handleSubmit(registerBtn)} className={cls.form}>
          <Typography className={cls.title}>Ro’yhatdan o’tish</Typography>
          <div className={cls.info}>
            <div className={cls.inputMask}>
              <InputMaskSeria
                label="Telefon Raqam"
                name="phone_number"
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
              label="Parol"
            />
            <FPasswordTextField
              control={control}
              name="confirmPwd"
              label="Parol qaytadan"
            />

            <p style={{ color: "red" }}>
              {errors?.confirmPwd?.message
                ? "Parolni tasdiqlang"
                : errors?.confirmPwd?.message}
            </p>
          </div>

          <div className={cls.button}>
            <button type="submit" className={cls.applyBtn}>
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
                "Ariza qoldirish"
              )}
            </button>
            {
              <Typography className={cls.text} onClick={loginPage}>
                <span>Men ro’yhatdan o’tganman</span>
                <ArrowForwardIcon
                  sx={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Typography>
            }
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Registration;
