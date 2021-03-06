import React, { Component } from 'react';
import { Link, Redirect  } from 'react-router-dom';
import { connect } from 'react-redux'
import { Form,  Button } from 'react-bootstrap';
import uuid from 'uuid';
import { addStack } from '../actions';

export class StackForm extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            cards: [],
            redirect: false
        }
    }

    render() {
        const {cards, redirect, title} = this.state
        if(redirect){
            return <Redirect to='/'/> 
        }else{
            return (
                <div>
                    <Link to='/' className='link-home'><h4>Home</h4></Link>
                    <h4>Create a New Stack</h4>
                    <br/>
                    <Form inline>
                        <Form.Group>
                            <Form.Label>Title:</Form.Label>
                            {' '}
                            <Form.Control onChange={event => this.setState({title: event.target.value})} value={title}/>
                        </Form.Group>
                        <hr/>
                        {
                            cards.map((card, index) => {
                                return(
                                    <div key={card.id}>
                                        <br/>
                                        <Form.Group>
                                            <Form.Label>Prompt:</Form.Label>
                                            {' '}
                                            <Form.Control
                                                onChange={event => this.updateCard(event, index, 'prompt')}
                                            />
                                            {' '}
                                            <Form.Label>Answer:</Form.Label>
                                            {' '}
                                            <Form.Control
                                                onChange={event => this.updateCard(event, index, 'answer')}
                                            />
                                        </Form.Group>
                                    </div>
                                )
                            })
                        }
                    </Form>
                    <br/>
                    <Button variant="primary" onClick={() => this.addCard()}>Add Card</Button>
                    {' '}
                    <Button variant="success" onClick={() => this.addStack()}>Save Stack</Button>
                        
                </div>
            )
        }
    }

    addCard = () => {
        const { cards } = this.state;
        cards.push({id: uuid(), prompt: '', answer: ''});
        this.setState({ cards })
    }

    updateCard = (event, index, part) => {
        const { cards } = this.state;
        cards[index][part] = event.target.value;
        this.setState({ cards });
    }

    addStack = () => {
        // console.log('StackForm state', this.state);
        this.props.addStack(this.state);
        this.setState({redirect: true});
    }
}

export default connect(null, { addStack })(StackForm);
