import Slider from "./Slider";
import "./styles/SpecialOccasions.css";
import { specialOccasion } from "../utils/faqData";
import FaqSection from "./FaqSection";

export default function SpecialOccasions() {
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

  return (
    <>
      <Slider images={images} />
      <section className="occasion-middle-container">
        <img
          className="occasion-middle-img"
          src="http://localhost:5000/uploads/specialoccasions/image4.jpg"
          alt=""
        ></img>
        <p className="p-middle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
          ratione totam laudantium ducimus quos praesentium veniam ipsam harum
          nam minima sit voluptatem nihil, doloremque id aperiam tempore quae
          quis consequatur iusto. Inventore aperiam, minima nobis quidem fugit
          odio delectus totam?
        </p>
      </section>
      <section className="faq-section">
        <article>
          <h2>
            <span>SPECIAL OCCASION</span> FAQ
          </h2>
          <p className="faq-section-paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sed
            ipsam aspernatur minus eveniet, distinctio culpa pariatur quae
            doloremque sapiente.
          </p>
        </article>
        <ul>
          {specialOccasion.map((question) => (
            <FaqSection question={question} />
          ))}
        </ul>
      </section>
    </>
  );
}
