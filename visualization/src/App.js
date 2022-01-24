import './App.css';
import react, {useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined
} from '@ant-design/icons';
import VTPage from './pages/V-T';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };
  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo">
            V-T
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              V-T
            </Menu.Item>
            <Menu.Item key="2">
              extra
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px', background: '' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>V-T</Breadcrumb.Item>
            </Breadcrumb>
            <div className='content-box'>
              <VTPage></VTPage>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>V-T ©2022 Created by xxq</Footer> */}
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
