import React from "react";
import { ChevronLeft } from "@mui/icons-material";
import { Container, InputAdornment, Typography } from "@mui/material";
import FTextfield from "components/UI/FormElement/Input/FTextField";
import { useRouter } from "next/router";
import PersonalBanner from "../../PersonalBanner/PersonalBanner";
import { useIsMobile } from "utils/getWindowSize";
import cls from "./ThirdStep.module.scss";

const ThirdStep = ({ user }) => {
  const isMobile = useIsMobile(850);
  const router = useRouter();

  
  return (
    <div className={cls.root}>
      {isMobile[0] && <PersonalBanner />}
      <Container className={cls.container}>
        <div className={cls.header}>
          <ChevronLeft
            sx={{ display: { md: "none " } }}
            onClick={() => router.push("/personal")}
            className={cls.chevronIcon}
          />
          <Typography
            className={cls.title}
            onClick={() => router.push("/personal")}
          >
            Imtihon haqida
          </Typography>
        </div>
        <div className={cls.examDate}>
          <FTextfield
            type="text"
            fullWidth
            placeHolder="Imtihon sanasi"
            value={user?.exam_date || "---"}
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment
                  sx={{
                    position: "absolute",
                    right: 12,
                    display: "none",
                  }}
                ></InputAdornment>
              ),
            }}
          />
          <fieldset
            style={{
              border: "1px solid rgba(0, 0, 0, 0.18)",
              padding: "5px 10px 15px",
            }}
          >
            <legend
              style={{
                fontSize: "12px",
                color: "rgba(0, 0, 0, 0.5)",
                padding:"0px 3px",
              }}
            >
              Imtihon javobi *
            </legend>
            {user?.result_exam === "qabul qilinmadi" ? (
              <span style={{ color: "#E25B26" }}>Qabul qilinmadingiz </span>
            ) : user?.result_exam === "qabul qilindi" ? (
              <span style={{ color: "#0EAE58" }}>Qabul qilindingiz</span>
            ) : (
              <span style={{ color: "#E25B26" }}>Kutilmoqda ...</span>
            )}
            {/* <FTextfield
            type="text"
            fullWidth
            placeHolder="Imtihon javobi"
            value={
              userData?.result_exam === ""
                ? "Kutilmoqda"
                : userData?.result_exam
            }
            InputProps={{
              startAdornment: (
                <InputAdornment
                  sx={{
                    position: "absolute",
                    right: 12,
                    display: "none",
                  }}
                ></InputAdornment>
              ),
            }}
          /> */}
          </fieldset>
          <FTextfield
            type="text"
            fullWidth
            placeHolder="Imtihon bali"
            value={user?.ball_exam}
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment
                  sx={{
                    position: "absolute",
                    right: 12,
                    display: "none",
                  }}
                ></InputAdornment>
              ),
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default ThirdStep;
