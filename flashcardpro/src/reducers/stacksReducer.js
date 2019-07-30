import { LOAD_STACK } from '../actions/types';

export default (state = [], action) => {
    switch(action.type){
        case LOAD_STACK:
            return action.stacks;
        default:
            return state;
    }
}