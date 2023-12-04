"use client"
import React, {ClassAttributes} from 'react';
import './LabelForm.scss'

interface ILabelForm {
    label: string

}

const LabelForm = ({label,onChange,value,type}: ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & ILabelForm) => {
    return (
        <label className="form-control w-full  label-form">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input onChange={onChange} value={value} type={type?type:'text'} placeholder="Введите здесь" className="input input-bordered w-full"/>
        </label>
    );
};

export default LabelForm;