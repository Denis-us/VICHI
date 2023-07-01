import React from 'react';
import s from './ClientsComponent.module.css';

const ClientsComponent = () => {
    return (
        <div className={s.clients}>
            <ul className={s.clientsList}>
                <li className={s.clientsEl}>
                    {/* <img src={`${process.env.PUBLIC_URL}/${person.img}`} className={s.ownerImg} alt={person.alt} /> */}
                </li>
                <li className={s.clientsEl}>
                    {/* <img src={`${process.env.PUBLIC_URL}/${person.img}`} className={s.ownerImg} alt={person.alt} /> */}
                </li>
                <li className={s.clientsEl}>
                    {/* <img src={`${process.env.PUBLIC_URL}/${person.img}`} className={s.ownerImg} alt={person.alt} /> */}
                </li>
                <li className={s.clientsEl}>
                    {/* <img src={`${process.env.PUBLIC_URL}/${person.img}`} className={s.ownerImg} alt={person.alt} /> */}
                </li>
            </ul>
        </div>   
    );
};
  
export default ClientsComponent