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
                <li className={s.worksEl}>
                    <Link to={playerPageUrl} className={s.work}>
                        <p className={s.workTitle}>Pepsi</p>
                        <p className={s.number}>01</p>

                        <div className={s.workHidden}>
                            <div className={s.workDescription}>
                                <div className={s.workDescriptionStr}>
                                    <p className={s.workName}>company</p>
                                    <p className={s.workValue}>JELLYFISH</p>
                                </div>
                                <div className={s.workDescriptionStr}>
                                    <p className={s.workName}>name</p>
                                    <p className={s.workValue}>OCEAN</p>
                                </div>
                                <div className={s.workDescriptionStr}>
                                    <p className={s.workName}>director</p>
                                    <p className={s.workValue}>MELNYK KOSTYA</p>
                                </div>
                            </div>
                            
                            <p className={s.workDuration}>01:34:12</p>

                            <p className={s.numberHidden}>01</p>
                        </div>
                    </Link>
                </li>
                <li className={s.worksEl}>
                    <Link to={playerPageUrl} className={s.work}>
                        <p className={s.workTitle}>CocaCola</p>
                        <p className={s.number}>02</p>

                        <div className={s.workHidden}>
                            <div className={s.workDescription}>
                                <div className={s.workDescriptionStr}>
                                    <p className={s.workName}>company</p>
                                    <p className={s.workValue}>JELLYFISH</p>
                                </div>
                                <div className={s.workDescriptionStr}>
                                    <p className={s.workName}>name</p>
                                    <p className={s.workValue}>OCEAN</p>
                                </div>
                                <div className={s.workDescriptionStr}>
                                    <p className={s.workName}>director</p>
                                    <p className={s.workValue}>MELNYK KOSTYA</p>
                                </div>
                            </div>
                            
                            <p className={s.workDuration}>01:34:12</p>

                            <p className={s.numberHidden}>02</p>
                        </div>
                    </Link>
                </li>
                <li className={s.worksEl}>
                    <Link to={playerPageUrl} className={s.work}>
                        <p className={s.workTitle}>Cola</p>
                        <p className={s.number}>03</p>

                        <div className={s.workHidden}>
                            <div className={s.workDescription}>
                                <div className={s.workDescriptionStr}>
                                    <p className={s.workName}>company</p>
                                    <p className={s.workValue}>JELLYFISH</p>
                                </div>
                                <div className={s.workDescriptionStr}>
                                    <p className={s.workName}>name</p>
                                    <p className={s.workValue}>OCEAN</p>
                                </div>
                                <div className={s.workDescriptionStr}>
                                    <p className={s.workName}>director</p>
                                    <p className={s.workValue}>MELNYK KOSTYA</p>
                                </div>
                            </div>
                            
                            <p className={s.workDuration}>01:34:12</p>

                            <p className={s.numberHidden}>03</p>
                        </div>
                    </Link>
                </li>
            </ul>
            <PaginationWorks/>
        </div>   
    );
};
  
export default AllWorksComponent