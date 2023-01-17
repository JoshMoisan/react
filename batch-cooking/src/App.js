import { useState } from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import data from "./data.json";

import CookingGroup from "./CookingGroup.jsx";
import GroupInfo from "./pages/GroupInfo";
import MyProfile from "./pages/MyProfile";
import Oops from "./pages/Oops";

import Navbar from "./components/Navbar.jsx";




function App() {
  const[groups, setGroups] = useState(data.team)
  // console.log(groups)


  return (
    <Router>
      <div>
        <nav><Navbar /></nav>
        <Switch>

          <Route path='/myprofile'>
            <MyProfile />
          </Route>

          <Route path='/oops'>
            <Oops />
          </Route>

          <Route path='/:groupName'>
            <GroupInfo />
          </Route>

          <Route>
            <div className="grid">
              {groups.map((group) => (
                <CookingGroup group = {group} />
              ))}
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
