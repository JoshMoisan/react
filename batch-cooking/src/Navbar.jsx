import React from "react";


const Navbar = () => {

  return(
    <div className="navbar">
      <div>
        <img src="#" />
        <h1>Yummy</h1>
      </div>
      <div className="options">
        <ul>
          <li>
            <a className="nav-link" href="#">Home</a>
          </li>
          <li>
            <a className="nav-link" href="#">Messages</a>
          </li>
          <li>
            <a className="nav-link" href="#">Options</a>
          </li>
        </ul>
      </div>
  </div>
  )
}

export default Navbar;
