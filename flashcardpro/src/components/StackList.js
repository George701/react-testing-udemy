import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setStack, loadStacks } from '../actions';
import stacks from '../data/stacks.json';


export class StackList extends Component {

    componentDidMount(){
        if(this.props.stacks.length === 0) this.props.loadStacks(stacks);
    }

    render() {
        const {stacks} = this.props;
        if(stacks !== undefined){
            return (
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
            )
        }else{
            return <h4>Loading...</h4>
        }
        
    }
}

const mapStateToProps = state => {
    // console.log("Stack List (stacks): ", state)
    return {stacks: state.stacks}
}

export default connect(mapStateToProps, { setStack, loadStacks })(StackList);
