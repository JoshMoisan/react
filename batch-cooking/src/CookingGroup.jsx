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
        {openedId === group.name && <div className='little-avatar' id="participant" style={{display:display}}>
              <a href={`/${group.name}`}>
                <p id='join-button'>+ Join</p>
              </a>
              <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="avatar2" />
              <img src="https://cdn-icons-png.flaticon.com/512/147/147133.png" alt="avatar3" />
          </div> }
      </div>
      <h3>{group.name}</h3>
    </div>
  )
}

export default CookingGroup;
