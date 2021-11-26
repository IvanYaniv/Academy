import React from "react";
import ProductsList from "../../pages/home/home"
import ProductCard from "../../pages/profile/profile"



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">ProductsList</Link>
            </li>
            <li>
              <Link to="/ProductCard">ProductCard</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ProductCard">
            <ProductCard />
          </Route>
          <Route path="/">
            <ProductsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}