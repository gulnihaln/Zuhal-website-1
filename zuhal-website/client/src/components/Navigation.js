import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";
import { dropdown } from "../utils/DropdownData";
import { GiHamburgerMenu } from "react-icons/gi";
import TopNav from "./TopNav";

import "./styles/Navigation.css";

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  let { pathname } = useLocation();
  console.log(pathname);

  const openDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  const openSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <section className="allnav">
        <TopNav />
        <div className="hamburger-menu">
          <GiHamburgerMenu
            style={{ cursor: "pointer" }}
            size={40}
            onClick={() => {
              openSidebar();
            }}
          />
        </div>
        <nav className={sidebar ? "navbar" : "navbar active"}>
          <Link to="#" className="logo-img">
            <img
              className="logo"
              src="http://localhost:5000/uploads/logo/logo.jpg"
              alt="logo"
            />
          </Link>
          <Link to="/">
            <FaHome style={{ margin: "0 5 3 0" }} />
            Home
          </Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/portfolio">Portfolio</Link>
          <div className="dropdown">
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
      </section>
    </>
  );
}
