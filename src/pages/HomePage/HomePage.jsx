import Header from '../../components/Header';
import SocialMedia from '../../components/SocialMedia';
import s from './HomePage.module.css'


export default function HomePage() {

    return(
        <div className={s.home}>
            <Header/>
            <SocialMedia/>
        </div>
    )
}