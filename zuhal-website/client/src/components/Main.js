
import Slider from "./Slider";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    { src: "https://via.placeholder.com/1440x400.png" },
    { src: "https://via.placeholder.com/1400x400.png" },
    { src: "https://via.placeholder.com/1410x400.png" },
  ];

  return (
    <>
      <Slider images={images} />
      <section className="section-intro">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quis
          id consectetur, tempore iusto iure atque cumque ullam excepturi
          dolores explicabo. Non error suscipit saepe dolor, labore deleniti nam
          est?
        </p>
        <button>Lorem ipsum</button>
        <img src="" alt=""></img>
      </section>
      <section className="sectionQuote">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          aliquid.
        </p>
        <p className="quoteAuthor">Lorem ipsum dolor</p>
      </section>
      <section>
        <img src="https://via.placeholder.com/650x350.png" alt=""></img>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, error.
        </p>
      </section>
    </>
  );
}
