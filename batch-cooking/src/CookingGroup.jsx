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
                <p id='join-button'>JOIN</p>
              </a>
              <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="avatar2" />
              <img src="https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="avatar3" />
          </div> }
      </div>
      <h4>{group.name}</h4>
    </div>
  )
}

export default CookingGroup;
