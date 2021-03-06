import * as actions from './index';
import * as types from './types';
import {stack, stacks} from '../data/fixtures';

describe('actions', () => {
    it('creates an action to set the main stack', () => {
        const expectedAction = { type: types.SET_STACK, stack };        
        expect(actions.setStack(stack)).toEqual(expectedAction);
    });

    it('creates an action to add a stack', () => {
        const expectedAction = { type: types.ADD_STACK, stack };
        expect(actions.addStack(stack)).toEqual(expectedAction);
    });

    it('creates an action to load stacks', () => {
        const expectedAction = { type: types.LOAD_STACK, stacks  };
        expect(actions.loadStacks(stacks)).toEqual(expectedAction);
    })
})