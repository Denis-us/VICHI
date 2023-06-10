import React, { useState, useRef} from 'react';
import ReactPlayer from 'react-player';
import { ReactComponent as IconPlay } from '../../pictures/svg/arrow-play-nav.svg';
import { ReactComponent as Volume } from '../../pictures/svg/volume.svg';
import { ReactComponent as Soundless } from '../../pictures/svg/soundless.svg';
import { ReactComponent as Pause } from '../../pictures/svg/pause.svg';
import s from './Player.module.css';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking] = useState(false);
  const playerRef = useRef(null);
  const sliderRef = useRef(null);
  const handleRef = useRef(null);
  const controlsRef = useRef(null);
  const playBtnRef = useRef(null);
  const [mute, setMute] = useState(false);

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

    return (
        <>
            <div className={s.playerWrapper} >
                <ReactPlayer
                    ref={playerRef}
                    width={'100%'}
                    height={'100%'}
                    url="https://www.youtube.com/watch?v=G2nAezLoy2k"
                    muted={mute}
                    playing={isPlaying}
                    onProgress={handleProgress}
                    onDuration={handleDuration}
                    volume={mute ? 0 : 1}
                />
            </div>
        
            <div className={s.controlsWrapper} ref={controlsRef} onClick={handlePlayPause}>
                <h5 className={s.playerTitle}>Video title</h5>

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
                        <Volume className={s.iconVolume}/>
                        {mute && <Soundless className={s.iconSoundless} />}
                    </div>
                </div>
            </div>
        </>
        
    );
};
  
export default Player