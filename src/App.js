import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './Pages/Top';
import Bottom from './Pages/Bottom';
import Posts from './Pages/Posts';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Top />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/contacts'>
            <Contact />
          </Route>
          <Route  path='/blog'>
            <Posts />
          </Route>
        </Switch>
      <Bottom/>
    </Router>
  );
}

export default App;
