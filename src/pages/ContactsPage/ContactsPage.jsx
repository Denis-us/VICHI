import Container from '../../components/Container';
import Header from '../../components/Header';
import Contacts from '../../components/Contacts';
import ButtonBack from '../../components/ButtonBack';
import GoogleMapComponent from '../../components/GoogleMap';
import s from './ContactsPage.module.css'

export default function ContactsPage() {
    const btnTop = '0'
    
    return(
        <div className={s.contacts}>
            <Container>
                <ButtonBack btnTop={btnTop}/>

                <div className={s.map}>
                    <GoogleMapComponent/>
                </div>
                
                <Header/>
                <Contacts/>
            </Container>
        </div>
    )
}