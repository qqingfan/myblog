import { RootState } from '../../reducers'

export const selectMenuList = (state: RootState ) => state.menuList.menuItems;
export const selectCurrentMenu = (state: RootState ) => state.menuList.selectedMenuItem;
export const selectSearchPattern = (state: RootState ) => state.menuList.searchPattern;
