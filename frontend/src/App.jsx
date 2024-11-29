import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout, theme } from 'antd';
import { useAuthContext } from './hooks/useAuthContext';

// Pages & Components
import SearchTable from './pages/SearchTable';
import Navbar from './components/NavBar';
import SideBar from './components/SideBar';
import SideBarDrawer from './components/SideBarDrawer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';

const { Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh', margin: 0, padding: 0 }}>
        <Navbar style={{ position: 'sticky', top: 0, py: 0 }} />
        <div className="demo-logo" />
        <Layout style={{ margin: 0, padding: 0 }}>
          {user && <SideBar />}
          {user && <SideBarDrawer />}
          <Layout style={{ padding: 0, margin: 0, background: colorBgContainer }}>
            <Content style={{ padding: 0, margin: 0, minHeight: '100vh', borderRadius: borderRadiusLG }}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/searchtable" element={user ? <SearchTable /> : <Navigate to="/login" />} />
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/searchtable" />} />
                <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/searchtable" />} />
              </Routes>
            </Content>
            <Footer style={{ textAlign: 'center', marginTop: 'auto', backgroundColor: '#023047', color: 'white' }}>
              Purana ©{new Date().getFullYear()} Created by Sandara
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;







