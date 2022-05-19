import { BsFacebook, BsInstagram } from "react-icons/bs";
import { MdAlternateEmail, MdPhoneIphone } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import "./styles/TopNavStyle.css";
export default function TopNav() {
	return (
		<section className="top-nav-container">
			<article className="top-nav">
				<MdPhoneIphone className="icon" />
				<p>1234567890</p>
				<MdAlternateEmail className="icon" />
				<p>zuhalmakeupbookings@hotmail.com</p>
			</article>
			<article className="top-nav">
				<a href="https://m.facebook.com/zuhalmakeupartist/" target={"_blank"}>
					<BsFacebook className="facebook" />
				</a>
				<a href="https://www.instagram.com/callmezuhall/" target={"_blank"}>
					<BsInstagram className="instagram" />
				</a>
				<a href="">
					<FaTiktok className="tiktok" />
				</a>
			</article>
		</section>
	);
}
