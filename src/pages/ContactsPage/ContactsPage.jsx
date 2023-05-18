import Header from '../../components/Header';
import Contacts from '../../components/Contacts';
import s from './ContactsPage.module.css'

export default function ContactsPage() {

    return(
        <div className={s.contacts}>
            <Header/>
            <Contacts/>
        </div>
    )
}