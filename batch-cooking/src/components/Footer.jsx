import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSnapchat } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {

  return(
    <div>
      <div className="footer">
        <div>
          <h4>BatchCooking made fun !</h4>
        </div>

        <div>
          <ul>
            <li><a href="https://www.linkedin.com/in/josh-moisan-webdev/" target="_blank">Contact Us </a></li>
            <li><a href="/oops">Career </a></li>
            <li><a href="/oops">Connect with us</a></li>
          </ul>
        </div>

      </div>
        <div className="connect-social">
          <span><FontAwesomeIcon icon={faFacebook} /></span>
          <span><FontAwesomeIcon icon={faInstagram} /></span>
          <span><FontAwesomeIcon icon={faSnapchat} /></span>
        </div>
      </div>
  )
}

export default Footer;
