import React, { useState, useRef, useEffect} from 'react';
import ReactPlayer from 'react-player';
import { Link, useLocation } from 'react-router-dom';
import ButtonBack from '../../components/ButtonBack';
import { ReactComponent as IconPlay } from '../../pictures/svg/arrow-play-nav.svg';
import { ReactComponent as Volume } from '../../pictures/svg/volume.svg';
import { ReactComponent as Mute } from '../../pictures/svg/mute.svg';
import { ReactComponent as Pause } from '../../pictures/svg/pause.svg';
import s from './Player.module.css';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMouseActive, setIsMouseActive] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking] = useState(false);
  const playerRef = useRef(null);
  const sliderRef = useRef(null);
  const handleRef = useRef(null);
  const controlsRef = useRef(null);
  const playBtnRef = useRef(null);
  const [mute, setMute] = useState(false);

  const location = useLocation();
  const video = location.state;
  const viewMoreInfoUrl = `${location.pathname}/work-info`;

  useEffect(() => {
    let timeout;

    const handleMouseMove = () => {
      setIsMouseActive(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMouseActive(false);
      }, 3000);
    };

    const controls = controlsRef.current;

    controls.addEventListener('mousemove', handleMouseMove);

    return () => {
      controls.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  const handlePlayPause = (event) => {
    const target = event.target
    const currentTarget = event.currentTarget

    if(currentTarget === playBtnRef.current || target === controlsRef.current) {
      setIsPlaying(!isPlaying);
    }
    
  };

  const handleSeek = (event) => {
    const slider = sliderRef.current;
    const clickPosition = event.clientX - slider.getBoundingClientRect().left;
    const newPosition = (clickPosition / slider.offsetWidth) * duration;
  
    setCurrentTime(newPosition);
  
    const handle = handleRef.current;
    const sliderWidth = slider.offsetWidth;
    const handleWidth = handle.offsetWidth;
    const progressPercentage = (newPosition / duration) * 100;
    const handlePosition = (progressPercentage / 100) * sliderWidth - handleWidth / 2;
  
    handle.style.transition = "left 0.3s";
    handle.style.left = `${handlePosition}px`;
  
    setTimeout(() => {
      handle.style.transition = "";
    }, 300);
  
    playerRef.current.seekTo(newPosition);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgress = (progress) => {
    if (!isSeeking) {
      setCurrentTime(progress.playedSeconds);
      const handle = handleRef.current;
      const slider = sliderRef.current;
      const sliderWidth = slider.offsetWidth;
      const handleWidth = handle.offsetWidth;
      const progressPercentage = (progress.playedSeconds / duration) * 100;
      const handlePosition = (progressPercentage / 100) * sliderWidth - handleWidth / 2;
      handle.style.left = `${handlePosition}px`;
    }
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleMuteClick = () => {
    setMute((prevMute) => !prevMute);
  };

  const btnBackStyle = {
    position: 'relative',
    marginRight: '30px',
    top: '0'
  }

    return (
        <>
            <ReactPlayer
              ref={playerRef}
              width={'100%'}
              height={'100%'}
              url={`${process.env.PUBLIC_URL}/${video.src}`}
              muted={mute}
              playing={isPlaying}
              onProgress={handleProgress}
              onDuration={handleDuration}
              volume={mute ? 0 : 0.5}
              className={s.playerWrapper}
            />
        
            <div className={`${s.controlsWrapper} ${isMouseActive && s.mouseActive}`} ref={controlsRef} onClick={handlePlayPause}>
                
              <div className={s.topControls}>
                  <ButtonBack playerBtn={btnBackStyle}/>
                  <h5 className={s.playerTitle}>{video.alt}</h5>
              </div>

              <div className={s.middleControls}>
                  <Link to={ viewMoreInfoUrl } className={s.btnMore}>more about this work</Link>
              </div>
                

              <div className={s.bottomControls}>
                    <div className={s.time}>{formatTime(currentTime)}</div>

                    <div className={s.sliderContainer} ref={sliderRef} onClick={handleSeek}>
                        <div className={s.slider}></div>
                        <div className={s.sliderHandle} ref={handleRef}></div>
                    </div>

                    <div className={`${s.play} ${s.iconHover}`}  ref={playBtnRef} onClick={handlePlayPause}>
                        {isPlaying
                        ? <Pause className={s.iconPause}/>
                        : <IconPlay className={s.iconPlay}/>}
                    </div>
                    
                    <div className={`${s.volumeWrapper} ${s.iconHover}`} onClick={handleMuteClick}>
                        {mute
                        ? <Mute className={s.iconMute}/>
                        : <Volume className={s.iconVolume}/>}
                    </div>
              </div>
            </div>
        </>
        
    );
};
  
export default Player