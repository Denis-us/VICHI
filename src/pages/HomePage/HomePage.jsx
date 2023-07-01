import React, { useState, useEffect } from 'react';
import videos from '../../json/homepage.json'
import Container from '../../components/Container';
import Header from '../../components/Header';
import HomepageSlides from '../../components/HomepageSlides';
import SocialMedia from '../../components/SocialMedia';
import Equalizer from '../../components/Equalizer';
import BtnPlayer from '../../components/BtnPlayer';
import s from './HomePage.module.css'


export default function HomePage() {
    const display = 'flex'

      const [currentVideo, setCurrentVideo] = useState(videos[0]);
      const [videoId, setVideoId] = useState(0)
      const [backgroundImage, setBackgroundImage] = useState(null);

      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentVideo((prevVideo) => {
            const currentIndex = videos.findIndex((video) => video.id === prevVideo.id);
            const nextIndex = (currentIndex + 1) % videos.length;
            setVideoId(nextIndex);
            return videos[nextIndex];
          });
        }, 5000);
    
        if (window.innerWidth < 1440) {
          setBackgroundImage(`${process.env.PUBLIC_URL}${currentVideo.image}`);
        }
    
        return () => {
          clearInterval(timer);
        };
      }, [currentVideo]);

    return(
        <div className={s.home} style={{ backgroundImage: window.innerWidth < 1440 ? `url(${backgroundImage})` : undefined }}>
              {window.innerWidth >= 1440 && (
                <video id='video-player' src={`${process.env.PUBLIC_URL}${currentVideo.src}`} type="video/mp4" autoPlay loop muted className={s.videoHome}></video>
              )}
              <Container>
                <div className={s.main}>
                    <Header/>
                    <div className={s.centerMain}>
                        <HomepageSlides id={videoId}/>
                        <SocialMedia display={display}/>
                    </div>
                    <div className={s.bottomMain}>
                        <Equalizer/>
                        <BtnPlayer/>
                    </div>
                </div>
                
              </Container>
        </div>
    )
}