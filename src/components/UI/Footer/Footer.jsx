import styles from "./style.module.scss";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Container, Typography } from "@mui/material";
import Link from "next/link";
import { rem } from "utils/pxToRem";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.box}>
          <div className={styles.address}>
            <div>
              <div className={styles.call}>
                <CallIcon />
                <Link href="tel:+998712008040">
                  <Typography
                    variant="body4"
                    color="#FFFFFF"
                    fontWeight="400"
                    marginLeft={rem(16)}
                    style={{cursor:"pointer"}}
                  >
                     +998 71 200 80 40
                  </Typography>
                </Link>
              </div>
              <div className={styles.location}>
                <LocationOnIcon />
                <Typography
                  variant="body4"
                  color="#FFFFFF"
                  fontWeight="400"
                  marginLeft={rem(16)}
                >
                  <a href="https://yandex.com/maps/10335/tashkent/?l=sat&ll=69.181398%2C41.297128&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=69.181269%2C41.297372&whatshere%5Bzoom%5D=19&z=19" target={"_blank"} rel="noreferrer" >
                    Toshkent shahar, Uchtepa tumani, Bogobod MFY, 15-mavze,
                    Foziltepa ko'chasi, 22A-uy
                  </a>
                </Typography>
                <div className={styles.crosshair_top_right}></div>
                <div className={styles.crosshair_top_left}></div>
                <div className={styles.crosshair_bottom_right}></div>
                <div className={styles.crosshair_bottom_left}></div>
              </div>
            </div>
            <div className={styles.map}>
              <div className={styles.crosshair_top_right}></div>
              <div className={styles.crosshair_top_left}></div>
              <div className={styles.crosshair_bottom_right}></div>
              <div className={styles.crosshair_bottom_left}></div>
              <div className={styles.googlemap} id="map">
                <iframe
                  src="https://yandex.com/maps/10335/tashkent/?l=sat&ll=69.181398%2C41.297128&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=69.181269%2C41.297372&whatshere%5Bzoom%5D=19&z=17"
                  // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1131.8791137739702!2d69.1817758!3d41.297373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8936c71f1759%3A0x1b50d14df3c7f528!2sFan%20va%20Texnologiya!5e1!3m2!1sen!2s!4v1672120814077!5m2!1sen!2s"
                  // width="800"
                  // height="256"
                  title="map"
                  style={{ border: "transparent" }}
                ></iframe>
              </div>
            </div>
          </div>

          <div className={styles.social}>
            <img src="/images/footerImage/logo.png" alt="" />
            <ul className={styles.networkList}>
              <li className={styles.networkItem}>
                <img src="/images/footerImage/telegram.png" alt="" />
              </li>
              <li className={styles.networkItem}>
                <img src="/images/footerImage/instagram.png" alt="" />
              </li>
              <li className={styles.networkItem}>
                <img src="/images/footerImage/facebook.png" alt="" />
              </li>
            </ul>
            <div className={styles.crosshair_top_right}></div>
            <div className={styles.crosshair_top_left}></div>
            <div className={styles.crosshair_bottom_right}></div>
            <div className={styles.crosshair_bottom_left}></div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
