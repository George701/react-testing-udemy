import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from '../store';

import Main from './Main';
import Stack from './Stack';
import StackForm from './StackForm'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <h1>FlashCard Pro</h1>
                <hr/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route path='/stack' component={Stack}/>
                        <Route path='/stack_form' component={StackForm}/>
                    </Switch>
                </BrowserRouter>
        </Provider>
        )
    }
}

export default App;
