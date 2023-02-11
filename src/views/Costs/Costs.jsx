import React, { useEffect, useState } from "react";
import cookies from "js-cookie";
import { useIsMobile } from "utils/getWindowSize";
import { useRouter } from "next/router";
import CustomButton from "components/UI/Button/CustomButton";
import CostsBanner from "components/UI/Costs/CostsBanner/CostsBanner";
import CostsInfo from "components/UI/Costs/CostsInfo/CostsInfo";
import cls from "./style.module.scss";
import Navbar from "components/UI/Navbar/Navbar";

const Costs = () => {
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
    <div className={cls.root}>
      <div className={cls.navbar}>
        <CostsBanner />
        <div className={show ? cls.sticky : cls.nav}>
          <Navbar />
        </div>
        <CostsInfo />
      </div>
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

export default Costs;
