import { useState } from 'react';
import './App.css';

function App() {
  const [minVal, setMiniVal] = useState(0)
  const [maxVal, setMaxVal] = useState(0)
  const [randomNum, setRandomNum] = useState(5)

  const handleRandom = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal +1 * minVal)))
  }

  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>Random number <span>{randomNum}</span></p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min: {minVal}</p>
            <input type="number" value={minVal} onChange={(e) => setMiniVal(+e.target.value)} />
          </div>
          <div>
            <p>Max: {maxVal}</p>
            <input type="number" value={maxVal}onChange={(e) => setMaxVal(+e.target.value)} />
          </div>
        </div>
        <button onClick={handleRandom}>Get Random number</button>
      </div>
    </div>
  );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
export default App;
