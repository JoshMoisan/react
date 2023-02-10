import { useState } from 'react'

import CookingGroup from "../components/CookingGroup";
import Sidebar from "../components/Sidebar";
import data from "../data.json";


function Index() {
  const[groups, setGroups] = useState(data.team)


  return (
    <div>
        <h1>Which group are you joining ?</h1>
      <div className="index">
          <Sidebar />
        <div className="grid">
          {groups.map((group) => (
            <CookingGroup group = {group} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
