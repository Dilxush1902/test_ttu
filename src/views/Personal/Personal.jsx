import React from "react";
import { Container } from "@mui/material";
import PersonalSteps from "components/UI/Personal/PersonalSteps/PersonalSteps";
import cls from "./style.module.scss";
import Navbar from "components/UI/Navbar/Navbar";

const Personal = () => {
  return (
    <>
      <Navbar />
      <div className={cls.box}>
        {" "}
        <Container className={cls.container}>
          <PersonalSteps />
        </Container>
      </div>
    </>
  );
};

export default Personal;
