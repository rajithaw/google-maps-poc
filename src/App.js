import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Main from './components/common/Main';
import SessionStore from './stores/sessionStore';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#b93f52',
      main: '#84002a',
      dark: '#510000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff9e40',
      main: '#f36d01',
      dark: '#b93d00',
      contrastText: '#000',
    },
  },
});

const stores = new SessionStore();

class App extends Component {
    render() {
        const appMain = (props) => {
            return <Main {...props} />
        }

        return (
            <Provider {...stores}>
                <MuiThemeProvider theme={theme}>
                    <div className="App">
                        <BrowserRouter>
                            <Switch>
                                <Route exact path='/' component={appMain} />
                                <Route exact path="/start" component={appMain} />
                            </Switch>
                        </BrowserRouter>
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
