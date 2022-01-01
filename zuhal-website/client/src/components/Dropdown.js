import { dropdown } from "./DropdownData";
import { Link } from "react-router-dom";

export default function Dropdown({ dropdownOpen }) {
  return (
    <>
      {dropdown.map((data, index) => {
        return (
          <Link onClick={dropdownOpen} key={index} to={data.to}>
            {data.title}
          </Link>
        );
      })}
    </>
  );
}
