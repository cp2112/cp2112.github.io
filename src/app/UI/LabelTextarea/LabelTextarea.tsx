import React, {ClassAttributes} from 'react';

interface ILabelTextarea {
    label: string
    defaultValue:string
}

const LabelTextarea = ({
                           label,
                           defaultValue,
                           placeholder,
                       }: ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement> & ILabelTextarea) => {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <textarea  defaultValue={defaultValue} className="textarea textarea-bordered h-24 w-full"
                      placeholder={placeholder} disabled={true}/>
        </label>
    );
};

export default LabelTextarea;