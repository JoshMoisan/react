import data from "./data.json";
import { useEffect, useState } from 'react'
import CookingGroup from "./CookingGroup.jsx";

import './Styling/App.scss';

function App() {
  const[groups, setGroups] = useState(data.team)
  // console.log(groups)


  return (
    <div className="grid">
      {groups.map((group) => (
        <CookingGroup group = {group} />
      ))}
    </div>
  );
}

export default App;
