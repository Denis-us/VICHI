import s from './Navigation.module.css';

const Navigation = () => {

    return (
        <div className={s.navigation}>
            <ul className={s.navigationList}>
                <li className={s.navigationEl}>
                    <button className={s.navEl}>About</button>
                </li>
                <li className={s.navigationEl}>
                    <button className={s.navEl}>Services</button>
                </li>
                <li className={s.navigationEl}>
                    <button className={s.navEl}>Contacts</button>
                </li>
                <li className={s.navigationEl}>
                    <button className={s.navEl}>Order</button>
                </li>
            </ul>
        </div>   
    );
};
  
export default Navigation