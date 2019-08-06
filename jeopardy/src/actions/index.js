import {SET_CATIGORIES, PICK_CATIGORY} from './types';

export const setCategories = categories => {
    return {
        type: SET_CATIGORIES,
        categories
    }
}

export const pickCategory = (category) => {
    return {
        type: PICK_CATIGORY,
        category
    }
}