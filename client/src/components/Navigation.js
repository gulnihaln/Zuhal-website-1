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
				<nav className="navbar">
					<Link to="/" className="logo-img">
						<ImgTag
							category="general"
							imgLink="Logo.jpg"
							alt="logo"
							className="logo-img"
						/>
					</Link>
					<BurgerMenu openDropdown={openDropdown} dropdownOpen={dropdownOpen} />
				</nav>
			</section>
		</>
	);
}
