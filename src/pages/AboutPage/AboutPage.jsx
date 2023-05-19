import Header from '../../components/Header';
import Owner from '../../components/Owner';
import s from './AboutPage.module.css';

export default function AboutPage() {

    return(
        <div className={s.about}>
            <Header/>
            <Owner/>
        </div>
    )
}