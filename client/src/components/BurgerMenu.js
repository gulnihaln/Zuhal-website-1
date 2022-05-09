import React, { useState } from "react";
import RightNav from "./RightNav";

export default function BurgerMenu({ dropdownOpen, openDropdown }) {
	const [open, setOpen] = useState(false);

	const onClickHandler = () => {
		setOpen(!open);
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
						backgroundColor: open ? "grey" : "black",
						transform: open ? "rotate(45deg)" : "rotate(0)",
					}}
				></div>
				<div
					className="burger-menu-div"
					style={{
						backgroundColor: open ? "grey" : "black",
						transform: open ? "translateX(100%)" : "translateX(0)",
						opacity: open ? 0 : 1,
					}}
				></div>
				<div
					className="burger-menu-div"
					style={{
						backgroundColor: open ? "grey" : "black",
						transform: open ? "rotate(-45deg)" : "rotate(0)",
					}}
				></div>
			</div>
			<RightNav
				onClickHandler={onClickHandler}
				open={open}
				openDropdown={openDropdown}
				dropdownOpen={dropdownOpen}
			/>
		</>
	);
}
