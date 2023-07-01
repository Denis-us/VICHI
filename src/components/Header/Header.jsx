import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../pictures/svg/logo.svg';
import BurgerMenu from '../../components/BurgerMenu';
import Navigation from '../Navigation';


const Header = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
      
    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div className={s.header}>
            <div className={s.nav}>
                <div className={s.logo}>
                    <NavLink to="/" className={s.logoLink}>
                        <img src={logo} alt="logo" className={s.logoImg}/>
                        <p className={s.logoName}>ВІЧІ</p>
                    </NavLink>
                </div>

                <BurgerMenu isClicked={isClicked} handleClick={handleClick}/>

            </div>

            <Navigation isClicked={!isMobile || isClicked}/>
        </div>
    );
  };
  
export default Header