import s from './HomepageSlides.module.css';


const HomepageSlides = ({id}) => {

    return (
        <div className={s.slides}>
            <p className={`${s.numberSlide} ${id === 0 ? s.active : ''}`}>1</p>
            <p className={`${s.numberSlide} ${id === 1 ? s.active : ''}`}>2</p>
            <p className={`${s.numberSlide} ${id === 2 ? s.active : ''}`}>3</p>
        </div>
    );
  };
  
export default HomepageSlides