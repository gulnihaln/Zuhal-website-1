import React, { useState } from "react";
import Slider from "./Slider";
import FaqSection from "./FaqSection";
import {
  covid,
  bridal,
  dailyMakeUp,
  eveningMakeUp,
  contact,
} from "../faqData";
export default function FaqPage() {
  const images = [
    { src: "https://via.placeholder.com/1440x400.png" },
    { src: "https://via.placeholder.com/1410x400.png" },
    { src: "https://via.placeholder.com/1400x400.png" },
  ];
  const [questionsData, setQuestionsData] = useState(covid);
  return (
    <>
      <Slider images={images} />
      <section>
        <article>
          <h4 onClick={() => setQuestionsData(covid)}>
            Covid-19
          </h4>
          <h4 onClick={() => setQuestionsData(bridal)}>
            Bridal
          </h4>
          <h4 onClick={() => setQuestionsData(dailyMakeUp)}>
            Daily Hair & Makeup
          </h4>
          <h4
            onClick={() => setQuestionsData(eveningMakeUp)}
          >
            Evening Hair & Makeup
          </h4>
          <h4 onClick={() => setQuestionsData(contact)}>
            Contact
          </h4>
        </article>
        <article>
          {questionsData.map((question, index) => (
            <FaqSection key={index} question={question} />
          ))}
        </article>
      </section>
    </>
  );
}
