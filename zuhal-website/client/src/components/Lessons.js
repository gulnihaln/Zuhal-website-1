import "./styles/Lessons.css";
import { Link } from "react-router-dom";
export default function Lessons() {
  return (
    <section className="lessons-container">
      <article className="lessons-article">
        <h1>
          <span>We're</span> Coming Soon
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          modi, harum, omnis reprehenderit a molestiae quidem exercitationem qui
          ipsam quas nam quisquam.
        </p>
        <Link to={"/contact"}>
          <button className="button-primary">Contact With Us</button>
        </Link>
      </article>
      <div className="lessons-image"></div>
    </section>
  );
}
