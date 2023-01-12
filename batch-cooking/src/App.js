import data from "./data.json";
import { useEffect, useState } from 'react'
import CookingGroup from "./CookingGroup.jsx";
import Navbar from "./Navbar.jsx";

import './Styling/App.scss';

function App() {
  const[groups, setGroups] = useState(data.team)
  // console.log(groups)


  return (
    <div>
      <nav><Navbar /></nav>
      <div className="grid">
        {groups.map((group) => (
          <CookingGroup group = {group} />
        ))}
      </div>
    </div>
  );
}

export default App;
