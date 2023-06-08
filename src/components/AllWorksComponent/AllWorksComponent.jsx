import React from 'react';
import PaginationWorks from '../PaginationWorks'
import s from './AllWorksComponent.module.css';

const AllWorksComponent = () => {

    return (
        <div className={s.worksBlocks}>
            <ul className={s.worksList}>
                <li className={s.work}>
                    <p className={s.workName}>Pepsi</p>
                    <p className={s.number}>01</p>
                </li>
                <li className={s.work}>
                    <p className={s.workName}>CocaCola</p>
                    <p className={s.number}>02</p>
                </li>
                <li className={s.work}>
                    <p className={s.workName}>Cola</p>
                    <p className={s.number}>03</p>
                </li>
            </ul>
            <PaginationWorks/>
        </div>   
    );
};
  
export default AllWorksComponent