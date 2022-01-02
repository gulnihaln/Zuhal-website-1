import { dropdown } from "./DropdownData";
import { Link } from "react-router-dom";

export default function Dropdown() {
  return (
    <>
      {dropdown.map((data) => {
        return <Link to={data.to}>{data.title}</Link>;
      })}
    </>
  );
}
