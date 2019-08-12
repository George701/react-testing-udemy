import rootReducer from './index';
import * as actions from '../actions';
import * as types from '../actions/types';
import { categories } from '../data/fixtures';

describe('root reducer', () => {
    it('returns the initial state', () => {
        expect(rootReducer({}, {})).toEqual({categories: [], category: {}});
    });

    it('sets categories', () => {
        expect(rootReducer({}, {type: types.SET_CATIGORIES, categories})).toEqual({categories, category: {}});
    });

    it('picks a category', () => {
        const category = categories[0];
        expect(rootReducer({}, {type: types.PICK_CATIGORY, category})).toEqual({categories: [], category});
    });
});