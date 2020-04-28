import React from 'react';
import LifeCounter from './LifeCounter';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand">Magic: The Gathering Life Counter</span>
      </nav>
      <div className="container">
        <div className="row">
          <LifeCounter player={1}/>
          <LifeCounter player={2}/>
        </div>
      </div>
    </div>
  );
}

export default App;
