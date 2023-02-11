import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import cls from "./Modal.module.scss";
import CustomButton from "components/UI/Button/CustomButton";
import { useRouter } from "next/router";
import { useIsMobile } from "utils/getWindowSize";

const style = {
  position: "absolute",
  width: "461px!important",
  ["@media (max-width: 600px)"]: {
    width: "90%",
    p: "30px",
  },
  padding: "30px 0",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  textAlign: "center",
};

const ModalPage = ({ setActiveStep, setInputDisable, open, handleClose }) => {
  const isMobile = useIsMobile(600);

  const router = useRouter();
  return (
    <div className={cls.modal}>
      <Modal
        className={cls.smth}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={cls.box}>
          <div style={{ textAlign: "center", position:"relative" }}>
            <img
              src="/images/cabineImage/checked.png"
              className={cls.image}
              style={{ width: "56px", height: "50px" }}
              alt=""
            />
          </div>
          <img
              onClick={handleClose}
              src="/images/cabineImage/XIcon.svg"
              className={cls.close}
              style={{ width: "24px", height: "24px", position:"absolute", top: "12px", right:"12px"}}
              alt=""
            />
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "16px", sm: "24px" },
              lineHeight: "20px",
              color: "#202020",
            }}
          >
            Arizangiz muvaffaqiyatli yuborildi{" "}
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#747474",
              marginTop: "8px",
              padding: "0 20px",
              marginBottom: "16px",
            }}
          >
            Keyingi bosqichda imtihon haqida ma’lumot olishingiz mumkin{" "}
          </Typography>
          <CustomButton
            onClick={() => {
              // router.push("/personal"),
              // setInputDisable(true),
              handleClose();
              if (isMobile[0]) {
                router.push("/personal");
              } else {
                // setActiveStep(2);
                window.location.reload();
              }
            }}
            fullWidth
          >
            Keyingi bosqichga o’tish
          </CustomButton>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalPage;
