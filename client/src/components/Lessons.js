import "./styles/Lessons.css";
import { Link } from "react-router-dom";
import { general, editorial, commercial } from "./ImgTag";
export default function Lessons() {
	return (
		<section
			style={{
				backgroundImage: `url(${general["coming-soon-bg-pattern.svg"].default})`,
			}}
			className="lessons-container"
		>
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
					<button className="button-primary">Contact Us</button>
				</Link>
			</article>
			<div
				style={{
					backgroundImage: `url(${commercial["commercial3.jpg"].default})`,
				}}
				className="lessons-image lessons"
			></div>
		</section>
	);
}
