import React, {useState} from 'react';
import Header from '../../components/Header';
import SocialMedia from '../../components/SocialMedia'
import Slider from '../../components/Slider';
import slides from '../../images.json';
import s from './WorksPage.module.css';


export default function WorksPage() {

    const [bgImg, setBgImg] = useState('');

    const onSlideChange = (activeSlide) => {
        setBgImg(activeSlide.image);
    };

    const color = '#ececec'

    return(
        <div className={s.works} style={{backgroundImage: `url(${bgImg})`}}>
            <Header/>
            <SocialMedia color={color}/>
            <Slider slides={slides} onSlideChange={onSlideChange}/>
        </div>
    )
};