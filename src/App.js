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
import About from './Pages/About';
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
          <Route  path='/about'>
            <About />
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
  );
}

export default App;
