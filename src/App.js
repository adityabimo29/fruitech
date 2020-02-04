import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './pages/Gallery';
import Bottom from './pages/Bottom';

function App() {
  return (
    <div>
      <main>
        <Gallery/>
      </main>
      <Bottom/>
    </div>
  );
}

export default App;
