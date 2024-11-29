import React, { useState, useEffect } from 'react';
import { DashboardOutlined, FileSearchOutlined, MenuOutlined } from '@ant-design/icons';
import { Menu, Button, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const items = [

  {
    key: '2',
    icon: <FileSearchOutlined />,
    label: <Link to="/searchtable">Search Table</Link>,
  },
  // {
  //   key: '1',
  //   icon: <DashboardOutlined />,
  //   label: <Link to="/">Dashboard</Link>,
  //   children: [
  //     { key: '11', label: 'Analysis' },
  //     { key: '12', label: 'Monitor' },
  //   ],
  // },
  
];

const SideBarDrawer = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const { user } = useAuthContext(); 

  const showDrawer = () => setVisible(true);

  const onClose = () => setVisible(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 767);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!user || !isMobile) return null;

  return (
    <>
      {!visible && (
        <Button 
          onClick={showDrawer} 
          style={{ 
            position: 'fixed', 
            top: 15, 
            left: 10, 
            zIndex: 1000,
            backgroundColor: '#CFD8DC'
          }}
        >
          <MenuOutlined 
            style={{ paddingBottom: 50 }}
          />
        </Button>
      )}
      <Drawer
        title="Menu"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items}
          onClick={() => setVisible(false)}
        />
      </Drawer>
    </>
  );
};

export default SideBarDrawer;

