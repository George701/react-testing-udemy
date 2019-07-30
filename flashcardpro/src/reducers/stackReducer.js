import { SET_STACK } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
}