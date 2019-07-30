import React, { Component } from 'react';
import { connect } from 'react-redux';
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { setStack, loadStacks } from '../actions';

class StackList extends Component {

    componentDidMount(){
        if(this.props.stacks.length === 0) this.props.loadStacks(stacks);
    }

    render() {
        const {stacks} = this.props;
        return (
            <div>
                <h1>FlashCard Pro</h1>
                <hr/>
                <div>
                    {
                        stacks.map(stack => {
                            return (
                                <Link to='/stack' key={stack.id} onClick={() => this.props.setStack(stack)}>
                                    <h4>{stack.title}</h4>
                                </Link>
                            )
                        })
                    }
                </div>
                <hr/>
                <Link to='/stack_form'><h4>Create a New Stack</h4></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log("Stack List (stacks): ", state)
    return {stacks: state.stacks}
}

export default connect(mapStateToProps, { setStack, loadStacks })(StackList);
