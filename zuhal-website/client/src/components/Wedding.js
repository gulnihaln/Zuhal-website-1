import Slider from "./Slider";
import { bridal } from "../utils/faqData";
import FaqSection from "./FaqSection";
import "./styles/Bridal.css";

export default function Wedding() {
  const images = [
    { src: "http://localhost:5000/uploads/bridal/bridal1.jpg" },
    { src: "http://localhost:5000/uploads/bridal/bridal2.jpg" },
    { src: "http://localhost:5000/uploads/bridal/bridal001.jpg" },
  ];


  return (
    <>
      <section>
        <Slider images={images} />
      </section>
      <section className="bridal-article-container">
        <article className="bridal-article">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            excepturi. Eveniet tempora neque ratione assumenda consequatur autem
            sunt ipsam veniam!
          </p>
          <img
            src="http://localhost:5000/uploads/bridal/bridal1.jpg"
            alt="placeholder"
          />
        </article>
        <article className="bridal-article">
          <img
            src="http://localhost:5000/uploads/bridal/bridal2.jpg"
            alt="placeholder"
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            excepturi. Eveniet tempora neque ratione assumenda consequatur autem
            sunt ipsam veniam!
          </p>
        </article>
      </section>
      <section className="faq-section">
        <article>
          <h2>
            <span>WEDDING MAKEUP</span> FAQ
          </h2>
          <p className="faq-section-paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sed
            ipsam aspernatur minus eveniet, distinctio culpa pariatur quae
            doloremque sapiente.
          </p>
        </article>
        <ul>
          {bridal.map((question) => (
            <FaqSection question={question} />
          ))}
        </ul>
      </section>
    </>
  );
}
