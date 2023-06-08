import Container from '../../components/Container';
import logo from '../../pictures/svg/logo-black.svg';
import s from './TestPage.module.css'


export default function TestPage() {


    return (
        <Container>
            <div className={s.triangleCenter}>
                <div className={s.triangleBlock}>
                    <img src={logo} alt="logo" className={s.logoImg}/>
                    <div className={s.triangleInside}></div>
                    <div className={s.triangle}></div> 
                </div>
            </div>
        </Container>
    )
}