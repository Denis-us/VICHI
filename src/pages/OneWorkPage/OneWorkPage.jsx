import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import OneWorkComponent from '../../components/OneWorkComponent';
import ButtonBack from '../../components/ButtonBack';
import s from './OneWorkPage.module.css'


export default function OneWorkPage() {
    const btnTop = '0'

    return(
        <div className={s.oneWork}>
            <Container>
                <ButtonBack btnTop={btnTop}/>
                <Header/>
                <OneWorkComponent
                // oneWork={}
                />
            </Container>
        </div>
    )
}