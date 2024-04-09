import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { BsBarChartLine, BsFillMoonFill, BsSun, BsList, BsXLg } from "react-icons/bs";

import css3 from "../assets/css3.svg"
import html5 from "../assets/html5.svg"
import es6 from "../assets/javascript.svg"
import logo from '../assets/logo.jpg';
import './layout.css';

const Header = () => {
    const [colorScheme, setColorScheme] = useState('light');

    const toggleColorScheme = () => {
        document.documentElement.classList.toggle('dark')
        document.documentElement.classList.contains('dark') ? setColorScheme('dark') : setColorScheme('light');
    }
    return (
        <header className='header-nav'>
            <div className='header-container'>
                <div style={{
                    height: '45px',
                    borderRadius: '50%',
                    overflow: 'hidden'
                }}>
                    <Link to="/">
                        <img src={logo} alt="logo" width="45" height="45" />
                    </Link>
                </div>
                <div className='nav-header'>
                    <div className='top-nav'>
                        {window.innerWidth < 767 &&
                            (
                                <span style={{ textAlign: "right" }}><BsXLg onClick={() => { document.querySelector('.top-nav').style.transform = 'translateX(100%)' }} /></span>
                            )
                        }
                        <NavLink to='/blog' activeClassName='active'><span>Blog</span></NavLink>
                        <NavLink to='/gallery' activeClassName='active'><span>Gallery</span></NavLink>
                        <NavLink to='/snippets' activeClassName='active'><span>Snippets</span></NavLink>
                        <NavLink to='/projects' activeClassName='active'><span>Projects</span></NavLink>
                        <NavLink to='/about' activeClassName='active'><span>About</span></NavLink>
                        <NavLink to='/friends' activeClassName='active'><span>Friends</span></NavLink>
                    </div>
                    <div className='side-nav'>
                        <span><BsBarChartLine size="1.25rem" /></span>
                        <span onClick={toggleColorScheme} style={{ cursor: "pointer" }}>
                            {colorScheme === "dark" ? <BsSun size="1.25rem" /> : <BsFillMoonFill size="1.25rem" />}
                        </span>
                        {window.innerWidth < 767 &&
                            (<span onClick={() => { document.querySelector('.top-nav').style.transform = 'translateX(0px)'; console.log("13465") }}>
                                <BsList size="1.25rem" />
                            </span>)
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};


const Footer = () => {
    return (
        <footer style={{ padding: '0 0.75rem', maxWidth: '64rem', margin: '0 auto' }}>
            <div className="footer-container">
                <div style={{ display: 'flex' }}>
                    <span style={{ marginRight: '4px' }}>Built with</span>
                    <div>
                        <img src={html5} alt="html5" width="20px" />
                        <img src={css3} alt="css3" width="20" />
                        <img src={es6} alt="javascript" width="20" />
                    </div>
                </div>
                <div>Copyright © 2024</div>
            </div>
        </footer>
    );
};

const Layout = () => {
    console.log('layout被加载了')
    return (
        <>
            <Header />
            <main style={{ maxWidth: '64rem', margin: '0 auto', padding: "0 .75rem" }}>
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
};

export default Layout;