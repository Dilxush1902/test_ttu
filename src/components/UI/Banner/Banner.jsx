import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Drawer, Typography } from "@mui/material";
import DrawerItem from "../Header/Drawer/DrawerItem";
import cls from "./Banner.module.scss";
import CustomButton from "components/UI/Button/CustomButton";
import { makeStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";
import { useSwipeable } from "react-swipeable";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Registration from "../Auth/Registration/Registration";
import Login from "../Auth/Login/Login";
import ForgotPasswordCode from "../Auth/ForgotPasswordCode/ForgotPasswordCode";
import RegistrationCode from "../Auth/RegistrationCode/RegistrationCode";
import ForgotPasswordPhone from "../Auth/ForgotPasswordPhone/ForgotPasswordPhone";
import ForgotPassword from "../Auth/ForgotPassword/ForgotPassword";
import { useIsMobile } from "utils/getWindowSize";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "624",
  bgcolor: "red",
  border: "2px solid #000",
  boxShadow: 24,
  // p: 6,
};

const useStyles = makeStyles({
  root: {
    background: "rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(24px)",
    "& .MuiPaper-root": {
      width: "100%",
      // height: "100vh",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid rgba(0, 0, 0, 0.12) !important",
    },
  },
});

const Banner = () => {
  const isMobile = useIsMobile(600);

  //Modals Register
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [phone, setPhone] = useState();

  // //Modal registerCode
  const [registerCode, setRegisterCode] = useState(false);
  const openRegisterCodeModal = () => {
    setRegisterCode(true);
  };

  const closeRegisterCodeModal = () => {
    setRegisterCode(false);
  };
  //Modal Login
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  ///Modal Forgot password phone number
  const [telNumber, setTelNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState(false);
  const handleOpenPhoneNumber = () => setPhoneNumber(true);
  const handleClosePhoneNumber = () => setPhoneNumber(false);
  //Modal Forgot password code
  const [openCode, setOpenCode] = useState(false);
  const handleOpenCode = () => setOpenCode(true);
  const handleCloseCode = () => setOpenCode(false);

  /// Modal Forgot password
  const [passwordInp, setPasswordInp] = useState(false);
  const handleOpenForgetPass = () => setPasswordInp(true);
  const handleCloseForgetPass = () => setPasswordInp(false);

  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [drawerToggle, setDrawerToggle] = useState(true);
  const classes = useStyles();

  const handleChangeOpen = () => {
    setToggle(true);
  };

  const handleChangeClose = () => {
    setToggle(false);
  };

  const closeDrawer = () => {
    setDrawerToggle(false);
  };

  const registerBtn = () => {
    router.push("/registration");
  };
  return (
    <SwipeableDrawer
      anchor="top"
      open={drawerToggle}
      onClose={closeDrawer}
      sx={{ zIndex: "99" }}
    >
      <div className={cls.banner}>
        <div className={cls.icon}>
          <img
            src="/images/bannerImage/menuIcon.png"
            onClick={handleChangeOpen}
            alt=""
          />
        </div>
        <img
          src="/images/bannerImage/logo.png"
          className={cls.logo}
          // onClick={handleChangeOpen}
          alt=""
        />
        <Typography color="#FFFFFF" className={cls.title}>
          Zamonaviy va sifatli ta’lim kafolati!
        </Typography>
        <div className={cls.list}>
          <div className={cls.listItem}>
            <div className={cls.crosshair_top_right1}></div>
            <div className={cls.crosshair_top_left1}></div>
            <div className={cls.crosshair_bottom_right}></div>
            <div className={cls.crosshair_bottom_left}></div>
          </div>
          <div className={cls.listItem}>
            <div className={cls.crosshair_top_right1}></div>
            <div className={cls.crosshair_top_left1}></div>
            <div className={cls.crosshair_bottom_right}></div>
            <div className={cls.crosshair_bottom_left}></div>
          </div>
          <div className={cls.listItem}>
            <div className={cls.crosshair_top_right1}></div>
            <div className={cls.crosshair_top_left1}></div>
            <div className={cls.crosshair_bottom_right}></div>
            <div className={cls.crosshair_bottom_left}></div>
          </div>
          <div className={cls.listItem}>
            <div className={cls.crosshair_top_right}></div>
            <div className={cls.crosshair_top_left}></div>
            <div className={cls.crosshair_bottom_right}></div>
            <div className={cls.crosshair_bottom_left}></div>
          </div>
          <div className={cls.listItem}>
            <div className={cls.crosshair_top_right}></div>
            <div className={cls.crosshair_top_left}></div>
            <div className={cls.crosshair_bottom_right}></div>
            <div className={cls.crosshair_bottom_left}></div>
          </div>
          <div className={cls.listItem}>
            <div className={cls.crosshair_top_right}></div>
            <div className={cls.crosshair_top_left}></div>
            <div className={cls.crosshair_bottom_right}></div>
            <div className={cls.crosshair_bottom_left}></div>
          </div>
          <div className={cls.listItem}>
            <div className={cls.crosshair_top_right}></div>
            <div className={cls.crosshair_top_left}></div>
            <div className={cls.crosshair_bottom_right}></div>
            <div className={cls.crosshair_bottom_left}></div>
          </div>
          <div className={cls.listItem}>
            <div className={cls.crosshair_top_right}></div>
            <div className={cls.crosshair_top_left}></div>
            <div className={cls.crosshair_bottom_right}></div>
            <div className={cls.crosshair_bottom_left}></div>
          </div>
          <div className={cls.listItem}>
            <div className={cls.crosshair_top_right}></div>
            <div className={cls.crosshair_top_left}></div>
            <div className={cls.crosshair_bottom_right}></div>
            <div className={cls.crosshair_bottom_left}></div>
          </div>
          <div className={cls.listItem}>
            <div className={cls.crosshair_top_right}></div>
            <div className={cls.crosshair_top_left}></div>
            <div className={cls.crosshair_bottom_right}></div>
            <div className={cls.crosshair_bottom_left}></div>
          </div>
          <div className={cls.listItem}>
            <div className={cls.crosshair_top_right}></div>
            <div className={cls.crosshair_top_left}></div>
            <div className={cls.crosshair_bottom_right}></div>
            <div className={cls.crosshair_bottom_left}></div>
          </div>
          <div className={cls.listItem}>
            <div className={cls.crosshair_top_right}></div>
            <div className={cls.crosshair_top_left}></div>
            <div className={cls.crosshair_bottom_right}></div>
            <div className={cls.crosshair_bottom_left}></div>
          </div>
        </div>
        <div className={cls.bottomBanner}>
          <div className={cls.chevronIcon}>
            <Typography
              className={cls.upButtonTitle}
              color="#FFFFFF"
              onClick={closeDrawer}
            >
              Tepaga suring
            </Typography>
            <img src="/images/bannerImage/chevron.png" alt="" />
          </div>
          <div className={cls.button}>
            {isMobile[0] ? (
              <CustomButton
                className={cls.regButton}
                onClick={registerBtn}
                fullWidth
              >
                Ariza qoldirish
              </CustomButton>
            ) : (
              <CustomButton
                className={cls.regButton}
                onClick={handleOpen}
                fullWidth
              >
                Ariza qoldirish
              </CustomButton>
            )}
          </div>
        </div>
        <Box className={cls.drawer}>
          <DrawerItem open={toggle} onClose={handleChangeClose} />
        </Box>
      </div>
      {/*Register Modal */}
      <Modal open={open} onClose={() => handleClose()}>
        <div className={cls.styleRegister}>
          <Registration
            handleOpenLogin={handleOpenLogin}
            handleClose={handleClose}
            handleOpenRegister={handleOpen}
            openRegisterCodeModal={openRegisterCodeModal}
            setPhone={setPhone}
          />
        </div>
      </Modal>

      {/* RegsiterCode Modal */}
      <Modal open={registerCode}>
        <div className={cls.styleRegisterCode}>
          <RegistrationCode
            openRegisterCodeModal={openRegisterCodeModal}
            closeRegisterCodeModal={closeRegisterCodeModal}
            phone={phone}
          />
        </div>
      </Modal>

      {/*Login Modal */}
      <Modal open={openLogin} onClose={() => handleCloseLogin()}>
        <div className={cls.stylelogin}>
          <Login
            handleCloseLogin={handleCloseLogin}
            handleOpenPhoneNumber={handleOpenPhoneNumber}
          />
        </div>
      </Modal>

      {/* Forgot password phone number */}
      <Modal open={phoneNumber} onClose={() => handleClosePhoneNumber()}>
        <div className={cls.stylePhoneNumber}>
          <ForgotPasswordPhone
            handleOpenCode={handleOpenCode}
            handleClosePhoneNumber={handleClosePhoneNumber}
            setTelNumber={setTelNumber}
          />
        </div>
      </Modal>
      {/*Forgot paswword code Modal */}
      <Modal open={openCode} onClose={() => handleCloseCode()}>
        <div className={cls.styleCode}>
          <ForgotPasswordCode
            telNumber={telNumber}
            handleCloseCode={handleCloseCode}
            handleOpenPhoneNumber={handleOpenPhoneNumber}
            handleOpenForgetPass={handleOpenForgetPass}
          />
        </div>
      </Modal>

      {/* Forgot Password Input */}
      <Modal open={passwordInp} onClose={() => handleCloseForgetPass()}>
        <div className={cls.stylePhoneNumber}>
          <ForgotPassword
            telNumber={telNumber}
            handleOpenLogin={handleOpenLogin}
            handleCloseForgetPass={handleCloseForgetPass}
          />
        </div>
      </Modal>
    </SwipeableDrawer>
  );
};

export default Banner;
