import Slider from "./Slider";
import { bridal } from "../utils/faqData";
import FaqSection from "./FaqSection";
import "./styles/Bridal.css";
export default function Wedding() {
  const images = [
    { src: "https://via.placeholder.com/1440x410.png" },
    { src: "https://via.placeholder.com/1400x420.png" },
    { src: "https://via.placeholder.com/1410x430.png" },
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
          <img src="https://via.placeholder.com/400x600" alt="placeholder" />
        </article>
        <article className="bridal-article">
          <img src="https://via.placeholder.com/400x600" alt="placeholder" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            excepturi. Eveniet tempora neque ratione assumenda consequatur autem
            sunt ipsam veniam!
          </p>
        </article>
      </section>

      <section className="bridal-faq">
        <article>
          <h2>
            <span>WEDDING MAKEUP</span> FAQ
          </h2>
          <p className="bridal-faq-paragraph">
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
