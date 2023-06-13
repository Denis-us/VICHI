import { useNavigate } from 'react-router-dom';
import s from './ButtonBack.module.css';
import { ReactComponent as ArrowBack } from '../../pictures/svg/btn-back.svg';

const ButtonBack = ({btnTop, playerBtn}) => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };

    return (
        <button className={s.button} onClick={goBack}
        style={btnTop ? { top: btnTop, ...playerBtn } : playerBtn}
        >
            <ArrowBack className={s.ico}/>
        </button>   
    );
};
  
export default ButtonBack