import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import logo from '../../pictures/svg/logo-black.svg';
import s from './TestPage.module.css'
import fetch from "../../services/axios"


export default function TestPage() {
    const [files, setFiles] = useState([])

    useEffect(() => {
        fetch.googleDriveFiles().then(res =>
            // setFiles(res.data.data.photos
            console.log(res.data))

    }, [])
    
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