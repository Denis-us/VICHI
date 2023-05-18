import Header from '../../components/Header';
import Form from '../../components/Form';
import s from './OrderPage.module.css'

export default function OrderPage() {

    return(
        <div className={s.order}>
            <Header/>
            <Form/>
        </div>
    )
}