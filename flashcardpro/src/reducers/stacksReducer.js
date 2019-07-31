import { LOAD_STACK, ADD_STACK } from '../actions/types';
import uuid from 'uuid';

export default (state = [], action) => {
    switch(action.type){
        case LOAD_STACK:
            return action.stacks;
        case ADD_STACK:
            return [...state, {...action.stack, id: uuid()}];
        default:
            return state;
    }
}