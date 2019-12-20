import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Menu, Layout, Input} from 'antd'
import { Item } from './types'
import { selectMenuItem, setSearchPattern } from './actions'
import { selectMenuList, selectCurrentMenu, selectSearchPattern } from './selectors'
import { RootState } from '../../reducers'

const { Sider } = Layout
const { Search } = Input
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

export interface MenuListProps {
    menuItems: Item[]
    selectedMenu: Item
    selectMenuItem: typeof selectMenuItem
    setSearchPattern: typeof setSearchPattern
    searchPattern: string
}

interface ItemWithChildren extends Item {
    children: ItemWithChildren[]
}

class MenuList extends Component<MenuListProps> {

    renderList() {
        let menuItems: ItemWithChildren[] = this.props.menuItems.map(item => ({
            ...item, children: []
        }))
        console.log(menuItems)
        let rootItems: ItemWithChildren[] = []
        let renderItem : (item: ItemWithChildren, index: number | string) => JSX.Element
        menuItems.forEach((item, index, items) => {
            if (item.parent !== null) {
                items[item.parent].children.push(item)
            } else {
                rootItems.push(item)
            }
        })

        return rootItems.map(renderItem = (item, index) => {
            if (item.children.length) {
                return (
                    <SubMenu
                        key = {index}
                        title = {<span>{item.title}</span>}
                    >
                        {
                            item.children.map( (child, index) => {
                                return renderItem(child, `${item.title}-${index}`)
                            })
                        }
                    </SubMenu>
                )
            } else {
                return (
                    <MenuItem key = {index}
                                onClick = {() => this.props.selectMenuItem(item)}
                                // isSelected = {item.title === this.props.selectedMenu.title}
                    >
                        {item.title}
                    </MenuItem>
                )
            }
        })
    }

    render() {
        return (
            <Sider width={200} style={{ background: '#fff'}}>
                <Search
                    placeholder="search component"
                    onSearch = {value => this.props.setSearchPattern(value)}
                    style={{ width: 200}}
                />
                <Menu defaultSelectedKeys={['0']} mode="inline">
                    {this.renderList()}
                </Menu>

            </Sider>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        menuItems: selectMenuList(state),
        selectedMenu: selectCurrentMenu(state),
        searchPattern: selectSearchPattern(state)
    }
}

export default connect(mapStateToProps, {
    selectMenuItem,
    setSearchPattern
})(MenuList)