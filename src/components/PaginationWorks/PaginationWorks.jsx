import React from 'react';
import { ReactComponent as Arrow } from '../../pictures/svg/arrow-works.svg';
import s from './PaginationWorks.module.css'

const PaginationWorks = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className={s.worksPagination}>
        <button className={s.button}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}>
          <Arrow className={`${s.prevPage} ${s.arrow}`}/>
        </button>
        
        <div className={s.pages}>
          {currentPage}/{totalPages}
        </div>

        <button className={s.button}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}>
          <Arrow className={`${s.nextPage} ${s.arrow}`}/>
        </button>
    </div>
  );
};

export default PaginationWorks;