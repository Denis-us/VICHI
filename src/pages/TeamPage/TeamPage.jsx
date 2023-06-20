import Container from '../../components/Container';
import Header from '../../components/Header';
import ButtonBack from '../../components/ButtonBack';
import SocialMedia from '../../components/SocialMedia';
import TeamComponent from '../../components/TeamComponent';
import s from './TeamPage.module.css';

const TeamPage = () => {

    return (
        <div className={s.team}>
            <Container>
                <div className={s.main}>
                    <Header/>
                    <div className={s.centerMain}>
                        <ButtonBack/>
                        <TeamComponent/>
                        <SocialMedia/>
                    </div>
                </div>               
            </Container>
        </div>   
    );
};
  
export default TeamPage