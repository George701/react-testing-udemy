import { combineReducers } from 'redux';
import categories from './setCategoriesReducer';
import category from './pickCategoryReducer';

export default combineReducers({
    categories,
    category
});