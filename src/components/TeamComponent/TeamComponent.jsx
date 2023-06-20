import s from './TeamComponent.module.css';

const TeamComponent = () => {

    return (
        <div className={s.team}>
            <ul className={s.teamList}>
                <li className={s.teamEl}>
                    {/* <p className={s.text}>00 OWNER</p> */}
                    {/* <img src={owner} className={s.ownerImg} alt="owner" /> */}
                </li>
                <li className={s.teamEl}>
                    {/* <p className={s.text}>01 PRINCIPLES</p> */}
                    {/* <img src={logo} className={s.ownerListImg} alt="logo" /> */}
                    
                </li>
                <li className={s.teamEl}>
                    {/* <p className={s.text}>02 PRINCIPLES</p> */}
                    {/* <img src={logo} className={s.ownerListImg} alt="logo" /> */}
                    
                </li>
                <li className={s.teamEl}>
                    {/* <p className={s.text}>03 TEAM</p> */}
                    {/* <img src={logo} className={s.ownerListImg} alt="logo" /> */}
                </li>
            </ul>
        </div>   
    );
};
  
export default TeamComponent