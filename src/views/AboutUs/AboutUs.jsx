import React, { useEffect, useState } from "react";
import cookies from "js-cookie";
import { useRouter } from "next/router";
import { useIsMobile } from "utils/getWindowSize";
import AboutBanner from "components/UI/AboutUs/AboutBanner/AboutBanner";
import AboutInfo from "components/UI/AboutUs/AboutInfo/AboutInfo";
import AboutLicence from "components/UI/AboutUs/AboutLicence/AboutLicence";
import CustomButton from "components/UI/Button/CustomButton";
import Navbar from "components/UI/Navbar/Navbar";
import cls from "./style.module.scss";

const AboutUs = () => {
  const [show, setShow] = useState(false);
  const isMobile = useIsMobile(600);
  const userId = cookies.get("userId");
  const router = useRouter();

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
    <div className={cls.root}>
      <div className={cls.navbar}>
        <AboutBanner />
        <div className={show ? cls.sticky : cls.nav}>
          <Navbar />
        </div>
        <AboutInfo />
        <AboutLicence />
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
    </div>
  );
};

export default AboutUs;
