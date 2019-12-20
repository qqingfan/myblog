import {SELECT_MENU_ITEM, SET_SEARCH_PATTERN, Item, MenuListActionTypes} from './types';

export const selectMenuItem = (item: Item) : MenuListActionTypes => {
    return {
        type: SELECT_MENU_ITEM,
        payload: item
    };
};

export const setSearchPattern = (pattern: string): MenuListActionTypes => {
    return {
        type: SET_SEARCH_PATTERN,
        payload: pattern
    };
};
