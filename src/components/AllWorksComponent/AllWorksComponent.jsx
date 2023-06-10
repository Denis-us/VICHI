import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import PaginationWorks from '../PaginationWorks';
import s from './AllWorksComponent.module.css';

const AllWorksComponent = () => {
    const location = useLocation();
    const playerPageUrl = `${location.pathname}/player`;

    return (
        <div className={s.worksBlocks}>
            <ul className={s.worksList}>
                <li>
                    <Link to={playerPageUrl} className={s.work}>
                        <p className={s.workName}>Pepsi</p>
                        <p className={s.number}>01</p>
                    </Link>
                </li>
                <li>
                    <Link to={playerPageUrl} className={s.work}>
                        <p className={s.workName}>CocaCola</p>
                        <p className={s.number}>02</p>
                    </Link>
                </li>
                <li>
                    <Link to={playerPageUrl} className={s.work}>
                        <p className={s.workName}>Cola</p>
                        <p className={s.number}>03</p>
                    </Link>
                </li>
            </ul>
            <PaginationWorks/>
        </div>   
    );
};
  
export default AllWorksComponent