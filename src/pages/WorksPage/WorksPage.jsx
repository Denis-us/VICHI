import React, {useState} from 'react';
import images from '../../json/images.json';
import Container from '../../components/Container';
import Header from '../../components/Header';
import ButtonBack from '../../components/ButtonBack';
import SocialMedia from '../../components/SocialMedia'
import SliderNew from '../../components/SliderNew';
import s from './WorksPage.module.css';
// import fetch from "../../services/axios"


export default function WorksPage() {
    const [bgImg, setBgImg] = useState(0);

    // useEffect(() => {
    //     fetch.getAllPicture().then(res =>
    //         setPhotos(res.data.data.photos));
    // }, []);
   
    const onSlideChange = (activeSlide) => {
        setBgImg(activeSlide);
        console.log(activeSlide)
    };

    return (
        <div className={s.works} style={{backgroundImage: `url(${process.env.PUBLIC_URL}${bgImg.image})`}}>
            {window.innerWidth >= 1440 && (
                <video id='video-player' src={`${process.env.PUBLIC_URL}${bgImg.src}`} type="video/webm" autoPlay loop muted className={s.video}></video>
            )}
            <Container>
                <div className={s.main}>
                    <Header/>
                    <div className={s.centerMain}>
                        <ButtonBack/>
                        <SliderNew photos={images} onSlideChange={onSlideChange}/>
                        <SocialMedia/>
                    </div>
                </div>
            </Container>
        </div>
    )
};