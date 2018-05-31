import React from 'react';
import './css/App.css';

import Grid from './components/Grid';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>CSS Grid Builder</h1>
        <Grid/>
      </div>
    );
  }
}

export default App;
