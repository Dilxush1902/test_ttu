import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getFacultySpeciality } from "services/facultyCost";
import cls from "./Accordion.module.scss";

const AccordionView = (props) => {
  const [data, setData] = useState({});
  const [expanded, setExpanded] = useState(false);

  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getData = () => {
    getFacultySpeciality().then((res) => setData(res?.data));
  };


  useEffect(() => getData(), []);

  return (
    <div className={cls.root}>
      {data?.facultyWithSpecialities?.map((item, index) => (
        <Accordion
          key={item.id}
          expanded={expanded === index}
          onChange={handleChange(index)}
          className={cls.accordion}
        >
          <AccordionSummary
            className={cls.accordionSummary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className={cls.accordionItems}>
              <div className={cls.icon}>
                <img
                  src={process.env.NEXT_PUBLIC_BASE_CDN_URL + item.image_url}
                  className={cls.image}
                  alt=""
                />
              </div>
              <div className={cls.content}>
                <span className={cls.info}>{item.name_uz}</span>
                <span className={cls.costs}>Narxlari</span>
              </div>
            </div>
          </AccordionSummary>
          {item?.specialities?.map((priceItem) => (
            <AccordionDetails key={priceItem.id} className={cls.details}>
              <div className={cls.row}>
                <p className={cls.rowTitle}>{priceItem.name_uz}</p>
                {priceItem.course_deadline >= 1 &&
                priceItem.price_daytime >= 1 ? (
                  <div className={cls.rowItem1}>
                    <p className={cls.dayTime}>
                      Kunduzgi{" "}
                      {priceItem.course_deadline
                        ? priceItem.course_deadline
                        : "-"}{" "}
                      yil
                    </p>
                    <p className={cls.twMillion}>
                      {priceItem.price_daytime === 0
                        ? "-"
                        : priceItem.price_daytime
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                    </p>
                  </div>
                ) : (
                  <div className={cls.rowItem1}>
                    <p className={cls.noText}>-</p>
                  </div>
                )}
                {priceItem.course_deadline_external >= 1 &&
                priceItem.price_external >= 1 ? (
                  <div className={cls.rowItem1}>
                    <p className={cls.dayTime}>
                      Sirtqi{" "}
                      {priceItem.course_deadline_external
                        ? priceItem.course_deadline_external
                        : "-"}{" "}
                      yil
                    </p>
                    <p className={cls.twMillion}>
                      {priceItem.price_external === 0
                        ? "-"
                        : priceItem.price_external
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                    </p>
                  </div>
                ) : (
                  <div className={cls.rowItem1}>
                    <p className={cls.noText}>-</p>
                  </div>
                )}
              </div>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionView;
