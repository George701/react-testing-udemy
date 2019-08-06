import { PICK_CATIGORY } from '../actions/types';

export default (state={}, action) => {
    switch(action.type){
        case PICK_CATIGORY:
            return action.category
        default:
            return state;
    }
}