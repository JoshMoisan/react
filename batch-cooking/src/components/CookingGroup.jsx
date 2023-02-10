import { useState } from 'react';


const CookingGroup = ( {group} ) => {
  const [openedId, setOpenedId] = useState(null);
  const [display, setDisplay] = useState("none")

const showAvatar = (id) => {
  setOpenedId(id);
  setDisplay(display === "none" ? "flex" : "none")
}

return (

    <div className="box">
      <div className="images">
        <div className="thumbnail">
          <img src={group.thumbnail} onClick={()=>showAvatar(group.name)} alt={group.name} id={group.name} />
        </div>
          {openedId === group.name && <div className='little-avatar' style={{display:display}}>
            <div className="ball">
              <a href={`/${group.name}`}>
                <p id='join-button'>JOIN</p>
              </a>
              <img src="https://cdn.pixabay.com/photo/2016/03/27/21/52/woman-1284411_960_720.jpg" alt="avatar2" />
              <img src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg" alt="avatar3" />
            </div>
          </div> }
      </div>
      <h4>{group.name}</h4>
    </div>
  )
}

export default CookingGroup;
