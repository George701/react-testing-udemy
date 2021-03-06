import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Clue from './Clue'

export class Category extends Component {
    constructor(){
        super();
        this.state = {
            clues: []
        }
    }

    componentDidMount(){
        fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
            .then(res => res.json())
            .then(json => this.setState({clues: json}));
    }

    render() {
        // console.log('clues', this.state.clues);
        const { category } = this.props;
        const { clues } = this.state;
        return (
            <div>
                
                <h2>{category.title}</h2>
                {
                    clues.map(clue => {
                        return (
                            <Clue key={clue.id} clue={clue}/>
                        )
                    })
                }
            </div>
        )
    }
}

export class LinkedCategory extends Component {
    render(){
        return (
            <div>
                <Link to='/' className="link-home"><h4>Home</h4></Link>
                <Category category={this.props.category}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {category: state.category}
};

export default connect(mapStateToProps, null)(LinkedCategory);
