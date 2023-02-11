import React, { useEffect, useState } from "react";
import cookies from "js-cookie";
import Banner from "components/UI/Banner/Banner";
import AboutUs from "components/UI/MainPage/AboutUs/AboutUs";
import Licence from "components/UI/MainPage/Licence/Licence";
import Admission from "components/UI/MainPage/AdmissionRule/Admission";
import FAQ from "components/UI/MainPage/FAQ/FAQ";
import { useIsMobile } from "utils/getWindowSize";
import BannerDesktop from "../Banner/BannerDesktop/BannerDesktop";
import cls from "./style.module.scss";
import Navbar from "../Navbar/Navbar";
import classNames from "classnames";
import { Footer } from "../Footer/Footer";
import CustomButton from "../Button/CustomButton";

const MainPage = () => {
  const isMobile = useIsMobile(600);
  const [show, setShow] = useState(false);
  const userId = cookies.get("userId");
  const [drawerToggle, setDrawerToggle] = useState(true);


  useEffect(() => {
    const controlBanner = (event) => {
      //var delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

      if (event.deltaY > 0) {
        setShow(true);
      }
    };

    window.addEventListener("mousewheel", controlBanner);
    return () => {
      window.addEventListener("mousewheel", controlBanner);
    };
  }, []);

  return (
    <div className={cls.root}>
      {isMobile[0] ? (
        <>
          <Banner />
          <div className={cls.navbar}>
            <div className={cls.sticky}>
              <Navbar />
            </div>
            <div calssName={cls.main}>
              <AboutUs />
              <Licence />
              <Admission />
              <FAQ />
            </div>
            <Footer />
            <div className={cls.button}>
              {userId ? (
                <CustomButton
                  onClick={() => router.push("/personal")}
                  className={cls.button}
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
        </>
      ) : (
        <div
          className={classNames(cls.banner, {
            [cls.hideBanner]: show,
          })}
        >
          <BannerDesktop />
        </div>
      )}
      {show && (
        <div className={cls.navbar}>
          <div className={cls.sticky}>
            <Navbar />
          </div>
          <AboutUs />
          <Licence />
          <Admission />
          <FAQ />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default MainPage;
