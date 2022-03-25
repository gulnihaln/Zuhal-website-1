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
      <h2 className="bridal-title">
        Bridal Hair & Makeup to make you look and feel amazing on your big Day
      </h2>
      <section className="bridal-article-container">
        <p>
          Congratulations on planning your wedding day! This is one of the most
          important days of your life so your hair and makeup should be planned
          without any compromise. You need an experienced Artist who gets to
          know you, your personality and your style. Someone who will care to
          bring the best in your look and makeup to make you look and feel
          stunning.
        </p>
        <article className="bridal-article">
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
        </article>
        <p>
          Zuhal’s bridal hair and makeup services will help you feel confident
          and beautiful through out your wedding day so you can look back at
          your photos and remember how amazing you felt.
        </p>
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
