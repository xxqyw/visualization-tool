import './App.css';
import react, {useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import pages from './pages';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  
  return (
    <div className="App">
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo">
            路由可视化
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/V-T">可视化工具</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/example">样例</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px', background: '' }}>
            <div className='content-box'>
              <Switch>
                <Route path="/V-T/route-find-detail" component={pages.RouteFindDetail} />
                <Route path="/V-T" component={pages.UploadPage} />
                <Route path="/example" component={pages.RouteFindDetail} />
                <Route path="*" component={pages.UploadPage} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
      </Router>
    </div>
  );
}

export default App;
