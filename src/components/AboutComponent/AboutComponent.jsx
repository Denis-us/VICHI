import React from 'react';
import { Link, useLocation   } from 'react-router-dom';
import s from './AboutComponent.module.css';

const AboutComponent = () => {
    const location = useLocation();
    const teamPageUrl = `${location.pathname}/team`;
    const principlesPageUrl = `${location.pathname}/principles`;
    const companyPageUrl = `${location.pathname}/company`;
    const clientsPageUrl = `${location.pathname}/clients`;
    

    return (
        <div className={s.aboutBlock}>
            <ul className={s.aboutList}>
                <li className={s.aboutEl}>
                    <Link to={teamPageUrl} className={s.aboutLink}>
                        <p className={s.text}>TEAM</p>
                        <div className={s.hiddenText}>
                            <p className={s.hiddenHeader}>TEAM</p>
                            <p className={s.hiddenDescription}>word word word word word word</p>
                            <p className={s.hiddenLink}>learn more</p>
                        </div>
                    </Link>
                </li>
                <li className={s.aboutEl}>
                    <Link to={principlesPageUrl} className={s.aboutLink}>
                        <p className={s.text}>PRINCIPLES</p>
                        <div className={s.hiddenText}>
                            <p className={s.hiddenHeader}>PRINCIPLES</p>
                            <p className={s.hiddenDescription}>word word word word word word word</p>
                            <p className={s.hiddenLink}>learn more</p>
                        </div>
                    </Link>
                </li>
                <li className={s.aboutEl}>
                    <Link to={companyPageUrl} className={s.aboutLink}>
                        <p className={s.text}>COMPANY</p>
                        <div className={s.hiddenText}>
                            <p className={s.hiddenHeader}>COMPANY</p>
                            <p className={s.hiddenDescription}>word word word word word word word word word</p>
                            <p className={s.hiddenLink}>learn more</p>
                        </div>
                    </Link>
                </li>
                <li className={s.aboutEl}>
                    <Link to={clientsPageUrl} className={s.aboutLink}>
                        <p className={s.text}>CLIENTS</p>
                        <div className={s.hiddenText}>
                            <p className={s.hiddenHeader}>CLIENTS</p>
                            <p className={s.hiddenDescription}>word word word word word word word word word</p>
                            <p className={s.hiddenLink}>learn more</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>   
    );
};
  
export default AboutComponent