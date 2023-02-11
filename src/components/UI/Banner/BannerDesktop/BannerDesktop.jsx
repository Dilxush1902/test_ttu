import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "components/UI/Button/CustomButton";
import DrawerItem from "components/UI/Header/Drawer/DrawerItem";
import Modal from "@mui/material/Modal";
import Registration from "components/UI/Auth/Registration/Registration";
import Login from "components/UI/Auth/Login/Login";
import ForgotPassword from "components/UI/Auth/ForgotPassword/ForgotPassword";
import ForgotPasswordCode from "components/UI/Auth/ForgotPasswordCode/ForgotPasswordCode";
import ForgotPasswordPhone from "components/UI/Auth/ForgotPasswordPhone/ForgotPasswordPhone";
import RegistrationCode from "components/UI/Auth/RegistrationCode/RegistrationCode";
import { useIsMobile } from "utils/getWindowSize";

import cls from "./style.module.scss";

const BannerDesktop = ({ setOpen = () => {}, open }) => {
  const [loadImg, setLoadImg] = useState(false);
  const [toggle, setToggle] = useState(false);
  const isMobile = useIsMobile(600);
  //Modals Register
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

  const handleChangeOpen = () => {
    setToggle(true);
  };

  const handleChangeClose = () => {
    setToggle(false);
  };

  const registerBtn = () => {
    if (!isMobile[0]) {
      handleOpen();
    } else {
      router.push("/registration");
    }
  };
  return (
    <div className={cls.main}>
      <div className={cls.image}>
        <img
          src="/images/bannerImage/bgDesktop.png"
          style={loadImg ? {} : { display: "none" }}
          onLoad={() => setLoadImg(true)}
          className={cls.loadImage}
          alt="banner"
        />
      </div>
      {loadImg && (
        <div className={cls.root}>
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
            <Typography
              color="#FFFFFF"
              // fontWeight="500"
              // fontSize="24px"
              className={cls.title}
            >
              Zamonaviy va sifatli ta’lim kafolati!
            </Typography>
            <div className={cls.button}>
              <CustomButton
                className={cls.btnCustom}
                onClick={registerBtn}
                fullWidth
              >
                Ariza qoldirish
              </CustomButton>
            </div>
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
              <div className={cls.listItem2}>
                <div className={cls.crosshair_top_right}></div>
                <div className={cls.crosshair_top_left}></div>
                <div className={cls.crosshair_bottom_right}></div>
                <div className={cls.crosshair_bottom_left}></div>
              </div>

              <div className={cls.listItem2}>
                <div className={cls.crosshair_top_right}></div>
                <div className={cls.crosshair_top_left}></div>
                <div className={cls.crosshair_bottom_right}></div>
                <div className={cls.crosshair_bottom_left}></div>
              </div>

              <div className={cls.listItem2}>
                <div className={cls.crosshair_top_right}></div>
                <div className={cls.crosshair_top_left}></div>
                <div className={cls.crosshair_bottom_right}></div>
                <div className={cls.crosshair_bottom_left}></div>
              </div>
              <div className={cls.listItem2}>
                <div className={cls.crosshair_top_right}></div>
                <div className={cls.crosshair_top_left}></div>
                <div className={cls.crosshair_bottom_right}></div>
                <div className={cls.crosshair_bottom_left}></div>
              </div>
              <div className={cls.listItem2}>
                <div className={cls.crosshair_top_right}></div>
                <div className={cls.crosshair_top_left}></div>
                <div className={cls.crosshair_bottom_right}></div>
                <div className={cls.crosshair_bottom_left}></div>
              </div>
              <div className={cls.listItem2}>
                <div className={cls.crosshair_top_right}></div>
                <div className={cls.crosshair_top_left}></div>
                <div className={cls.crosshair_bottom_right}></div>
                <div className={cls.crosshair_bottom_left}></div>
              </div>
            </div>
            <Box className={cls.drawer}>
              <DrawerItem open={toggle} onClose={handleChangeClose} />
            </Box>

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
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default BannerDesktop;
