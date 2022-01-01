import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";
import { dropdown } from "./DropdownData";
import { MdContactMail } from "react-icons/md";
import "./styles/Navigation.css";

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  console.log(dropdownOpen);

  const openDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="#">
          <img
            className="logo"
            src="/zuhal-cropped-logo-3-white-pink-16-3.png"
            alt="logo"
          ></img>
        </Link>
        <Link to="/">
          <FaHome style={{ margin: "0 5 3 0" }} />
          Home
        </Link>
        <Link to="/aboutme">About Me</Link>
        <div className="dropdown" onMouseLeave={closeDropdown}>
          <button onClick={openDropdown} className="dropbtn">
            Services
            <BsFillCaretDownFill />
          </button>
          {dropdownOpen === true && (
            <div
              className="dropdown-content"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {dropdown.map((data, index) => {
                return (
                  <Link
                    onClick={(s) => {
                      openDropdown();
                    }}
                    key={index}
                    to={data.to}
                  >
                    {data.title}
                  </Link>
                );
              })}
              {/* <Link to="/bridal">Bridal Hair & Makeup</Link>
              <Link to="/dailyhairandmakeup">Day Hair & Makeup</Link>
              <Link to="/eveninghairandmakeup">Evening Hair & Makeup</Link>
              <Link to="/browthreadingandtinting">
                Brow Threading & Tinting
              </Link>
              <Link to="/loyaltyandgiftcard">Loyalty & Gift Cards</Link>
              <Link to="/lessons">Makeup Lessons</Link> */}
            </div>
          )}
        </div>
        <Link to="/contact">
          <MdContactMail style={{ margin: "0 5 3 0" }} />
          Contact
        </Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    </>
  );
}
