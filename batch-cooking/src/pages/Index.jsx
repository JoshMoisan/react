import { useState } from 'react'

import CookingGroup from "../components/CookingGroup";
import data from "../data.json";


function Index() {
  const[groups, setGroups] = useState(data.team)


  return (
    <div className="index">
      <h1>Which group are you joining ?</h1>
      <div className="grid">
        {groups.map((group) => (
          <CookingGroup group = {group} />
        ))}
      </div>
    </div>
  );
}

export default Index;
