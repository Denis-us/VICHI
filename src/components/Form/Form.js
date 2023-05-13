import s from './Form.module.css';

const Form = () => {

    return (
        <div className={s.blockForm}>
            <form className={s.form}>
                <div className={s.inputBox}>
                    <input type="name" name="name" required="" className={s.input}/>
                    <label className={s.label}>NAME</label>
                </div>
                <div className={s.inputBox}>
                    <input type="email" name="email" required="" className={s.input}/>
                    <label className={s.label}>E_MAIL</label>
                </div>
                <div className={s.inputBox}>
                    <input type="text" name="description" required="" className={s.input}/>
                    <label className={s.label}>PHONE</label>
                </div>
            </form>
        </div>   
    );
};
  
export default Form