import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import AppTheme from './AppTheme';
import Main from './components/common/Main';
import SessionStore from './stores/sessionStore';

const stores = new SessionStore();

class App extends Component {
    render() {
        const appMain = (props) => {
            return <Main {...props} />
        }

        return (
            <Provider {...stores}>
                <AppTheme>
                    <div className="App">
                        <BrowserRouter>
                            <Switch>
                                <Route exact path='/' component={appMain} />
                                <Route exact path="/start" component={appMain} />
                            </Switch>
                        </BrowserRouter>
                    </div>
                </AppTheme>
            </Provider>
        );
    }
}

export default App;
