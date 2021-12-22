import React, { useState } from "react";
import FaqSection from "./FaqSection";
import {
  covid,
  bridal,
  dailyMakeUp,
  eveningMakeUp,
  contact,
} from "../faqData";
export default function FaqPage() {
  const [questionsData, setQuestionsData] = useState(covid);
  return (
    <>
      <section>Carusel Will be HERE!!!</section>
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
