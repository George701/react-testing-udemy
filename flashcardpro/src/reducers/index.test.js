import rootReducer from './index';
import * as actions from '../actions';
import * as types from '../actions/types';
import { stack, stacks } from '../data/fixtures';

describe('root reducer', () => {
    it('returns the initial state', () => {
        expect(rootReducer({}, {})).toEqual({stack: {}, stacks: []});
    });

    it('sets the main stack', () => {
        expect(rootReducer({}, { type: types.SET_STACK, stack})).toEqual({ stack, stacks: [] });
    });

    it('loads stacks', () => {
        expect(rootReducer({}, { type: types.LOAD_STACK, stacks})).toEqual({stacks: {}, stacks});
    });

    it('adds a stack', () => {
        expect(rootReducer({}, {type: actions.ADD_STACK, stack})).toEqual({ stack: {}, stacks: []});
    })
});