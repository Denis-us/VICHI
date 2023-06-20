import { Link } from 'react-router-dom';
import { ReactComponent as IconArrow } from '../../pictures/svg/arrow-play-nav.svg';
import s from './BtnPlayer.module.css';

const BtnPlayer = () => {

    return (
            <div className={s.btnPlay}>
                <Link to="/works/all/player">
                    <IconArrow className={s.iconArrow}/>
                </Link>
            </div>
    );
};
  
export default BtnPlayer