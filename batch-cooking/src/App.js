import { useState } from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import data from "./data.json";

import CookingGroup from "./CookingGroup";
import GroupInfo from "./pages/GroupInfo";
import MyProfile from "./pages/MyProfile";
import NewRecipe from "./pages/NewRecipe";
import MyRecipe from "./pages/MyRecipe";

import Oops from "./pages/Oops";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


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

          <Route path="/newrecipe">
            <NewRecipe />
          </Route>

          <Route path="/myrecipe">
            <MyRecipe />
          </Route>
        </Switch>
        <footer><Footer /></footer>
      </div>
    </Router>
  );
}

export default App;
