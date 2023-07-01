import Container from '../../components/Container';
import Header from '../../components/Header';
import ClientsComponent from '../../components/ClientsComponent';
import SocialMedia from '../../components/SocialMedia';
import ButtonBack from '../../components/ButtonBack';
import s from './ClientsPage.module.css';

export default function ClientsPage() {
 
    return(
        <div className={s.about}>
            <Container>
                <div className={s.main}>
                    <Header/>
                    <div className={s.centerMain}>
                        <ButtonBack/>
                        <ClientsComponent/>
                        <SocialMedia/>
                    </div>
                </div>               
            </Container>
        </div>
    )

}