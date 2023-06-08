import s from './TeamComponent.module.css';

const TeamComponent = () => {

    return (
        <div className={s.owner}>
            <div className={s.ownerMain}>
            {/* <p className={s.text}>00 OWNER</p> */}
            {/* <img src={owner} className={s.ownerImg} alt="owner" /> */}
            </div>
            <ul className={s.ownerList}>
            <li className={s.ownerEl}>
                {/* <p className={s.text}>01 PRINCIPLES</p> */}
                {/* <img src={logo} className={s.ownerListImg} alt="logo" /> */}
                
            </li>
            <li className={s.ownerEl}>
                {/* <p className={s.text}>02 PRINCIPLES</p> */}
                {/* <img src={logo} className={s.ownerListImg} alt="logo" /> */}
                
            </li>
            <li className={s.ownerEl}>
                {/* <p className={s.text}>03 TEAM</p> */}
                {/* <img src={logo} className={s.ownerListImg} alt="logo" /> */}
            </li>
            <li className={s.ownerEl}>
                {/* <p className={s.text}>04 COMPANY</p> */}
                {/* <img src={logo} className={s.ownerListImg} alt="logo" /> */}
            </li>
            </ul>
        </div>   
    );
};
  
export default TeamComponent