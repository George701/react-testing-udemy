import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'NOTES';

class App extends Component {
    constructor(){
        super();

        this.state = {
            text: '',
            notes: []
        }
    }

    componentDidMount(){
        this.setState({ notes: read_cookie(cookie_key) });
    }

    render() {
        const { notes, text } = this.state;
        return (
            <div>
                <h2>Note to Self</h2>
                <Form inline>
                    <FormControl onChange={event => {this.setState({text: event.target.value})}} value={text}/>
                    {' '}
                    <Button variant="success" onClick={() => this.submit()}>Submit</Button>
                    {' '}
                    <Button variant="danger" onClick={() => this.clear()}>Clear</Button>
                </Form>
                <hr/>
                <ul className="list-group list-group-flush">
                    {notes.map((note, index) => {
                        return <Note key={index} note={note}/>
                    })}
                </ul>
            </div>
        )
    }

    submit = () => {
        const {notes, text} = this.state;
        notes.push({ text });
        this.setState({ notes, text: '' });
        bake_cookie(cookie_key, this.state.notes);
    }

    clear = () => {
        delete_cookie(cookie_key);
        this.setState({notes: []});
    }
}

export default App;
