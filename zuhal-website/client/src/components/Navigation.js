import { GoChevronDown } from "react-icons/go";
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
            <a href="/link1">Link 1</a>
            <a href="/link2">Link 2</a>
            <a href="/link3">Link 3</a>
          </div>
        </div>
        <a href="/Contact">Contact</a>
        <a href="/POrtfolio">Portfolio</a>
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
