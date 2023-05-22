import Header from '../../components/Header';
import Contacts from '../../components/Contacts';
import GoogleMapComponent from '../../components/GoogleMap';
import s from './ContactsPage.module.css'

export default function ContactsPage() {

    return(
        <div className={s.contacts}>
            <GoogleMapComponent/>
            <Header/>
            <Contacts/>
        </div>
    )
}