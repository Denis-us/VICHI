import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../pictures/svg/logo.svg';
import { ReactComponent as IconArrow } from '../../pictures/svg/arrow-play-nav.svg';
import Navigation from '../Navigation';
// import VerticalLine from '../VerticalLine';


const Header = () => {

    return (
    //   <div className={s.headerLines}>


        <div className={s.header}>
            <div className={s.logo}>
                <NavLink to="/" className={s.logoLink}>
                    <img src={logo} alt="logo" className={s.logoImg}/>
                    <p className={s.logoName}>VICHI</p>
                </NavLink>
                
            </div>
            <div className={s.navigation}>
                <Navigation/>
                {/* <div className={s.pages}>
                    <ul className={s.pagesList}>
                        <li className={s.pageListEl}>
                            <button className={s.pageEl}>01</button>
                            <span className={s.dot}></span>
                            <span className={s.letter}>A</span>
                        </li>
                        <li className={s.pageListEl}>
                            <button className={s.pageEl}>02</button>
                            <span className={s.dot}></span>
                            <span className={s.letter}>B</span>
                        </li>
                        <li className={s.pageListEl}>
                            <button className={s.pageEl}>03</button>
                            <span className={s.dot}></span>
                            <span className={s.letter}>C</span>
                        </li>
                        <li className={s.pageListEl}>
                            <button className={s.pageEl}>04</button>
                            <span className={s.dot}></span>
                            <span className={s.letter}>D</span>
                        </li>
                    </ul>
                </div> */}
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