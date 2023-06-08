import s from './Contacts.module.css';
import { ReactComponent as Tel } from '../../pictures/svg/phone.svg';

const Contacts = () => {

    return (
        <div className={s.blockContacts}>
            <ul className={s.contactsList}>
                <li className={s.contactsEl}>
                    <button className={s.contactBtn}>VICI.AGENCY@GMAIL.COM</button>
                </li>
                <li className={s.contactsEl}>
                    <button className={s.contactBtn}>
                        <Tel className={s.icoTel}/>
                    </button>
                </li>
                <li className={s.contactsEl}>
                    <button className={s.contactBtn}>KYIV, SOLOVIANENKA ST.</button>
                </li>
            </ul>
            
            
            
        </div>   
    );
};
  
export default Contacts