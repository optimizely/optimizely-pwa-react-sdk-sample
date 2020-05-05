import React from 'react';
import { 
  createInstance,
  OptimizelyProvider,
  OptimizelyExperiment,
  OptimizelyVariation,
} from '@optimizely/react-sdk';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.optimizely = createInstance({
      sdkKey: 'QMVJcUKEJZFg8pQ2jhAybK',
    });
  }

  render() {
    return (
      <OptimizelyProvider
        optimizely={ this.optimizely }
        timeout={ 3000 }
        user={ { id: 'user1' } }>
        <div className="App">
          <header className="App-header">
            <p>
              <OptimizelyExperiment experiment='11357634981'>
                <OptimizelyVariation variation="11359384126">
                  variation: My Variation
                </OptimizelyVariation>
              </OptimizelyExperiment>
            </p>
          </header>
        </div>
      </OptimizelyProvider>
    );
  }
}
