import Header from '../../components/Header';
import SocialMedia from '../../components/SocialMedia';
import Equalizer from '../../components/Equalizer';
import s from './HomePage.module.css'


export default function HomePage() {
    const color = '#ececec'

    return(
        <div className={s.home}>
            <Header/>
            <SocialMedia color={color}/>
            <Equalizer/>
        </div>
    )
}