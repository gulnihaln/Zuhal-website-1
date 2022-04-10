import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { CgChevronDown } from "react-icons/cg";
// import { dropdown } from "../utils/DropdownData";
import TopNav from "./TopNav";
import "./styles/Navigation.css";
import BurgerMenu from "./BurgerMenu";
import ImgTag from "./ImgTag";

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [sidebar, setSidebar] = useState(false);
  let { pathname } = useLocation();
  console.log(pathname);

  const openDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  // const closeDropdown = () => {
  //   setDropdownOpen(false);
  // };
  // const openSidebar = () => {
  //   setSidebar(!sidebar);
  // };

  return (
    <>
      <section className="allnav">
        <TopNav />
        {/* <div className="hamburger-menu">
          {/* <GiHamburgerMenu
            style={{ cursor: "pointer" }}
            size={40}
            onClick={() => {
              openSidebar();
            }}
          /> */}
        {/* </div> */}
        <nav className="navbar">
          <Link to="/" className="logo-img">
            <ImgTag category="general" imgLink="Logo.jpg" alt="logo" className="logo-img" />
          </Link>
          <BurgerMenu openDropdown={openDropdown} dropdownOpen={dropdownOpen} />
          {/* <Link to="/">Home</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/portfolio">Portfolio</Link>
          <div className="dropdown">
            <button onClick={openDropdown} className="dropbtn">
              Services
              <CgChevronDown />
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
          </div> */}
        </nav>
      </section>
    </>
  );
}
