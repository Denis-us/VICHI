import Container from '../../components/Container';
import Header from '../../components/Header';
import Contacts from '../../components/Contacts';
import ButtonBack from '../../components/ButtonBack';
import GoogleMapComponent from '../../components/GoogleMap';
import SocialMedia from '../../components/SocialMedia';
import s from './ContactsPage.module.css'

export default function ContactsPage() {
    const btnTop = '0'
    
    return(
        <div className={s.contacts}>
            <Container>
                <div className={s.main}>
                    <Header/>
                    <div className={s.centerMain}>
                        <ButtonBack btnTop={btnTop}/>
                        <div>
                            <div className={s.map}>
                                <GoogleMapComponent className={s.googleMap}/>
                            </div>
                            <Contacts/>
                        </div>
                        <SocialMedia/>
                    </div>
                </div>    
            </Container>
        </div>
    )
}