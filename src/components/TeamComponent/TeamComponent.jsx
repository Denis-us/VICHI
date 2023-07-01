import React from 'react';
import team from '../../json/team.json';
import s from './TeamComponent.module.css';


const TeamComponent = () => {
    return (
        <div className={s.team}>
            <ul className={s.teamList}>
                {team.map((person) => (
                <li className={s.teamEl} key={person.id}>
                    <img src={`${process.env.PUBLIC_URL}/${person.img}`} className={s.ownerImg} alt={person.alt} />
                </li>
                ))}
            </ul>
        </div>   
    );
};
  
export default TeamComponent