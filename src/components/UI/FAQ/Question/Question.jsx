import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import cls from "./Question.module.scss";
import { rem } from "utils/pxToRem";

const Question = ({ title, answer, index, expanded, onChange }) => {
  // const [expanded, setExpanded] = useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };
  return (
    <div className={cls.faq}>
      <Accordion
        expanded={expanded === index}
        onChange={onChange}
        sx={{
          padding: "12px 24px",
        }}
        className={cls.accordion}
      >
        <AccordionSummary
          expandIcon={
            <img
              src="/images/faqImage/chevronDown.png"
              style={{ width: rem(24), height: rem(24) }}
              alt="open"
            />
          }
        >
          {title}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            fontWeight: "400",
            fontSize: { xs: "14px", sm: "18px" },
            lineHeight: "26px",
            color: "#6A6A6A",
          }}
        >
          {answer}
        </AccordionDetails>
        <div className={cls.crosshair_top_right}></div>
        <div className={cls.crosshair_top_left}></div>
        <div className={cls.crosshair_bottom_right}></div>
        <div className={cls.crosshair_bottom_left}></div>
      </Accordion>
    </div>
  );
};

export default Question;
