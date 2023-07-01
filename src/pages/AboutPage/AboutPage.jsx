import Container from '../../components/Container';
import Header from '../../components/Header';
import AboutComponent from '../../components/AboutComponent';
import SocialMedia from '../../components/SocialMedia';
import ButtonBack from '../../components/ButtonBack';
import s from './AboutPage.module.css';

export default function AboutPage() {
 
    return(
        <div className={s.about}>
            <Container>
                <div className={s.main}>
                    <Header/>
                    <div className={s.centerMain}>
                        <ButtonBack/>
                        <AboutComponent/>
                        <SocialMedia/>
                    </div>
                </div>               
            </Container>
        </div>
    )

}