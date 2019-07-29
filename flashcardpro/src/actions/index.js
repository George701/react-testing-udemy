import { SET_STACK } from './types';

export const setStack = stack => {
    // console.log('actions: ', stack)
    return {
        type: SET_STACK,
        stack: stack
    };
}