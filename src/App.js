import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Main from './components/common/Main';
import SessionStore from './stores/sessionStore';

const stores = new SessionStore();

class App extends Component {
    render() {
        const appMain = (props) => {
            return <Main {...props} />
        }

        // const renderMergedProps = (component, ...rest) => {
        //     const finalProps = Object.assign({}, ...rest);
        //     return (
        //         React.createElement(component, finalProps)
        //     );
        // }
        
        // const PropsRoute = ({ component, ...rest }) => {
        //     return (
        //         <Route {...rest} render={routeProps => {
        //             return renderMergedProps(component, routeProps, rest);
        //         }}/>
        //     );
        // }

        return (
            <Provider {...stores}>
                <div className="App">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={appMain} />
                            <Route exact path="/start" component={appMain} />
                            {/* <PropsRoute exact path='/start' component={appMain} start={true} /> */}
                        </Switch>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;
