import React from 'react';
import { shallow } from '../enzyme';
import Main from './Main';

describe('Main', () => {
    const main = shallow(<Main/>);

    it('renders a stack list', ()=>{
        // console.log(main.debug());
        expect(main.find('Connect(StackList)').exists()).toBe(true);
    });

    it('renders a link to create stack', ()=>{
        // console.log(main.find('Link h4').text());
        expect(main.find('Link h4').text()).toEqual('Create a New Stack');
    });
});