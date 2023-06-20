import React from 'react';
import s from './PrinciplesComponent.module.css';

const PrinciplesComponent = () => {

    return (
        <div className={s.principlesBlock}>
            <div className={s.principles}>
                <h1 className={s.title}>3D</h1>
                <ul className={s.list}>
                    <li className={s.listEl}>
                        <p className={s.elTitle}>DУМАЙ</p>
                        <p className={s.elText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </li>
                    <li className={s.listEl}>
                        <p className={s.elTitle}>DІЙ</p>
                        <p className={s.elText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </li>
                    <li className={s.listEl}>
                        <p className={s.elTitle}>DИВИСЬ</p>
                        <p className={s.elText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </li>
                </ul>
            </div>
        </div>   
    );
};
  
export default PrinciplesComponent