import React, { useState, useEffect } from "react";
import FaqSection from "./FaqSection";
import "./styles/FaqPage.css";
import "./styles/Lessons.css";
import { Link } from "react-router-dom";
import {
  covid,
  bridal,
  dayMakeUp,
  eveningMakeUp,
  contact,
  other,
} from "../utils/faqData";
import {commercial,general} from "./ImgTag";
export default function FaqPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [questionsData, setQuestionsData] = useState(covid);
  const [questionsHeading, setQuestionsHeading] = useState("Covid-19");

  function AsideMenuItem({ itemName, faqData }) {
    return (
      <h4
        className={questionsHeading === itemName ? "active" : ""}
        onClick={() => {
          setQuestionsData(faqData);
          setQuestionsHeading(itemName);
        }}
      >
        {itemName}
      </h4>
    );
  }
  return (
    <>
      <section style={{backgroundImage:`url(${general["coming-soon-bg-pattern.svg"].default})`}}  className="lessons-container">
        <article className="lessons-article">
          <h1 className="faq">Frequently Asked Questions</h1>
          <p>
            Got a question? Find our FAQs here. If your question hasn't been
            asnwered here, drop us a line or use our{" "}
            <Link to={"/contact"}>contact form.</Link>
          </p>
        </article>
        <div style={{backgroundImage:`url(${commercial["commercial2.jpg"].default})`}} className="lessons-image faq"></div>
      </section>

      <section className="faq-menu-container">
        <article className="faq-menu">
          <AsideMenuItem itemName={"Covid-19"} faqData={covid} />
          <AsideMenuItem itemName={"Bridal Hair & Makeup"} faqData={bridal} />
          <AsideMenuItem itemName={"Day Hair & Makeup"} faqData={dayMakeUp} />
          <AsideMenuItem itemName={"Contact"} faqData={contact} />
          <AsideMenuItem itemName={"Other"} faqData={other} />
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
