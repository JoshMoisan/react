import React from "react";


const Navbar = () => {

  const dropdown = () => {
    const dropdownMenu = document.getElementsByClassName("hidden")
    console.log(dropdownMenu)
    dropdownMenu.classList.remove("hidden")
    dropdownMenu.classList.add("show-menu")
    console.log("Click")
  }

  return(
    <div className="navbar">
      <div className="logo">
        <h1>YUMMY</h1>
      </div>
      <div className="options">
        <ul>
          <li>
            <a
              href="/"
              className="nav-link"
              exact="/"
            >
              HOME
            </a>
          </li>
          <li>
          <a
              href="/myprofile"
              className="nav-link"
            >
              PROFILE
            </a>
          </li>
          <li>
          <p
              className="nav-link"
              onClick={dropdown}
            >
              MORE <strong>+</strong>
            </p>
          </li>
        </ul>
        <p className="hidden">Hello</p>
      </div>
    </div>
  )
}

export default Navbar;
