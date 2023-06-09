import s from './SocialMedia.module.css';

const SocialMedia = ({display}) => {

    return (
        <div className={s.socials} style={{display: display}}>
            <ul className={s.list}>
                <li className={s.listEl}>
                    <a href="https://www.instagram.com/vichi.agency/?igshid=MmJiY2I4NDBkZg%3D%3D" className={s.socialLink}>TELEGRAM</a>
                </li>
                <li className={s.listEl}>
                    <a href="https://www.instagram.com/vichi.agency/?igshid=MmJiY2I4NDBkZg%3D%3D" className={s.socialLink}>YOUTUBE</a>
                </li>
                <li className={s.listEl}>
                    <a href="https://www.instagram.com/vichi.agency/?igshid=MmJiY2I4NDBkZg%3D%3D" className={s.socialLink}>INSTAGRAM</a>
                </li>
            </ul>
        </div>   
    );
};
  
export default SocialMedia