import { combineReducers } from 'redux';

import MenuListReducer from './components/MenuList/reducers';
// import TabListReducer from './components/TabList/reducers';

export const rootReducer = combineReducers({
    menuList: MenuListReducer,
    // TabList: TabListReducer
});

export type RootState = ReturnType<typeof rootReducer>
