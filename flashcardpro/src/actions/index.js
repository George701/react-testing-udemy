import { SET_STACK, LOAD_STACK, ADD_STACK } from './types';

export const setStack = stack => {
    // console.log('actions: ', stack)
    return {
        type: SET_STACK,
        stack
    };
}

export const loadStacks = stacks => {
    // console.log('actions: ', stacks)
    return {
        type: LOAD_STACK,
        stacks
    }
}

export const addStack = stack => {
    return{
        type: ADD_STACK,
        stack
    }
}