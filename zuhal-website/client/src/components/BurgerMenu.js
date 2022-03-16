import React, { useState } from "react";
import RightNav from "./RightNav";

export default function BurgerMenu({ dropdownOpen, openDropdown }) {
  const [openMenu, setOpenMenu] = useState(false);

  const onClickHandler = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div
        className="burger-menu"
        role="button"
        tabIndex={0}
        onClick={onClickHandler}
      >
        <div
          className="burger-menu-div"
          style={{
            backgroundColor: openMenu ? "grey" : "black",
            transform: openMenu ? "rotate(45deg)" : "rotate(0)",
          }}
        ></div>
        <div
          className="burger-menu-div"
          style={{
            backgroundColor: openMenu ? "grey" : "black",
            transform: openMenu ? "translateX(100%)" : "translateX(0)",
            opacity: openMenu ? 0 : 1,
          }}
        ></div>
        <div
          className="burger-menu-div"
          style={{
            backgroundColor: openMenu ? "grey" : "black",
            transform: openMenu ? "rotate(-45deg)" : "rotate(0)",
          }}
        ></div>
      </div>
      <RightNav
        onClickHandler={onClickHandler}
        openMenu={openMenu}
        openDropdown={openDropdown}
        dropdownOpen={dropdownOpen}
      />
    </>
  );
}
