import React from 'react';
import s from './PrinciplesComponent.module.css';

const PrinciplesComponent = () => {

    return (
        <div className={s.principlesBlock}>
            <div className={s.principles}>
                <div className={s.titles}>
                    <h1 className={s.firstTitle}>3D</h1>
                    <p className={s.secondTitle}>DУМАЙ DІЙ DИВИСЬ</p>
                </div>
                
                <ul className={s.list}>
                    <li className={s.listEl}>
                        <p className={s.elTitle}>DУМАЙ</p>
                        <p className={s.elText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                    </li>
                    <li className={s.listEl}>
                        <p className={s.elTitle}>DІЙ</p>
                        <p className={s.elText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                    </li>
                    <li className={s.listEl}>
                        <p className={s.elTitle}>DИВИСЬ</p>
                        <p className={s.elText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                    </li>
                </ul>
            </div>
        </div>   
    );
};
  
export default PrinciplesComponent