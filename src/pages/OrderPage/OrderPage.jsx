import Container from '../../components/Container';
import Header from '../../components/Header';
import ButtonBack from '../../components/ButtonBack';
import Form from '../../components/Form';
import SocialMedia from '../../components/SocialMedia';
import s from './OrderPage.module.css'

export default function OrderPage() {

    return(
        <div className={s.order}>
            <Container>
                <div className={s.main}>
                    <Header/>
                    <div className={s.centerMain}>
                        <ButtonBack/>
                        <Form/>
                        <SocialMedia/>
                    </div>
                </div>
            </Container>
        </div>
    )
}