import Container from '../../components/Container';
import Header from '../../components/Header';
import AllWorksComponent from '../../components/AllWorksComponent';
import SocialMedia from '../../components/SocialMedia';
import ButtonBack from '../../components/ButtonBack';
import s from './AllWorksPage.module.css';

export default function AllWorksPage() {
    
    return(
        <div className={s.allWorks}>
            <Container>
                <div className={s.main}>
                    <Header/>
                    <div className={s.centerMain}>
                        <ButtonBack/>
                        <AllWorksComponent/>
                        <SocialMedia/>
                    </div>
                </div>       
            </Container>
        </div>
    )
}