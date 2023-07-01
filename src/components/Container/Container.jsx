import s from './Container.module.css';

const Container = ({bgImage, children}) => {
    return (
        <div className={s.container} style={{ backgroundImage: `url(${bgImage})`}}>
            {children}
        </div>   
    );
};
  
export default Container