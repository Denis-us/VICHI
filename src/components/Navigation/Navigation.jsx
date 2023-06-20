import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const setActive = ({isActive}) => isActive ? "link-active" : "link"

const Navigation = ({isClicked}) => {

    return (
        <div className={`${s.navigation} ${isClicked ? s.transformed : ''}`}>
            <ul className={s.navigationList}>
                <li className={s.navigationEl}>
                    <NavLink to="/about" className={setActive}>ABOUT</NavLink>
                </li>
                <li className={s.navigationEl}>
                    <NavLink to="/works" className={setActive}>WORKS</NavLink>
                </li>
                <li className={s.navigationEl}>
                    <NavLink to="/contacts" className={setActive}>CONTACTS</NavLink>
                </li>
                <li className={s.navigationEl}>
                    <NavLink to="/order" className={setActive}>ORDER</NavLink>
                </li>
            </ul>
        </div>   
    );
};
  
export default Navigation