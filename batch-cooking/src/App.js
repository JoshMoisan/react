import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from "./pages/Landing";
import Index from "./pages/Index";
import MyProfile from "./pages/MyProfile";
import Oops from "./pages/Oops";
import GroupInfo from "./pages/GroupInfo";
import NewRecipe from "./pages/NewRecipe";
import MyRecipe from "./pages/MyRecipe";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";





function App() {
  return (
    <Router>
      <div>
        <nav><Navbar /></nav>

        <Switch>

          <Route path="/newrecipe">
            <NewRecipe />
          </Route>

          <Route path="/myrecipe">
            <MyRecipe />
          </Route>

          <Route path='/index'>
            <Index />
          </Route>

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
            <Landing />
          </Route>

        </Switch>

        <footer><Footer /></footer>
      </div>
    </Router>
  );
}

export default App;
