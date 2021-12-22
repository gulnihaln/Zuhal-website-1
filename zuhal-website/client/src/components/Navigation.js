// import { GoChevronDown } from "react-icons/go";
// import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <div class="navbar">
        <a href="home">Home</a>
        <a href="/AboutMe">About Me</a>
        <div class="dropdown">
          <button class="dropbtn">
            Services
            <i class="fa fa-caret-down"></i>
          </button>

          <div class="dropdown-content">
            <a href="/a1">a 1</a>
            <a href="/a2">a 2</a>
            <a href="/a3">a 3</a>
          </div>
        </div>
        <a href="/Contact">Contact</a>
        <a href="/Portfolio">Portfolio</a>
        {/* <div class="dropdown">
          <select name="cars" id="cars">
            <optgroup label="Services">
              <option value="/DayHairAndMakeup">Day Hair and Makeup</option>
              <option value="/EveningHairAndMakeup">
                Evening Hair and Makeup
              </option>
              <option value="/BrowThreadingAndTinting">
                Brow Threading and Tinting
              </option>
            </optgroup>
          </select> */}

        {/* <div class="dropdown-content"></div>
        </div> */}
      </div>
    </>
  );
}
