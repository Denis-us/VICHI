import Container from '../../components/Container';
import Header from '../../components/Header';
import CompanyComponent from '../../components/CompanyComponent';
import SocialMedia from '../../components/SocialMedia';
import ButtonBack from '../../components/ButtonBack';
import s from './CompanyPage.module.css';

export default function CompanyPage() {
 
    return(
        <div className={s.company}>
            <Container>
                <ButtonBack/>
                <Header/>
                <SocialMedia/>
                <CompanyComponent/>
            </Container>
        </div>
    )
}