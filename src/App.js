import React from 'react';
import './App.css';

import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div>
      <h1>Timer</h1>
      <h2>{formatTime(seconds)}</h2>
    </div>
  );
}






function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
