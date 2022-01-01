import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import FaqSection from "./FaqSection";
import "./styles/FaqPage.css";
import { covid, bridal, dailyMakeUp, eveningMakeUp, contact } from "../faqData";
export default function FaqPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    {
      src: "https://i2.wp.com/zuhalmakeupartist.com/wp-content/uploads/2019/04/MG_8459dsdfddd.jpg?fit=1920%2C1362&ssl=1",
    },
    {
      src: "https://i0.wp.com/zuhalmakeupartist.com/wp-content/uploads/2019/04/3.jpg?fit=1920%2C2485&ssl=1",
    },
    {
      src: "https://i1.wp.com/zuhalmakeupartist.com/wp-content/uploads/2019/04/MG_7312ds.jpg?fit=1920%2C2707&ssl=1",
    },
  ];
  const [questionsData, setQuestionsData] = useState(covid);
  const [questionsHeading, setQuestionsHeading] = useState("Covid-19");

  return (
    <>
      <Slider images={images} />
      <section className="faq-menu-container">
        <article className="faq-menu">
          <h4
            className={questionsHeading === "Covid-19" ? "active" : ""}
            onClick={() => {
              setQuestionsData(covid);
              setQuestionsHeading("Covid-19");
            }}
          >
            Covid-19
          </h4>
          <h4
            className={
              questionsHeading === "Bridal Hair & Makeup" ? "active" : ""
            }
            onClick={() => {
              setQuestionsData(bridal);
              setQuestionsHeading("Bridal Hair & Makeup");
            }}
          >
            Bridal
          </h4>
          <h4
            className={
              questionsHeading === "Daily Hair & Makeup" ? "active" : ""
            }
            onClick={() => {
              setQuestionsData(dailyMakeUp);
              setQuestionsHeading("Daily Hair & Makeup");
            }}
          >
            Daily Hair & Makeup
          </h4>
          <h4
            className={
              questionsHeading === "Evening Hair & Makeup" ? "active" : ""
            }
            onClick={() => {
              setQuestionsData(eveningMakeUp);
              setQuestionsHeading("Evening Hair & Makeup");
            }}
          >
            Evening H.& Makeup
          </h4>
          <h4
            className={questionsHeading === "Contact" ? "active" : ""}
            onClick={() => {
              setQuestionsData(contact);
              setQuestionsHeading("Contact");
            }}
          >
            Contact
          </h4>
        </article>
        <article className="faq-menu-items">
          <h3>{questionsHeading}</h3>
          <ul>
            {questionsData.map((question, index) => (
              <FaqSection key={index} question={question} />
            ))}
          </ul>
        </article>
      </section>
    </>
  );
}
