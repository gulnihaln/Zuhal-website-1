import React, { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import "./styles/FaqSection.css";

export default function FaqSection({ question }) {
  const [activeClass, setActiveClass] = useState("");
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const listStyle = {
    listStyleType: "none",
  };
  return (
    <li className="faq-qa-container" style={listStyle}>
      <span>{isAnswerOpen ? <GoChevronDown /> : <GoChevronRight />}</span>
      <p
        className="faq-question"
        onClick={() => {
          setActiveClass((prev) => (prev === "active" ? "" : "active"));
          setIsAnswerOpen((prev) => !prev);
        }}
      >
        {question.question}
      </p>
      <p className={`faq-answer ${activeClass}`}>{question.answer}</p>
    </li>
  );
}
