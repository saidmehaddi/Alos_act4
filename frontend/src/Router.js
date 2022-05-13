import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Creatememe from "./components/Creatememe";
import meme from "./components/meme";
import memes from "./components/memes";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function MyRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/memes">memes</Link>
          </li>
          <li>
            <Link to="/memes/create">Add meme</Link>
          </li>
        </ul>

        <hr />
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route path="/memes" exact>
            <memes />
          </Route>
          <Route path="/memes/create">
            <Creatememe />
          </Route>
          <Route path="/memes/:id">
            <meme />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}