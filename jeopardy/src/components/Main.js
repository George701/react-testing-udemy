import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategories, pickCategory } from '../actions';
import { Link } from 'react-router-dom';

export class Main extends Component {

    componentDidMount(){
        if(this.props.categories.length === 0){
            fetch('http://jservice.io/api/categories?count=20')
            .then(res => res.json())
            .then(json => this.props.setCategories(json));
        }
    }

    render() {
        const { categories } = this.props;
        return (
            <div>
                <h2>Categories</h2>
                {
                    categories.map(category => {
                        return (
                            <div key={category.id}>
                                <Link to='/category' onClick={() => this.props.pickCategory(category)}>
                                    <h4>{category.title}</h4>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {categories: state.categories}
}

export default connect(mapStateToProps, {setCategories, pickCategory})(Main);
