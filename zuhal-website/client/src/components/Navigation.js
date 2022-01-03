import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";
import { dropdown } from "../utils/DropdownData";
import { MdContactMail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import "./styles/Navigation.css";

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const openDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <div className="hamburger-menu">
        <GiHamburgerMenu size={40} />
      </div>
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
        <Link to="/contact">
          <MdContactMail style={{ margin: "0 5 3 0" }} />
          Contact
        </Link>
        <Link to="/portfolio">
          <GrGallery style={{ color: "white" }} />
          Portfolio
        </Link>
        <div className="dropdown" onMouseLeave={closeDropdown}>
          <button onClick={openDropdown} className="dropbtn">
            Services
            <BsFillCaretDownFill />
          </button>

          {dropdownOpen === true && (
            <div
              className="dropdown-content"
              // style={{ position: "fixed", top: "0", right: "O" }}
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
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
