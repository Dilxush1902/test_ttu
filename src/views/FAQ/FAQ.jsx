import { Container } from "@mui/material";
import CustomButton from "components/UI/Button/CustomButton";
import FaqBanner from "components/UI/FAQ/FaqBanner/FaqBanner";
import Question from "components/UI/FAQ/Question/Question";
import Navbar from "components/UI/Navbar/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getFAQ } from "services/faq";
import cookies from "js-cookie";
import { useIsMobile } from "utils/getWindowSize";
import cls from "./style.module.scss";

const FAQ = () => {
  const userId = cookies.get("userId");
  const router = useRouter();
  const [faq, setFaq] = useState();
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const isMobile = useIsMobile(600);

  const controlNavbar = () => {
    if (window.scrollY > 600) {
      setShow(true);
    } else setShow(false);
  };
  const controlNavbarMobile = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else setShow(false);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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

  useEffect(() => {
    getFAQ().then((res) => {
      setFaq(res?.data?.questions)
      console.log(res)
    });
    console.log("There is FAQ", faq)
  }, []);

  return (
    <div className={cls.box}>
      <FaqBanner />
      <div className={show ? cls.sticky : cls.nav}>
        <Navbar />
      </div>{" "}
      <Container className={cls.container}>
        {faq &&
          faq.map((item, index) => (
            <Question
              expanded={expanded}
              index={index}
              key={item.id}
              title={item.title_uz}
              answer={item.description_uz}
              onChange={handleChange(index)}
            />
          ))}
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
          >Ariza qoldirish</CustomButton>
        )}
      </div>
    </div>
  );
};

export default FAQ;
