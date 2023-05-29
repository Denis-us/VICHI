import { useNavigate } from 'react-router-dom';
import s from './ButtonBack.module.css';
import { ReactComponent as ArrowBack } from '../../pictures/svg/arrow-back.svg';

const ButtonBack = () => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };

    return (
        <button className={s.button} onClick={goBack}>
            <ArrowBack className={s.ico}/>
        </button>   
    );
};
  
export default ButtonBack