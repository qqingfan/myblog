export interface Item {
    title: string
    parent: number | null
    hasSubMenu: boolean
    content: string
    iconType?: string
}


export interface MenuListState {
    menuItems: Item[]
    selectedMenuItem: Item
    searchPattern: string
}


export const SELECT_MENU_ITEM = 'SELECT_MENU_ITEM';
export const SET_SEARCH_PATTERN = 'SET_SEARCH_PATTERN';

interface SelectMenuItemAction {
    type: typeof SELECT_MENU_ITEM
    payload: Item
}

interface SetSearchPatternAction {
    type: typeof SET_SEARCH_PATTERN
    payload: string
}

export type MenuListActionTypes = SelectMenuItemAction | SetSearchPatternAction