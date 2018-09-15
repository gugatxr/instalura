import React, { Component } from 'react';
import './css/normalize.css';
import './css/timeline.css';
import './css/login.css';
import Header from './componentes/Header';
import Timeline from './componentes/Timeline';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">
          <Header/>
          <Timeline/>
        </div>
      </div>
    );
  }
}

export default App;
