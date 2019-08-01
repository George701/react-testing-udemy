import React from 'react';
import { mount } from '../enzyme';
import App from './App';

describe('App', () => {
    let app = mount(<App/>);

    it('renders the app header', ()=>{
        expect(app.find('h1').text()).toEqual('FlashCard Pro');
    });
});