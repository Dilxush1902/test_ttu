import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "components/UI/Button/CustomButton";
import {
  Box,
  CircularProgress,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ChevronLeft } from "@mui/icons-material";
import FTextfield from "components/UI/FormElement/Input/FTextField";
import cls from "./FirstStep.module.scss";
import { useRouter } from "next/router";
import PersonalBanner from "../../PersonalBanner/PersonalBanner";
import { useIsMobile } from "utils/getWindowSize";
import cookies from "js-cookie";
import { format } from "date-fns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useOrder } from "services/order";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "8px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid rgba(0, 0, 0, 0.12) !important",
    },
  },
});

const FirstStep = ({ handleChangeNextStep, user }) => {
  const isMobile = useIsMobile(850);
  const userId = cookies.get("userId");
  const [inputDisable, setInputDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const classes = useStyles();
  const { control, handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        first_name: user?.first_name,
        last_name: user?.last_name,
        third_name: user?.third_name,
        date_of_birth: user?.date_of_birth,
        phone_number: user?.phone_number,
      });
      setInputDisable(user.count >= 1);
    }
  }, [user]);

  const { orderMutation } = useOrder({
    userId,
    orderMutationOptions: {
      onSuccess: (res) => {
        setInputDisable(res.data.count >= 1);
        handleChangeNextStep(res.data.count > 0 ? 1 : 0);
        setIsLoading(false);
      },
    },
  });

  const submitFirstStep = (data) => {
    setIsLoading(true);
    orderMutation.mutate({
      data: {
        ...data,
        first_name: data?.first_name.toUpperCase(),
        last_name: data?.last_name.toUpperCase(),
        third_name: data?.third_name.toUpperCase(),
        date_of_birth: format(new Date(data.date_of_birth), "yyyy-MM-dd"),
        phone_number: data?.phone_number?.replaceAll(" ", ""),
        count: 1,
      },
    });
    router.push("/personal");
  };

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <div className={cls.header}>
          <ChevronLeft
            sx={{ display: { md: "none ", zIndex: 100 } }}
            onClick={() => router.push("/personal")}
            className={cls.chevronIcon}
          />
          <Typography
            className={cls.title}
            onClick={() => isMobile[0] && router.push("/personal")}
          >
            Umumiy ma’lumotlar{" "}
          </Typography>
        </div>
        <form onSubmit={handleSubmit(submitFirstStep)} className={cls.form}>
          <FTextfield
            type="text"
            control={control}
            name="first_name"
            register={register}
            fullWidth
            placeHolder="Ism"
            disabled={inputDisable}
            InputProps={{
              startAdornment: inputDisable && (
                <InputAdornment
                  sx={{
                    position: "absolute",
                    right: 12,
                    // display: !userId && "none",
                  }}
                ></InputAdornment>
              ),
            }}
          />
          <FTextfield
            type="text"
            control={control}
            name="last_name"
            register={register}
            fullWidth
            placeHolder="Familiya"
            disabled={inputDisable}
            InputProps={{
              startAdornment: inputDisable && (
                <InputAdornment
                  sx={{
                    position: "absolute",
                    right: 12,
                    display: !userId && "none",
                    textTransform: "uppercase",
                  }}
                ></InputAdornment>
              ),
            }}
          />
          <FTextfield
            type="text"
            control={control}
            name="third_name"
            register={register}
            fullWidth
            placeHolder="Otasining ismi"
            disabled={inputDisable}
            InputProps={{
              startAdornment: inputDisable && (
                <InputAdornment
                  sx={{
                    position: "absolute",
                    right: 12,
                    display: !userId && "none",
                  }}
                ></InputAdornment>
              ),
            }}
          />

          <Box>
            <Controller
              name="date_of_birth"
              control={control}
              render={({ field: { onChange, value = "" } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    className={classes.root}
                    inputFormat="DD/MM/YYYY"
                    disabled={inputDisable}
                    label="Tug'ilgan sana"
                    value={value}
                    onChange={(e) => {
                      onChange(e);
                    }}
                    renderInput={(params) => (
                      <TextField
                        type="date"
                        {...params}
                        disabled={inputDisable && true}
                        required={value? false : true}
                        inputProps={{
                          ...params.inputProps,
                          placeholder: "kun/oy/yil"
                        }}
                      />
                    )}
                    required
                  />
                </LocalizationProvider>
              )}
            />
          </Box>

          <div
            className={cls.button}
            style={{
              display: inputDisable && "none",
            }}
          >
            <CustomButton type="submit" fullWidth>
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
                "Kiyingi bosqichga o'tish"
              )}
            </CustomButton>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default FirstStep;
