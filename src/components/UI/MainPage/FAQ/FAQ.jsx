import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import cls from "./FAQ.module.scss";
import { rem } from "utils/pxToRem";
import { getFAQ } from "services/faq";

const FAQ = () => {
  const [faq, setFaq] = useState();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    getFAQ().then((res) => setFaq(res?.data?.questions));
  }, []);

  return (
    <div className={cls.faq}>
      <Container className={cls.container}>
        <div className={cls.text}>
          <Typography className={cls.title}>Savol-javob</Typography>
          <div className={cls.crosshair_top_right}></div>
          <div className={cls.crosshair_top_left}></div>
          <div className={cls.crosshair_bottom_right}></div>
          <div className={cls.crosshair_bottom_left}></div>
        </div>
        {faq &&
          faq.map((item, index) => (
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
              key={item.id}
              sx={{
                padding: "12px 24px",
                borderTop: index === expanded && "1px solid #EBEBEB!important",
              }}
              className={cls.accordion}
            >
              <AccordionSummary
                className={cls.summary}
                expandIcon={
                  <img
                    src="/images/faqImage/chevronDown.png"
                    style={{
                      width: rem(24),
                      height: rem(24),
                    }}
                    alt="open"
                  />
                }
              >
                {item.title_uz}
              </AccordionSummary>
              <AccordionDetails className={cls.description}>
                {item.description_uz}
              </AccordionDetails>
              <div className={cls.crosshair_top_right}></div>
              <div className={cls.crosshair_top_left}></div>
              <div className={cls.crosshair_bottom_right}></div>
              <div className={cls.crosshair_bottom_left}></div>
            </Accordion>
          ))}

        <div className={cls.space}></div>
      </Container>
    </div>
  );
};

export default FAQ;
