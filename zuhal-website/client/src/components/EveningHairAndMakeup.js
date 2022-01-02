import Slider from "./Slider";
import "./styles/EveningHairAndMakeup.css";
import { eveningMakeUp } from "../utils/faqData";
import FaqSection from "./FaqSection";


export default function EveningHairAndMakeup() {
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
      <section className="evening-middle-container">
        <img
          className="evening-middle-img"
          src="https://via.placeholder.com/650x350.png"
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
            <span>EVENING MAKEUP</span> FAQ
          </h2>
          <p className="faq-section-paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sed
            ipsam aspernatur minus eveniet, distinctio culpa pariatur quae
            doloremque sapiente.
          </p>
        </article>
        <ul>
          {eveningMakeUp.map((question) => (
            <FaqSection question={question} />
          ))}
        </ul>
      </section>
    </>
  );
}
