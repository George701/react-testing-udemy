import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from '../store';

import Main from './Main';
import Category from './Category';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <h2>Jeopardy</h2>  
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route exact path='/category' component={Category}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;
