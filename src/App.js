import React from 'react';
import './App.css';
import Top from './pages/Top';
import Posts from './pages/Posts';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import Gallery from './pages/Gallery';
import Bottom from './pages/Bottom';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Top />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/contacts'>
            <Contact />
          </Route>
          <Route  path='/blog'>
            <Posts />
          </Route>
          <Route path='/gallery'>
            <Gallery />
          </Route>
        </Switch>
      <Bottom/>
    </Router>
  );
}

export default App;
