import Header from '../../components/Header';
import Owner from '../../components/Owner';
import SocialMedia from '../../components/SocialMedia'
import s from './AboutPage.module.css';

export default function AboutPage() {
    const color = 'rgb(104, 104, 104)'
    
    return(
        <div className={s.about}>
            <Header/>
            <SocialMedia color={color}/>
            <Owner/>
        </div>
    )
}