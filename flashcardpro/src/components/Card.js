import React, { Component } from 'react';

export class Card extends Component {
    constructor(){
        super();

        this.state = {
            reveal: false
        }
    }
    render() {
        const { prompt, answer } = this.props.card;
        const { reveal } = this.state;
        return (
            <div className='card' onClick={() => this.setState({reveal: !reveal})}>
                <div className='card-prompt'>
                    <h4>{prompt}</h4>
                    </div>
                <div className='card-answer'>
                    <h4 className={reveal ? 'text-revealed' : 'text-hidden'}>
                        {answer}
                    </h4>
                </div>
            </div>
        )
    }
}

export default Card;
