import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "./styles/Footer.css";

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
          <img src="https://via.placeholder.com/60x45.png" alt="" />
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
      <div className="footer-horizontal-line">
      </div>
      <section className="social-icon-container">
        <a href="">
          <BsFacebook className="social-icon" />
        </a>
        <a href="">
          <BsInstagram className="social-icon" />
        </a>
        <a href="">
          <BsTwitter className="social-icon" />
        </a>
      </section>
      <p>&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  );
}
