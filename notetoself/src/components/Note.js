import React, { Component } from 'react'

class Note extends Component {
    render() {
        const {note} = this.props;
        return (
            <li className="list-group-item">
                <p>{note.text}</p>
            </li>
        )
    }
}

export default Note;
