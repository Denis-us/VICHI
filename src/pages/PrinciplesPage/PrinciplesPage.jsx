import Container from '../../components/Container';
import Header from '../../components/Header';
import PrinciplesComponent from '../../components/PrinciplesComponent';
import SocialMedia from '../../components/SocialMedia';
import ButtonBack from '../../components/ButtonBack';
import s from './PrinciplesPage.module.css';

export default function PrinciplesPage() {
 
    return(
        <div className={s.principles}>
            <Container>
                <div className={s.main}>
                    <Header/>
                    <div className={s.centerMain}>
                        <ButtonBack/>
                        <PrinciplesComponent/>
                        <SocialMedia/>
                    </div>
                </div>               
            </Container>
        </div>
    )
}