import React from 'react';
import { mount } from '../enzyme';
import App from './App';

describe('App', ()=>{
    let app = mount(<App/>);

    it('renders the App title', () => {
        expect(app.find('h2').text()).toEqual('Note to Self');
    });

    describe('when rendering the form', ()=>{
        it('creates a Form component', () => {
            expect(app.find('Form').exists()).toBe(true);
        });

        it('renders a FormControl component', () => {
            expect(app.find('FormControl').exists()).toBe(true);
        });

        it('renders the submit button', () => {
            expect(app.find('.btn').at(0).text()).toEqual('Submit');
        });

        it('renders the clear button', () => {
            expect(app.find('.btn').at(1).text()).toEqual('Clear');
        });
    });

    describe('when creating a note', () => {
        let testNote = 'test note';

        beforeEach(() => {
            app.find('FormControl').simulate('change', {
                target: {value: testNote}
            });
        });

        // console.log(app.state()) // state = { text: 'test note', notes: [] }

        it('updates the text in state', () => {
            expect(app.state().text).toEqual(testNote);
        });

        describe('submitting the new note', () => {
            beforeEach(() => {
                app.find('.btn').at(0).simulate('click');
            });

            // state = { ... , notes: [{text: 'test note'}]} 
            // But bacause beforeEach is powerfull function it runs each iteration
            // to prevent dublicating same variable in state.notes array in 'remounting the compoennt' afterEach() must be used

            afterEach(() => {
                app.find('.btn').at(1).simulate('click');
            });

            it('adds the new note to state', () => {
                expect(app.state().notes[0].text).toEqual(testNote);
            });

            describe('remounting the component', () => {
                let app2;

                beforeEach(() => {
                    app2 = mount(<App/>);
                });

                it('reads the stored note cookies', () => {
                    expect(app2.state().notes).toEqual([{text: testNote}]);
                });
            });

            describe('clicking the clear button', () => {
                beforeEach(()=>{
                    app.find('.btn').at(1).simulate('click');
                });

                // state = { ... , notes: []} 

                it('clears the notes in the state', () => {
                    expect(app.state().notes).toEqual([]);
                });
            });
        });
    })
})