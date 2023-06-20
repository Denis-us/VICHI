import React, {useState, useEffect} from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import ButtonBack from '../../components/ButtonBack';
import SocialMedia from '../../components/SocialMedia'
import SliderNew from '../../components/SliderNew';
import s from './WorksPage.module.css';
import fetch from "../../services/axios"


export default function WorksPage() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch.getAllPicture().then(res =>
            setPhotos(res.data.data.photos))
    }, [])

    const [bgImg, setBgImg] = useState('');

    const onSlideChange = (activeSlide) => {
        setBgImg(activeSlide.image);
    };

    return(
        <div className={s.works} style={{backgroundImage: `url(${bgImg})`}}>
            <Container>
                <div className={s.main}>
                    <Header/>
                    <div className={s.centerMain}>
                        <ButtonBack/>
                        <SliderNew photos={photos} onSlideChange={onSlideChange}/>
                        <SocialMedia/>
                    </div>
                </div>
            </Container>
        </div>
    )
};