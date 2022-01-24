import './App.css';
import react, {useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import pages from './pages';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };
  
  const Extra = () =><h3>Extra</h3>;
  
  return (
    <div className="App">
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo">
            V-T
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/V-T">V-T</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/extra">extra</Link>
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
                <Route path="/extra" component={Extra} />
                <Route path="*" component={pages.UploadPage} />
              </Switch>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>V-T ©2022 Created by xxq</Footer> */}
        </Layout>
      </Layout>
      </Router>
    </div>
  );
}

export default App;
