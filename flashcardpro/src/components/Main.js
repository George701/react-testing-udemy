import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StackList from './StackList';

class Main extends Component {

    render() {
        return (
            <div>
                <StackList/>
                <hr/>
                <Link to='/stack_form'><h4>Create a New Stack</h4></Link>
            </div>
        )
    }
}

export default Main;
