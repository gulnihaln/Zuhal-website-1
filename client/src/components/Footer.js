import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import "./styles/Footer.css";
import ImgTag from "./ImgTag";

export default function Footer() {
	return (
		<footer className="footer">
			<section className="footer-links">
				<ul className="left-footer-links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/loyaltyandgiftcard">Loyal & Gift Card</Link>
					</li>
				</ul>
				<Link className="footer-logo" to="/">
					{/* <img src="https://via.placeholder.com/60x45.png" alt="" /> */}
					<ImgTag
						category="general"
						imgLink="Logo1.png"
						alt="logo"
						className="footer-logo"
					/>
				</Link>
				<ul className="right-footer-links">
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/faq">FAQ</Link>
					</li>
				</ul>
			</section>
			<div className="footer-horizontal-line"></div>
			<section className="social-icon-container">
				<a href="https://m.facebook.com/zuhalmakeupartist/" target={"_blank"}>
					<BsFacebook className="footer-facebook" />
				</a>
				<a href="https://www.instagram.com/callmezuhall/" target={"_blank"}>
					<BsInstagram className="footer-instagram" />
				</a>
				<a href="">
					<FaTiktok className="footer-tiktok" />
				</a>
			</section>
			<p>&copy; Copyright Ping. All rights reserved.</p>
		</footer>
	);
}
