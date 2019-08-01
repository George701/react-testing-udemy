import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card'

export class Stack extends Component {
    render() {
        // console.log('stack props: ', this.props);
        const { title, cards } = this.props.stack;
        // console.log(title, cards)
        if(cards !== undefined && title !== undefined){
            return (
                <div>
                    <Link to='/' className='link-home'>
                        <h4>Home</h4>
                    </Link>
                    <h3>{title}</h3>
                    <br />
                    {
                        cards.map(card => {
                            return <Card key={card.id} card={card}/>
                        })
                    }
                </div>
            )
        }else{
            return <h2>Loading</h2>
        }
    }
}

const mapStateToProps = state => {
    // console.log("Stack: ", state);
    return { stack: state.stack}
}

export default connect(mapStateToProps, null)(Stack);
