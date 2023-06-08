import React from 'react';
import { Link, useLocation   } from 'react-router-dom';
import s from './AboutComponent.module.css';

const AboutComponent = () => {
    const location = useLocation();
    const teamPageUrl = `${location.pathname}/team`;
    const principlesPageUrl = `${location.pathname}/principles`;
    const companyPageUrl = `${location.pathname}/company`;
    

    return (
        <div className={s.aboutBlock}>
            <ul className={s.aboutList}>
                <li className={s.aboutEl}>
                    <p className={s.text}>TEAM</p>
                    <div className={s.hiddenText}>
                        <p className={s.hiddenHeader}>TEAM</p>
                        <p className={s.hiddenDescription}>word word word word word word word word word word word word word word word word word word word word word word word</p>
                        <Link to={teamPageUrl} className={s.hiddenLink}>learn more</Link>
                    </div>
                </li>
                <li className={s.aboutEl}>
                    <p className={s.text}>PRINCIPLES</p>
                    <div className={s.hiddenText}>
                        <p className={s.hiddenHeader}>PRINCIPLES</p>
                        <p className={s.hiddenDescription}>word word word word word word word word word word word word word word word word word word word word word word word</p>
                        <Link to={principlesPageUrl} className={s.hiddenLink}>learn more</Link>
                    </div>
                </li>
                <li className={s.aboutEl}>
                    <p className={s.text}>COMPANY</p>
                    <div className={s.hiddenText}>
                        <p className={s.hiddenHeader}>COMPANY</p>
                        <p className={s.hiddenDescription}>word word word word word word word word word word word word word word word word word word word word word word word</p>
                        <Link to={companyPageUrl} className={s.hiddenLink}>learn more</Link>
                    </div>
                </li>
            </ul>
        </div>   
    );
};
  
export default AboutComponent