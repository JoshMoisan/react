import React from "react";


const Navbar = () => {

  const dropdown = () => {
    const dropdownMenu = document.querySelectorAll(".hidden")
    dropdownMenu.forEach(element => {
      element.classList.toggle("show-menu")
    });

    const more = document.getElementById("more")
    if (more.innerHTML === "MORE") {
      more.innerHTML = "MORE +"
    } else {
      more.innerHTML = "MORE"
    }
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
              exact="/"
            >
              HOME
            </a>
          </li>
          <li>
          <a
              href="/myprofile"
            >
              PROFILE
            </a>
          </li>
          <li>
          <p  id="more"
              onClick={dropdown}
            >
              MORE <strong>+</strong>
            </p>
          </li>
        </ul>
        <div className="dropdown-menu">
          <a href="/oops" className="hidden">Create a group</a>
          <a href="/oops" className="hidden">My messages</a>
          <a href="/oops" className="hidden">My recipes</a>
          <a href="/oops" className="hidden">Logout</a>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
