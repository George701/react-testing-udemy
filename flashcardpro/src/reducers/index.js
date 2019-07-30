import { combineReducers } from 'redux';
import stack from './stackReducer';
import stacks from './stacksReducer';

export default combineReducers({
    stack,
    stacks
});