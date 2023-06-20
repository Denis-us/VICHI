
import s from './BurgerMenu.module.css';

const BurgerMenu = ({isClicked, handleClick}) => {
    

    return (
        <div className={`${s.burger} ${isClicked ? s.clicked : ''}`} onClick={handleClick}>
            <div className={s.bar}></div>
            <div className={s.bar}></div>
            <div className={s.bar}></div>
        </div>
    );
};
  
export default BurgerMenu