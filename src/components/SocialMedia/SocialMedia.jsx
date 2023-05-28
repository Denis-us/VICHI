import s from './SocialMedia.module.css';

const SocialMedia = ({color}) => {

    return (
        <div className={s.socials} style={{color: color}}>
            <ul className={s.list}>
                <li className={s.listEl}>
                    <button className={s.socialLink}>YOUTUBE</button>
                </li>
                <li className={s.listEl}>
                    <button className={s.socialLink}>FACEBOOK</button>
                </li>
                <li className={s.listEl}>
                    <button className={s.socialLink}>INSTAGRAM</button>
                </li>
            </ul>
        </div>   
    );
};
  
export default SocialMedia