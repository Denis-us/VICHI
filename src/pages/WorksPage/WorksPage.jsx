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

    const color = '#ececec'

    return(
        <div className={s.works} style={{backgroundImage: `url(${bgImg})`}}>
            <Container>
                <ButtonBack/>
                <Header/>
                <SocialMedia color={color}/>
                <SliderNew photos={photos} onSlideChange={onSlideChange}/>
            </Container>
        </div>
    )
};