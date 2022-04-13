import { Link } from "react-router-dom";
import styled from "styled-components";
import { CgChevronDown } from "react-icons/cg";
import { dropdown } from "../utils/DropdownData";
// import { useState } from "react";

const Ul = styled.ul`
list-style:none;
display:flex;
flex-flow:row nowrap;
display: flex;
align-items:center;
justify-content:flex-end;
width: 40%;
list-style: none;
right: 5px;
top: 10px;

a{
  padding: 14px 16px;
  color: rgb(10, 9, 9);
  transition: 0.5s ease;
}
a:hover{
  background-color: transparent;
  text-decoration: underline;
}

li{
	padding: 18px 10px
	height: 60px;
}
// li a{
//   color: var(--secondary);
//   font-size:large;
//   font-weight: bolder;
// }
li:hover{
   transform: translateY(-2px);
   transition: 0.5s ease-in-out;
}
@media(max-width: 768px){
  flex-flow: column-reverse nowrap;
  justify-content: space-around;
  height: auto;
  transform:${({ openMenu }) =>
    openMenu ? "translateX(0)" : "translateX(100%)"};
  position: fixed;
  right: 0;
  top: 0;
  width: 50vw;
  height: 100vh;
  background-color:#26272b ;
  border-radius: 5px;
  padding-top: 3.5rem;
  z-index: 3;
  transition: 0.35s ease-in-out;
  li a{
	color:white;
}
}

`;

export default function RightNav({
  onClickHandler,
  openMenu,
  dropdownOpen,
  openDropdown,
}) {
  return (
    <Ul className="nav-links" openMenu={openMenu}>
      <li>
        <Link to="/" openMenu={openMenu} onClick={onClickHandler}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/aboutMe" onClick={onClickHandler}>
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={onClickHandler}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/portfolio" onClick={onClickHandler}>
          Portfolio
        </Link>
      </li>
      <li>
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
                  <li onClick={onClickHandler}>
                    <Link
                      onClick={(s) => {
                        openDropdown();
                      }}
                      key={index}
                      to={data.to}
                    >
                      {data.title}
                    </Link>
                  </li>
                );
              })}
            </div>
          )}
        </div>
      </li>
    </Ul>
  );
}
