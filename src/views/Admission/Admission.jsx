import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import { useIsMobile } from "utils/getWindowSize";
import { Container } from "@mui/material";
import AdmissionBanner from "components/UI/Admission/AdmissionBanner/AdmissionBanner";
import AdmissionContent from "components/UI/Admission/AdmissionContent/AdmissionContent";
import CustomButton from "components/UI/Button/CustomButton";
import Navbar from "components/UI/Navbar/Navbar";
import cls from "./style.module.scss";

const Admission = () => {
  const userId = cookies.get("userId");
  const router = useRouter();
  const [show, setShow] = useState(false);
  const isMobile = useIsMobile(600);

  const controlNavbar = () => {
    if (window.scrollY > 600) {
      setShow(true);
    } else setShow(false);
  };
  const controlNavbarMobile = () => {
    if (window.scrollY > 220) {
      setShow(true);
    } else setShow(false);
  };
  useEffect(() => {
    if (!isMobile[0]) {
      window.addEventListener("scroll", controlNavbar);
    } else {
      window.addEventListener("scroll", controlNavbarMobile);
    }
    return () => {
      if (!isMobile[0]) {
        window.addEventListener("scroll", controlNavbar);
      } else {
        window.addEventListener("scroll", controlNavbarMobile);
      }
    };
  }, []);
  return (
    <div className={cls.box}>
      <AdmissionBanner />
      <div className={show ? cls.sticky : cls.nav}>
        <Navbar />
      </div>
      <Container className={cls.container}>
        <AdmissionContent />
      </Container>
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
            onClick={() => router.push("/registration")}
            className={cls.btn}
            fullWidth
          >
            Ariza qoldirish
          </CustomButton>
        )}
      </div>
    </div>
  );
};

export default Admission;
