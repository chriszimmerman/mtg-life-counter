import React, {useState} from 'react';
import './LifeCounter.css'

function LifeCounter({player}) {
  const [life, setLife] = useState(20);

  return (
      <div className="col-sm">
          <h1 id="life-header" className="text-center">Player {player} Life</h1>

          <p id="life" className="text-center life-number">{life}</p>
          <button id="increment" className="btn btn-outline-dark btn-block" onClick={() => setLife(life + 1)}>+</button>
          <button id="decrement" className="btn btn-outline-dark btn-block" onClick={() => setLife(life - 1)}>-</button>
      </div>
  );
}

export default LifeCounter;