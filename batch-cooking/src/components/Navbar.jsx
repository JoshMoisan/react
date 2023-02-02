import React from "react";


const Navbar = () => {

  const dropdown = () => {
    const dropdownbox = document.getElementById("dropdownbox")
    dropdownbox.classList.toggle("dropdown-menu")

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
        <a href="/"><h1>YUMMY</h1></a>
      </div>
      <div className="options">
        <ul>
          <li>
            <a href="/index">HOME</a>
          </li>
          <li>
            <a href="/myprofile">PROFILE</a>
          </li>
          <li>
            <p id="more"
                onClick={dropdown}>
                MORE <strong>+</strong>
            </p>
          </li>
        </ul>

        <div id="dropdownbox">
          <a href="/oops" className="hidden">Create a group</a>
          <a href="/oops" className="hidden">My messages</a>
          <a href="/myrecipe" className="hidden">My recipes</a>
          <a href="/oops" className="hidden">Logout</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
