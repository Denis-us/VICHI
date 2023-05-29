import Header from '../../components/Header';
import SocialMedia from '../../components/SocialMedia';
import ButtonBack from '../../components/ButtonBack';
import Form from '../../components/Form';
import s from './OrderPage.module.css'


export default function OrderPage() {
    const color = 'rgb(104, 104, 104)'

    return(
        <div className={s.order}>
            <ButtonBack/>
            <Header/>
            <SocialMedia color={color}/>
            <Form/>
        </div>
    )
}