import React from 'react';
import { ReactComponent as Arrow } from '../../pictures/svg/arrow-works.svg';
import s from './PaginationWorks.module.css'

const PaginationWorks = () => {


  return (
    <div className={s.worksPagination}>
        <Arrow className={`${s.prevPage} ${s.arrow}`}/>
        <div className={s.pages}>
            2/3
        </div>
        <Arrow className={`${s.nextPage} ${s.arrow}`}/>
    </div>
  );
};

export default PaginationWorks;