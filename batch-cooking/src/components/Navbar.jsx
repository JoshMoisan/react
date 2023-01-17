import React from "react";


const Navbar = () => {

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
          <a
              href="/oops"
              className="nav-link"
              exact="/"
            >
              MORE
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
