import * as actions from './index';
import * as types from './types';
import { categories } from '../data/fixtures';

describe('actions', () => {
    it('creates an action to set categories', () => {
        const expectedAction = {
            type: types.SET_CATIGORIES,
            categories
        };

        expect(actions.setCategories(categories)).toEqual(expectedAction);
    });

    it('creates an action to pick a category', () => {
        const category = categories[0];
        const expectedAction = {
            type: types.PICK_CATIGORY,
            category
        };

        expect(actions.pickCategory(category)).toEqual(expectedAction);
    });
});