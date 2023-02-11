import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "./DrawerItem.module.scss";
import { rem } from "utils/pxToRem";
import CustomButton from "components/UI/Button/CustomButton";
import { useRouter } from "next/router";
import { getFaculty } from "services/faculty";
import cookies from "js-cookie";

const useStyles = makeStyles({
  root: {
    background: "rgba(0, 0, 0, 0.1)",
    "& .MuiPaper-root": {
      width: "32%",
      ["@media (max-width: 850px)"]: {
        width: "50%",
      },
      ["@media (max-width: 600px)"]: {
        width: "100%",
      },
      // height: "100vh",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid rgba(0, 0, 0, 0.12) !important",
    },
  },
});

const DrawerItem = ({ open, onClose }) => {
  const userId = cookies.get("userId");

  const classes = useStyles();
  const [styleList, setStyleList] = useState();
  const [facultyList, setFacultyList] = useState();
  const router = useRouter();

  const menuList = [
    userId && {
      title: "Shaxsiy kabinet",
      link: "/personal",
    },
    {
      title: "Universitet haqida",
      link: "/",
    },
    {
      title: "Yo'nalishlar",
      // link: "#",
    },
    {
      title: "Narxlar",
      link: "/costs",
    },
    // {
    //   title: "Qabul jarayoni",
    //   link: "/admission",
    // },

    {
      title: "Savol-javob (FAQ)",
      link: "/faq",
    },
  ];

  useEffect(() => {
    if (open) getFaculty().then((res) => setFacultyList(res?.data?.faculties));
  }, [open]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      className={classes.root}
    >
      <div className={styles.box}>
        <div className={styles.body}>
          <div className={styles.images}>
            <Link href="/">
              <img
                src="https://test.cdn.ttu.uz/images/51cda90e-fb46-47af-9b0b-02822f008bee_TTU-logo-03.svg"
                width="72px"
                height="44.9px"
                alt=""
              />
            </Link>
            <ClearIcon onClick={onClose} className={styles.xIcon} />
          </div>
          <ul className={styles.list}>
            {menuList.map((el, index) => (
              <li
                key={index}
                className={styleList === index ? styles.item : styles.listItem}
              >
                {el?.title === "Yo'nalishlar" ? (
                  <Accordion
                    sx={{
                      background: "white",
                      paddingLeft: { xs: "0", sm: "0px" },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <img
                          src="/images/faqImage/chevronDown.png"
                          style={{
                            width: rem(20),
                            height: rem(20),
                          }}
                          alt="open"
                        />
                      }
                      sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        "&:hover": {
                          color: "red !important",
                        },
                      }}
                    >
                      Yo'nalishlar
                    </AccordionSummary>
                    {facultyList?.map((item, index) => (
                      <AccordionDetails
                        id="accordion"
                        key={item.id}
                        onClick={() => {
                          router.push(`/faculty/${item.id}`), onClose();
                        }}
                        sx={{
                          marginLeft: "10px",
                          cursor: "pointer",
                          "&:hover": {
                            color: "red !important",
                          },
                          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
                        }}
                      >
                        <p
                          style={{
                            width: "358px",
                            padding: 0,
                            margin: 0,
                            lineHeight: "42px",
                            fontWeight: 500,
                          }}
                        >
                          {item.name_uz}
                        </p>
                      </AccordionDetails>
                    ))}
                  </Accordion>
                ) : (
                  <p
                    onClick={() => {
                      router.push(el.link), onClose(), setStyleList(index);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {el?.title}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <div className={styles.call}>
            <CallIcon
              sx={{
                color: "#84919A",
              }}
            />
            <Link href="tel:+998712008040">
              <Typography
                style={{cursor:"pointer"}}
                variant="body4"
                color="#84919A"
                fontWeight="700"
                marginLeft={rem(16)}
                className={styles.number}
              >
                 +998 71 200 80 40
              </Typography>
            </Link>
          </div>
          <div className={styles.location}>
            <LocationOnIcon
              sx={{
                color: "#84919A",
              }}
            />
            <Typography
              variant="body4"
              color="#84919A"
              fontWeight="700"
              marginLeft={rem(16)}
              lineHeight="21px"
              className={styles.address}
            >
              <a
                href="https://yandex.com/maps/10335/tashkent/?l=sat&ll=69.181398%2C41.297128&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=69.181269%2C41.297372&whatshere%5Bzoom%5D=19&z=19"
                target={"_blank"}
                rel="noreferrer"
              >
                Toshkent shahar, Uchtepa tumani, Bogobod MFY, 15-mavze,
                Foziltepa ko'chasi, 22A-uy
              </a>
            </Typography>
          </div>
        </div>

        <div className={styles.button}>
          <Link href="https://t.me/ttualoqabot" target="_blank">
            <a target="_blank">
              <CustomButton
                // onClick={() => router.push("registration")}
                drawerWidth
                className={styles.btn}
              >
                <img
                  src="/images/headerImage/chatIcon.png"
                  className={styles.chatIcon}
                  alt=""
                />
                {/* <Image
              width={20}
              height={20}
            /> */}
                <span>Biz bilan aloqaga chiqing</span>
              </CustomButton>
            </a>
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerItem;
