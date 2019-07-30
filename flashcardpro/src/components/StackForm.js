import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form,  Button } from 'react-bootstrap';
import uuid from 'uuid';

class StackForm extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            cards: []
        }
    }

    render() {
        return (
            <div>
                <Link to='/' className='link-home'>Home</Link>
                <h4>Create a New Stack</h4>
                <br/>
                <Form inline>
                    <Form.Group>
                        <Form.Label>Title:</Form.Label>
                        {' '}
                        <Form.Control/>
                    </Form.Group>
                </Form>
                <br/>
                <Button onClick={() => this.addCard()}>Add Card</Button>
            </div>
        )
    }

    addCard = () => {
        const { cards } = this.state;
        cards.push({id: uuid(), prompt: '', answer: ''});
        this.setState({ cards })
    }
}

export default StackForm;
