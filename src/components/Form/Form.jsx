import React, { useState } from 'react';
import s from './Form.module.css';

const Form = () => {

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    const controlFieldFilling = (inputName, inputValue) => {
        const label = document.querySelector(`label[for=${inputName}]`);
        if (inputValue.trim() !== '') {
            label.classList.add(s.labelFull);
        } else {
            label.classList.remove(s.labelFull);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setNameValue(value);
            controlFieldFilling('name', value);
        } else if (name === 'email') {
            setEmailValue(value);
            controlFieldFilling('email', value);
        } else if (name === 'description') {
            setDescriptionValue(value);
            controlFieldFilling('description', value);
        }
    }

    return (
        <div className={s.blockForm}>
            <form className={s.form}>
                <div className={s.inputBox}>
                    <input id="name" type="name" name="name" required="" autoComplete="off" className={s.input} value={nameValue} onChange={handleChange}/>
                    <label className={s.label} htmlFor="name">NAME</label>
                </div>
                <div className={s.inputBox}>
                    <input id="email" type="email" name="email" required="" autoComplete="off" className={s.input} value={emailValue} onChange={handleChange}/>
                    <label className={s.label} htmlFor="email">E-MAIL</label>
                </div>
                <div className={s.inputBox}>
                    <input id="description" type="text" name="description" required="" autoComplete="off" className={s.input} value={descriptionValue} onChange={handleChange}/>
                    <label className={s.label} htmlFor="description">PHONE</label>
                </div>
            </form>
        </div>   
    );
};
  
export default Form