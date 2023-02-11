import React, { useEffect, useState } from "react";
import { useIsMobile } from "utils/getWindowSize";
import cookies from "js-cookie";
import { Container } from "@mui/material";
import CustomButton from "components/UI/Button/CustomButton";
import ApplyDocs from "components/UI/Faculties/ApplyDocs/ApplyDocs";
import ExamInfo from "components/UI/Faculties/ExamInfo/ExamInfo";
import FacultyBanner from "components/UI/Faculties/FacultyBanner/FacultyBanner";
import FacultyInfo from "components/UI/Faculties/FacultyInfo/FacultyInfo";
import Navbar from "components/UI/Navbar/Navbar";
import { getFacultyById } from "services/faculty";
import { useRouter } from "next/router";
import cls from "./Faculty.module.scss";

const Faculty = () => {
  const [facultyItem, setFacultyItem] = useState();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const isMobile = useIsMobile(850);
  const userId = cookies.get("userId");

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
    getFacultyById(router?.query?.id).then((res) => setFacultyItem(res));
  }, [router?.query?.id]);

  return (
    <div className={cls.box}>
      <FacultyBanner facultyItem={facultyItem} />
      <div className={show ? cls.sticky : cls.nav}>
        <Navbar />
      </div>

      <Container className={cls.container}>
        <FacultyInfo facultyItem={facultyItem} />
        <ExamInfo facultyItem={facultyItem} />
        <ApplyDocs facultyItem={facultyItem} />
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

export default Faculty;
