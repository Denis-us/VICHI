import { Link, useLocation } from 'react-router-dom';
import s from './BtnViewAll.module.css';

const BtnViewAll = () => {
    const location = useLocation();
    const viewAllUrl = `${location.pathname}/all`;

    return (
        <div className={s.btnAll}>
            <Link to={viewAllUrl} className={s.viewAll}>view all</Link>
        </div> 
    );
};
  
export default BtnViewAll