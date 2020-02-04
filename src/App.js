<<<<<<< HEAD
import React from 'react';
import './App.css';
import Top from './Pages/Top';
import Bottom from './Pages/Bottom';
import Posts from './Pages/Posts';
import DetailPost from './Pages/DetailPost';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Team from './Pages/OurTeam';
import Gallery from './Pages/Gallery';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Top />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/team'>
            <Team />
          </Route>
          <Route  path='/contacts'>
            <Contact />
          </Route>
          <Route  exact path='/gallery'>
            <Gallery />
          </Route>
          <Route  exact path='/blog'>
            <Posts />
          </Route>
          <Route  path='/blog/:id'>
            <DetailPost />
          </Route>
        </Switch>
      <Bottom/>
    </Router>
=======
import React from "react";
import "./App.css";
import OurTeam from "./pages/OurTeam";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      {/* <OurTeam /> */}
      <About />
    </div>
>>>>>>> 133e117c8018256f13c10784e586657da5b990ad
  );
}

export default App;
