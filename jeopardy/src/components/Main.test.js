import React from 'react';
import {shallow} from '../enzyme';
import { Main } from './Main';
import {categories} from '../data/fixtures';

const props = { categories }

describe('Main', ()=> {
    const main = shallow(<Main {...props}/>);
    it('renders the title', ()=> {
        // console.log(main.debug());
        expect(main.find('h2').text()).toBe('Categories');
    });

    it('creates the correct number of links', () => {
        expect(main.find('Link h4').length).toEqual(categories.length);
    });

    it('titles the links correctly', () => {
        main.find('Link h4').forEach((linkTitle, index) => {
            expect(linkTitle.text()).toEqual(categories[index]['title']);
        });
    });
});