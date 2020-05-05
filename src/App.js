import React from 'react';
import { createInstance } from '@optimizely/react-sdk';
import './App.css';

function App() {
  const optimizely = createInstance({
    datafile: window.optimizelyDatafile,
  });
  const optimizelyConfig = optimizely.getOptimizelyConfig();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Revision: {optimizelyConfig.revision}
        </p>
      </header>
    </div>
  );
}

export default App;
