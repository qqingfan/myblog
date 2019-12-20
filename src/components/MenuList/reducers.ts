import { 
    MenuListState, 
    Item, 
    MenuListActionTypes, 
    SELECT_MENU_ITEM, 
    SET_SEARCH_PATTERN} 
from './types'

const itemList = require('./itemList.json')

const getPos = (myArray:Item[], myTitle: string) => myArray.map( item => item.title ).indexOf(myTitle);

const menuListInitialState: MenuListState = {
    menuItems: itemList,
    selectedMenuItem: itemList[0],
    searchPattern: ''
}

// TODO: simply to one item
export const emptyResultItem: Item[] = [{
    title: 'No Result',
    parent: null,
    hasSubMenu: false,
    content: 'No result found'
}]

const MenuListReducer = (state = menuListInitialState, action: MenuListActionTypes ): MenuListState =>{
    switch (action.type) {
        case SELECT_MENU_ITEM:
            return {
                ...state,
                selectedMenuItem: action.payload
            };
        case SET_SEARCH_PATTERN:
            let newState: MenuListState = {
                ...state,
                menuItems: action.payload ? 
                        menuListInitialState.menuItems.filter((item) => item.content.includes(action.payload) ) 
                        : menuListInitialState.menuItems,
                searchPattern: action.payload
            }
            newState.menuItems = newState.menuItems.length === 0 ? emptyResultItem : newState.menuItems.map((item, idx, arr) => {
                if (item.parent !== null) {
                    item.parent = getPos(arr, item.content.split(' ')[0])
                }
                return item;
            })
            return {
                ...newState,
                selectedMenuItem: getPos(newState.menuItems, newState.selectedMenuItem.title) !== -1 ? {
                    ...newState.selectedMenuItem, 
                    parent: newState.selectedMenuItem.title !== 'Welcome' && newState.selectedMenuItem.parent !== null? getPos(newState.menuItems, newState.selectedMenuItem.content.split(' ')[0]):null
                } : newState.menuItems[0]
            }
        default:
            return state;
    }
}

export default MenuListReducer;