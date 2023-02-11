import React, { useEffect, useState } from "react";
import { ChevronLeft } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { useIsMobile } from "utils/getWindowSize";
import PersonalBanner from "../../PersonalBanner/PersonalBanner";
import cls from "./FourthStep.module.scss";
import cookies from "js-cookie";
import { useRouter } from "next/router";
import { getEnrolledStudent } from "services/getUser";
import swal from 'sweetalert';

const FourthStep = () => {
  const userId = cookies.get("userId");
  const isMobile = useIsMobile(850);
  const router = useRouter();
  const [enrolled, setEnrolled] = useState();

  const contractBtn = (arg) => {
    const el = document.createElement("a");
    if (!enrolled) {
      swal({
        title: "Hujjat",
        text: "O'qishga kirganligingiz haqida hujjat yo'q",
        icon: "warning",
        dangerMode: true,
      });
    }else {
      el.href = `https://` + enrolled?.invoice_url_pdf;
    }
    el.target = "_blank";
    el.setAttribute("download", "download.pdf");
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
  };

  const invoiceBtn = (arg) => {
    const el = document.createElement("a");
    if (!enrolled) {
      swal({
        title: "Hujjat",
        text: "O'qishga kirganligingiz haqida hujjat yo'q",
        icon: "warning",
        dangerMode: true,
      });
    }else {
      el.href = `https://` + enrolled?.contract_url;
    }
    el.target = "_blank";
    el.setAttribute("download", "download.pdf");
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
  };

  useEffect(() => {
    if (userId) {
      getEnrolledStudent(userId)
        .then((res) => setEnrolled(res.data))
        .catch((err) => console.error(err));
    }
  }, [userId]);

  
  return (
    <div className={cls.root}>
      {isMobile[0] && <PersonalBanner />}
      <Container className={cls.container}>
        <div className={cls.header}>
          <ChevronLeft
            sx={{ display: { md: "none " } }}
            onClick={() => router.push("/personal")}
            className={cls.chevronIcon}
          />
          <Typography
            className={cls.title}
            onClick={() => router.push("/personal")}
          >
            Shartnoma(Kontrakt) yuklab olish
          </Typography>
        </div>
        <div className={cls.downloadDoc}>
          <div className={cls.download} onClick={contractBtn}>
            <img
              src="/images/cabineImage/downloadIcon.png"
              className={cls.icon}
              alt=""
            />
            <Typography className={cls.content}>
              Shartnoma yuklab olish
            </Typography>
          </div>
          <div className={cls.download} onClick={invoiceBtn}>
            <img
              src="/images/cabineImage/downloadIcon.png"
              className={cls.icon}
              alt=""
            />
            <Typography className={cls.content}>To'lov shartnoma yuklab olish</Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FourthStep;
