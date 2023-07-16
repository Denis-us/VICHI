import React, {useState} from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Contacts from '../../components/Contacts';
import ButtonBack from '../../components/ButtonBack';
import GoogleMapComponent from '../../components/GoogleMap';
import SocialMedia from '../../components/SocialMedia';
import s from './ContactsPage.module.css'

export default function ContactsPage() {
    const [isMapCentered, setIsMapCentered] = useState(false);

    const handleContactBtnClick = () => {
        setIsMapCentered(true);
    };

    return(
        <div className={s.contacts}>
            <Container>
                <div className={s.main}>
                    <Header/>
                    <div className={s.centerMain}>
                        <ButtonBack/>
                        <div>
                            <div className={s.map}>
                                <GoogleMapComponent className={s.googleMap} isMapCentered={isMapCentered}/>
                            </div>
                            <Contacts onContactBtnClick={handleContactBtnClick}/>
                        </div>
                        <SocialMedia/>
                    </div>
                </div>    
            </Container>
        </div>
    )
}