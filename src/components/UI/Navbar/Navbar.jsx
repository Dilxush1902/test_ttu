import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import { Box } from "@mui/system";
import Link from "next/link";
import CustomButton from "../Button/CustomButton";
import DrawerItem from "../Header/Drawer/DrawerItem";
import Modal from "@mui/material/Modal";
import { useIsMobile } from "utils/getWindowSize";
import { LogoIcon } from "/public/icons/icons";
import cls from "./Navbar.module.scss";
import Registration from "../Auth/Registration/Registration";
import Login from "../Auth/Login/Login";
import ForgotPasswordCode from "../Auth/ForgotPasswordCode/ForgotPasswordCode";
import RegistrationCode from "../Auth/RegistrationCode/RegistrationCode";
import ForgotPasswordPhone from "../Auth/ForgotPasswordPhone/ForgotPasswordPhone";
import ForgotPassword from "../Auth/ForgotPassword/ForgotPassword";
import { el } from "date-fns/locale";

const Navbar = () => {
  const userId = cookies.get("userId");
  const isMobile = useIsMobile(600);
  const router = useRouter();

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
  const [toggle, setToggle] = useState(false);

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
  const styleCheckPosition = (type)=>{
    if (type === "/personal") {
      return {
        position:"static"
      }
    } else {
      return {}
    }
  }
  const styleCheckBorder = (type)=>{
    if (type === "/personal") {
      return {
        border:"none"
      }
    } else {
      return {}
    }
  }
  return (
    <header style={styleCheckPosition(router.pathname)} className={cls.header}>
      <Container style={styleCheckBorder(router.pathname)} className={cls.container}>
        <div className={cls.box}>
          <Link href="/">
            <a className={cls.logo}>
              <LogoIcon />
            </a>
          </Link>
          {router.pathname !== "/personal" ? (
            <>
              <div className={cls.button}>
                {userId ? (
                  <CustomButton
                    onClick={() => router.push("/personal")}
                    className={cls.btn}
                    fullWidth
                  >
                    Shaxsiy kabinet
                  </CustomButton>
                ) : (
                  <CustomButton
                    onClick={registerBtn}
                    className={cls.btn}
                    fullWidth
                  >
                    Ariza qoldirish
                  </CustomButton>
                )}
              </div>
              <div className={cls.icon}>
                <img
                  src="/images/menu.svg"
                  // src="/images/headerImage/menuIcon.png"
                  onClick={handleChangeOpen}
                  alt=""
                />
              </div>{" "}
            </>
          ) : (
            ""
          )}
        </div>

        <Box className={cls.drawer}>
          <DrawerItem open={toggle} onClose={handleChangeClose} />
        </Box>
      </Container>

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
    </header>
  );
};

export default Navbar;
