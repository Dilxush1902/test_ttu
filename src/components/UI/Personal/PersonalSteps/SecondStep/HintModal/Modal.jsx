import { Box, Modal } from "@mui/material";
import React from "react";
import styles from "./style.module.scss";

const HintModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose} className={styles.modal}>
        <div className={styles.box}>
          <div className={styles.titleBlock}>
            <h3>PINFL</h3>
            <span onClick={handleClose}>
              <img className={styles.closeIcon} src="/images/closeIcon.svg" alt="close" />
            </span>
          </div>
          <div className={styles.imageBlock}>
            <img className={styles.imagePin} src="/images/hintImage/IDCartPINFL.png" alt="PINFL" />
            <img className={styles.imagePin} src="/images/hintImage/PassportPINFL.png" alt="PINFL" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HintModal;
