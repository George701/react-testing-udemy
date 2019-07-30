import { SET_STACK, LOAD_STACK } from './types';

export const setStack = stack => {
    // console.log('actions: ', stack)
    return {
        type: SET_STACK,
        stack: stack
    };
}

export const loadStacks = stacks => {
    // console.log('actions: ', stacks)
    return {
        type: LOAD_STACK,
        stacks: stacks
    }
}