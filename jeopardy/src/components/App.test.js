import React from 'react';
import {shallow} from '../enzyme';
import App from './App';

describe('App', ()=> {
    const app = shallow(<App/>);
    it('renders the header', ()=> {
        // console.log(app.debug());
        expect(app.find('h2').text()).toBe('Jeopardy');
    });
});