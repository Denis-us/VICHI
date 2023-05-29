import Header from '../../components/Header';
import Owner from '../../components/Owner';
import SocialMedia from '../../components/SocialMedia';
import ButtonBack from '../../components/ButtonBack';
import s from './AboutPage.module.css';

export default function AboutPage() {
    const color = 'rgb(104, 104, 104)'
    
    return(
        <div className={s.about}>
            <ButtonBack/>
            <Header/>
            <SocialMedia color={color}/>
            <Owner/>
        </div>
    )
}