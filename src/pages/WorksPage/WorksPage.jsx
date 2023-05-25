import React, {useState} from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import slides from '../../images.json';
import s from './WorksPage.module.css';


export default function WorksPage() {

    const [bgImg, setBgImg] = useState('');

    const onSlideChange = (activeSlide) => {
        setBgImg(activeSlide.image);
        console.log(activeSlide)
    };

    return(
        <div className={s.works} style={{backgroundImage: `url(${bgImg})`}}>
            <Header/>
            <Slider slides={slides} onSlideChange={onSlideChange}/>
        </div>
    )
}