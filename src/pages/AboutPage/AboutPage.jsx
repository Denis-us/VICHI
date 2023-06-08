import Container from '../../components/Container';
import Header from '../../components/Header';
import AboutComponents from '../../components/AboutComponent';
import SocialMedia from '../../components/SocialMedia';
import ButtonBack from '../../components/ButtonBack';
import s from './AboutPage.module.css';

export default function AboutPage() {
 
    return(
        <div className={s.about}>
            <Container>
                <ButtonBack/>
                <Header/>
                <SocialMedia/>
                <AboutComponents/>
            </Container>
        </div>
    )
}