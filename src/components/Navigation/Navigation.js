import { NavLink  } from 'react-router-dom';
import s from './Navigation.module.css';

const setActive = ({isActive}) => isActive ? "link-active" : "link"

const Navigation = () => {

    return (
        <div className={s.navigation}>
            <ul className={s.navigationList}>
                <li className={s.navigationEl}>
                    <NavLink to="/about" className={setActive}>About</NavLink>
                </li>
                <li className={s.navigationEl}>
                    <NavLink to="/services" className={setActive}>Services</NavLink>
                </li>
                <li className={s.navigationEl}>
                    <NavLink to="/contacts" className={setActive}>Contacts</NavLink>
                </li>
                <li className={s.navigationEl}>
                    <NavLink to="/order" className={setActive}>Order</NavLink>
                </li>
            </ul>
        </div>   
    );
};
  
export default Navigation