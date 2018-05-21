import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import './App.css';

import Main from './components/common/Main';
import RootStore from './stores/rootStore';

const rootStore = new RootStore();

class App extends Component {
  render() {
    return (
      <Provider rootStore={rootStore}>
        <div className="App">
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
