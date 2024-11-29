import React, { useState, useEffect } from 'react';
import { DashboardOutlined, SearchOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import './components.css'; // Import the CSS file

const { Sider } = Layout;

const items = [
  
  {
    key: '2',
    icon: <SearchOutlined style={{ color: '#023047', fontSize: 10 }} />,
    label: <Link to="/searchtable" className="sidebar-link">Search Table</Link>,
  },
  // {
  //   key: '1',
  //   icon: <DashboardOutlined style={{ color: '#023047', fontSize: 10 }} />,
  //   label: <Link to="/dashboard" className="sidebar-link">Dashboard</Link>,
  // },
];

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 767 && window.innerWidth <= 991);
  const { user } = useAuthContext();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
      setIsTablet(window.innerWidth >= 767 && window.innerWidth <= 991);
      if (window.innerWidth > 991) {
        setCollapsed(false);
      } else if (window.innerWidth <= 991 && window.innerWidth >= 767) {
        setCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!user || isMobile) return null;

  const selectedKeys = [location.pathname === '/' ? '1' : location.pathname === '/searchtable' ? '2' : ''];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      collapsedWidth={70}
      width={256}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        style={{ height: '100%', borderRight: 0, backgroundColor: '#CFD8DC' }}
        items={items}
        className="sidebar-menu"
      />
    </Sider>
  );
};

export default SideBar;


