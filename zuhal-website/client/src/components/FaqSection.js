import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";

export default function FaqSection({ question }) {
  const [display, setDisplay] = useState("none");
  return (
    <ul>
      <li>
        <p
          onClick={() =>
            setDisplay((prev) => {
              return prev === "none" ? "block" : "none";
            })
          }
        >
          <GoChevronDown />
          {question.question}
        </p>
        <p style={{ display: `${display}` }}>
          {question.answer}
        </p>
      </li>
    </ul>
  );
}
