import s from './Lang.module.css';

const Lang = () => {

    return (
        <div className={s.lang}>
            <ul className={s.langList}>
                <li className={s.langListEl}>
                    <button className={s.langEl}>UA</button>
                </li>
                <li className={s.langListEl}>
                    <button className={s.langEl}>EN</button>
                </li>
            </ul>
        </div>
    );
  };
  
export default Lang
