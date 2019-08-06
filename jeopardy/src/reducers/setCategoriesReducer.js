import {SET_CATIGORIES} from '../actions/types';

export default (state=[], action) => {
    switch(action.type){
        case SET_CATIGORIES:
            return action.categories
        default:
            return state;
    }
}