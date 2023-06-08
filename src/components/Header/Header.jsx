import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../pictures/svg/logo.svg';
import { ReactComponent as IconArrow } from '../../pictures/svg/arrow-play-nav.svg';
import Navigation from '../Navigation';
import Lang from '../Lang';


const Header = () => {

    return (
        <div className={s.header}>
            <div className={s.logo}>
                <NavLink to="/" className={s.logoLink}>
                    <img src={logo} alt="logo" className={s.logoImg}/>
                    {/* <p className={s.logoName}>VICHI</p> */}
                </NavLink>
            </div>

            <Navigation/>

            <Lang/>
            
            <div className={s.btnPlay}>
                <IconArrow className={s.iconArrow}/>
            </div>
        </div>
    );
  };
  
export default Header