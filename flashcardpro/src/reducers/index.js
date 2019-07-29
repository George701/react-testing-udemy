import {SET_STACK} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case SET_STACK:
            // console.log('reducer: ', action);
            return action.stack;
        default:
            return state;
    }
    
}