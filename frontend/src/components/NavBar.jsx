import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button, Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import "../index.css";

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = () => {
        logout();
    };

    const menuItems = (
        <Menu>
            <Menu.Item key="1">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <a href="#features-section">Features</a>
            </Menu.Item>
            <Menu.Item key="3">
                <a href="#mobile-app-section">Mobile App</a>
            </Menu.Item>
            <Menu.Item key="4">
                <a href="#testimonials-section">Testimonials</a>
            </Menu.Item>
            <Menu.Item key="5">
                <a href="#call-to-action-section">Join Us</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h2>
                        PURANA <i className="bi bi-geo-alt-fill"></i>
                    </h2>
                </Link>
                <nav>
                    {user ? (
                        <div>
                            <span style={{ color: "#023047", marginRight: 10}}>{user.email}</span>
                            <Button
                                onClick={handleClick}
                                style={{ backgroundColor: "#023047", color: "white" }}
                            >
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <div className="auth-section">
                            {isMobile ? (
                                <Dropdown overlay={menuItems} trigger={['click']}>
                                        <MenuOutlined style={{color: '#023047', paddingRight: '10px'}}/>
                                </Dropdown>
                            ) : (
                                <ul className="nav-links">
                                    <li><Link to="/">Home</Link></li>
                                    <li><a href="#features-section">Features</a></li>
                                    <li><a href="#mobile-app-section">Mobile App</a></li>
                                    <li><a href="#testimonials-section">Testimonials</a></li>
                                    <li><a href="#call-to-action-section">Join Us</a></li>
                                </ul>
                            )}
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;





