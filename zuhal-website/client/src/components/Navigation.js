import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/aboutme">About Me</Link>
        <div className="dropdown">
          <button className="dropbtn">
            Services
            <i className="fa fa-caret-down"></i>
          </button>

          <div className="dropdown-content">
            <Link to="/bridal">Bridal Hair & Makeup</Link>
            <Link to="/dailyhairandmakeup">
              Day Hair & Makeup
            </Link>
            <Link to="/eveninghairandmakeup">
              Evening Hair & Makeup
            </Link>
            <Link to="/browthreadingandtinting">
              Brow Threading & Tinting
            </Link>
            <Link to="/loyaltyandgiftcard">
              Loyalty & Gift Cards
            </Link>
            <Link to="/lessons">Makeup Lessons</Link>
          </div>
        </div>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    </>
  );
}
