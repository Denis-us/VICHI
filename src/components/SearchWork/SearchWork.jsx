import React from 'react';
import { ReactComponent as Search } from '../../pictures/svg/search.svg';
import s from './SearchWork.module.css'

const SearchWork = () => {


  return (
    <form className={s.searchWork}>
        <Search className={s.searchIcon}/>
        <input className={s.searchInput} value=''/>
        <button type="submit" className={s.searchBtn}>Search</button>
    </form>
  );
};

export default SearchWork;