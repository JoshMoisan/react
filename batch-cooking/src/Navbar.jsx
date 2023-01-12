import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {

  return(
    <div className="navbar navbar-expand-sm navbar-light navbar-lewagon">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Messages</a>
              </li>
              <li className="nav-item dropdown">
                <Dropdown>
                  <img className="avatar dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src="https://kitt.lewagon.com/placeholder/users/ssaunier" />
                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" data-turbo-method="delete" href="#">Log out</a>
                </Dropdown>
            </div>
          </li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar;
