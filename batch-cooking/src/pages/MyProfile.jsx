import React from "react";

import photo from "../images/Cooking.jpeg";


const MyProfile = () => {


  return (
    <div className="container">
      <div className="group-info" >
        <h1 id="my-profile-title">My Profile</h1>
      </div>

      <div className="ribbon">

      </div>

      <div className="profile-flex">

        <div className="filler-photo">
        </div>



          <div className="profile-info-flex">
            <div className="arch-avatar">
              <img src="https://cdn.pixabay.com/photo/2016/11/22/22/21/adventure-1850912_960_720.jpg" alt="my avatar" />
            </div>
            <div className="profile-name">
              <p><strong>Troy Blundel</strong></p>
            </div>
            <div className="profile-description">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam cum expedita obcaecati, cumque similique molestiae ipsum odio maiores assumenda nobis!</p>
            </div>
          </div>

      </div>
    </div>
  )
}

export default MyProfile;
