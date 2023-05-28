import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../pictures/svg/logo.svg';
import { ReactComponent as IconArrow } from '../../pictures/svg/arrow-play-nav.svg';
import Navigation from '../Navigation';


const Header = () => {

    return (
        <div className={s.header}>
            <div className={s.logo}>
                <NavLink to="/" className={s.logoLink}>
                    <img src={logo} alt="logo" className={s.logoImg}/>
                    <p className={s.logoName}>VICHI</p>
                </NavLink>
                
            </div>
            <div className={s.navigation}>
                <Navigation/>
                <div className={s.lang}>
                    <ul className={s.langList}>
                        <li className={s.langListEl}>
                            <button className={s.langEl}>UA</button>
                        </li>
                        <li className={s.langListEl}>
                            <button className={s.langEl}>EN</button>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className={s.btnPlay}>
                <IconArrow className={s.iconArrow}/>
            </div>
        </div>

        /* <VerticalLine/> */
    //   </div>
    );
  };
  
export default Header