import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <section>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/loyaltyandgiftcard">
              Loyal & Gift Card
            </Link>
          </li>
        </ul>
        <Link to="/">
          <img
            src="https://via.placeholder.com/100x75.png"
            alt=""
          />
        </Link>
        <ul>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <a href="http://localhost:3000/">
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </section>
    </footer>
  );
}
