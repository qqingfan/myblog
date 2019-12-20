import React from 'react'
import { Layout, Menu} from 'antd'
import MenuList from './components/MenuList'
// import ContentDetail from './components/ContentDetail'
import 'antd/dist/antd.css'
import './App.css'

const { Footer, Header } = Layout

class App extends React.Component {
    render() {
        return (     
          <Layout style={{ minHeight: '100vh', background: '#fff'}} >
            <Header>
            <div className="header-me"> Qingqing Fan </div>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px', float: 'right'}}>

                <Menu.Item key="1">About Me</Menu.Item>
                <Menu.Item key="2">Blogs</Menu.Item>
                <Menu.Item key="3">Contact Me</Menu.Item>
              </Menu>


            </Header>
            <Layout style={{ minHeight: '100vh', background: '#fff' }} >
                <MenuList />
                <Layout style={{ minHeight: '100vh', background: '#fff' }}>
                    {/* <ContentDetail /> */}
                    <Footer style={{ textAlign: 'center', background: '#fff'  }}>
                        Qingqing Fan
                    </Footer>
                </Layout>
            </Layout>
          </Layout>
        );
      }
    }

export default App