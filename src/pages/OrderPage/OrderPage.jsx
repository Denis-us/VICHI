import Container from '../../components/Container';
import Header from '../../components/Header';
// import SocialMedia from '../../components/SocialMedia';
import ButtonBack from '../../components/ButtonBack';
import Form from '../../components/Form';
import s from './OrderPage.module.css'


export default function OrderPage() {
    // const btnTop = '0'

    return(
        <div className={s.order}>
            <Container>
                <ButtonBack/>
                <Header/>
                {/* <SocialMedia color={color}/> */}
                <Form/>
            </Container>
        </div>
    )
}