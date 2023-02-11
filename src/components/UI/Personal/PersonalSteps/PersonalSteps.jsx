import React, { useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Modal, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useIsMobile } from "utils/getWindowSize";
import cls from "./PersonalSteps.module.scss";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import FourthStep from "./FourthStep/FourthStep";
import cookies from "js-cookie";
import { uploadImage } from "services/privateCabine";
import { Box } from "@mui/system";
import LogOut from "./LogOut/LogOut";
import { useUser } from "services/user";
import { useOrder } from "services/order";

const style = {
  ["@media (max-width: 600px)"]: {
    width: "90%",
  },
  width: "35%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  border: "1px solid white",
};

const PersonalSteps = () => {
  //Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const userId = cookies.get("userId");
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useIsMobile(850);
  const { user } = useUser({
    userId,
  });

  const { orderMutation } = useOrder({
    userId,
    orderMutationOptions: {
      onSuccess: () => {
        user.refetch();
      },
    },
  });

  const fileInputRef = useRef();
  const userData = useMemo(() => user.data?.data, [user.data]);

  const imgUpload = () => {
    fileInputRef.current.click();
  };

  const inputFile = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const formData = new FormData();
      formData.append("file", file);
      uploadImage(formData)
        .then((res) => {
          orderMutation.mutate({
            data: {
              image_url: res?.data?.filename,
            },
          });
        })
        .catch((err) => console.error(err));
    }
  };

  const logOut = () => {
    cookies.remove("userId", router.push("/"));
  };

  const handleStep = (arg) => {
    setActiveStep(arg);
  };

  const handleChangeNextStep = (index) => {
    user.refetch();
    setActiveStep(index);
  };

  return (
    <div className={cls.box}>
      <div className={cls.root}>
        <div className={cls.user}>
          <div className={cls.image} onClick={imgUpload}>
            <img
              src={
                userData?.image_url
                  ? process.env.NEXT_PUBLIC_BASE_CDN_URL + userData.image_url
                  : "/images/cabineImage/avatar.svg"
              }
              alt=""
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={inputFile}
            />
            <img
              src="/images/cabineImage/addPhoto.png"
              className={cls.addIcon}
              alt=""
            />
          </div>
          <div className={cls.name}>
            <Typography className={cls.userName}>
              {userData?.first_name
                ? `${userData.first_name} ${userData.last_name}`
                : `${userData?.phone_number
                    .toString()
                    .slice(4)
                    .replace(
                      /(\d{2})(\d{3})(\d{2})(\d{2})/, "($1) $2-$3-$4"
                    )}`}
            </Typography>
          </div>
        </div>
        <div className={cls.steps}>
          <button
            className={cls.stepList}
            style={{
              background: activeStep === 0 && "#f9f9f9",
            }}
            onClick={
              isMobile[0]
                ? () => router.push("/personal/first-step")
                : () => handleStep(0)
            }
          >
            {userData?.count >= 1 ? (
              <img
                src="/images/cabineImage/tickStep.png"
                width="32px"
                height="32px"
                alt=""
              />
            ) : (
              <span>1</span>
            )}
            <Typography className={cls.title}>Umumiy ma'lumotlar</Typography>
            <ChevronRightIcon className={cls.icon} />
          </button>
          <button
            className={cls.stepList}
            style={{ background: activeStep === 1 && "#f9f9f9" }}
            onClick={
              isMobile[0]
                ? () => router.push("/personal/second-step")
                : () => handleStep(1)
            }
            disabled={userData?.count >= 1 ? false : true}
          >
            {userData?.count >= 2 ? (
              <img
                src="/images/cabineImage/tickStep.png"
                width="32px"
                height="32px"
              />
            ) : (
              <span>2</span>
            )}
            <Typography className={cls.title}>
              O'qishga ariza yuborish
            </Typography>
            <ChevronRightIcon className={cls.icon} />
          </button>
          <button
            className={cls.stepList}
            style={{ background: activeStep === 2 && "#f9f9f9" }}
            onClick={
              isMobile[0]
                ? () => router.push("/personal/third-step")
                : () => handleStep(2)
            }
            disabled={userData?.count === 2 ? false : true}
          >
            <span>3</span>
            <Typography className={cls.title}>Imtihon haqida</Typography>
            <ChevronRightIcon className={cls.icon} />
          </button>
          <button
            className={cls.stepList}
            style={{
              background: activeStep === 3 && "#f9f9f9",
              cursor:
                userData?.result_exam !== "qabul qilindi" && "not-allowed",
            }}
            onClick={
              isMobile[0]
                ? () => router.push("/personal/fourth-step")
                : () => handleStep(3)
            }
            disabled={userData?.result_exam === "qabul qilindi" ? false : true}
          >
            <span>4</span>
            <Typography className={cls.title}>Shartnoma(Kontrakt) yuklab olish</Typography>
            <ChevronRightIcon className={cls.icon} />
          </button>

          <div className={cls.logOut}>
            <div className={cls.logOut} onClick={handleOpen}>
              <Typography className={cls.logoutIcon}>
                <img src="/images/cabineImage/logoutIcon.svg" />
                <span>Profildan chiqish</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.stepsStage}>
        {activeStep === 0 ? (
          <FirstStep
            handleChangeNextStep={handleChangeNextStep}
            user={userData}
          />
        ) : activeStep === 1 ? (
          <SecondStep
            user={userData}
            handleChangeNextStep={handleChangeNextStep}
          />
        ) : activeStep === 2 ? (
          <ThirdStep user={userData} />
        ) : (
          <FourthStep />
        )}
      </div>

      <Modal open={open} onClose={() => handleClose()}>
        <Box sx={style}>
          <LogOut handleClose={handleClose} logOut={logOut} />
        </Box>
      </Modal>
    </div>
  );
};

export default PersonalSteps;
