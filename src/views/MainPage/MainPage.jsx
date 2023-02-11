import React, { useEffect, useState } from "react";
import cookies from "js-cookie";
import classNames from "classnames";
import { Footer } from "components/UI/Footer/Footer";
import Licence from "components/UI/MainPage/Licence/Licence";
import Navbar from "components/UI/Navbar/Navbar";
import { useIsMobile } from "utils/getWindowSize";
import cls from "./style.module.scss";
import Banner from "components/UI/Banner/Banner";
import BannerDesktop from "components/UI/Banner/BannerDesktop/BannerDesktop";
import AboutUs from "components/UI/MainPage/AboutUs/AboutUs";
import Profession from "components/UI/AboutUs/Professions/Profession";
import Admission from "components/UI/MainPage/AdmissionRule/Admission";
import FAQ from "components/UI/MainPage/FAQ/FAQ";
import { useRouter } from "next/router";

const MainPage = () => {
  const router = useRouter();
  const isMobile = useIsMobile(850);
  const [show, setShow] = useState(false);
  const userId = cookies.get("userId");
  const [open, setOpen] = useState(false);

  const controlBanner = (event) => {
    //var delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;
    // if (event.deltaY > 0) {
      setShow(true);
    // }
  };
  useEffect(() => {
    window.addEventListener(
      "onwheel" in document ? "wheel" : "mousewheel",
      controlBanner
    );
    return () => {
      window.addEventListener(
        "onwheel" in document ? "wheel" : "mousewheel",
        controlBanner
      );
    };
  }, []);

  return (
    <div>
      <div className={cls.root}>
        {isMobile[0] ? <Banner /> : 
          <div className={classNames(cls.banner, {[cls.hideBanner]: show})}>
            <BannerDesktop setOpen={setOpen} open={open} />
          </div>
        }
        <div className={cls.navbar}>
          <div className={cls.sticky}>
            <Navbar />
          </div>
          <AboutUs />
          <Licence />
          <Profession />
          <Admission setOpen={setOpen} />
          <FAQ />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
