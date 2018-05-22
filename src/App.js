import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import './App.css';

import Main from './components/common/Main';
import SessionStore from './stores/sessionStore';

const stores = new SessionStore();

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="App">
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
