import React from "react";



const CookingGroup = ( {group} ) => {

  return (
    <div className="box">
      <div className="images">
        <div className="thumbnail">
          <img src={group.thumbnail} alt="#" />
        </div>
        <div className="participant">
          {/* <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /> */}
        </div>
      </div>
      <h3>{group.name}</h3>
    </div>
  )
}

export default CookingGroup;
