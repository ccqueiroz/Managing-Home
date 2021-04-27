import React, { useState, useEffect } from 'react';
import { Label, Input } from './style';

interface IInputLabelProps {
    onChange: (e: any) => void,
    value?: string,
    autoComplete?: boolean,
    required?: boolean,
    titleLabel?: string,
    id?: string,
    idSpan?: string,
    name?: string,
    className?: string,
    type?: string,
    dataForm?:any
}

interface IStatusFocusInput {
    generic: boolean | undefined,
}

const InputLabel: React.FC<IInputLabelProps> = ({
    onChange,
    value,
    autoComplete,
    className,
    required,
    titleLabel,
    id,
    idSpan,
    name,
    type,
    dataForm
}) => {

    const [statusFocusInput, setStatusFocusInput] = useState<IStatusFocusInput>({
        generic: false,
    });

    useEffect(() => {
        if(id)
            clickedInput(id);
        if(idSpan)
            changePositionSpan(idSpan);
    }, [statusFocusInput.generic]);


    const clickedInput = (id:string) => {
        const inputGeneric = document.getElementById(id);
        inputGeneric?.addEventListener('focus', () => {
            setStatusFocusInput({
                ...statusFocusInput,
                generic: true
            })
        });
        inputGeneric?.addEventListener('focusout', () => {
            setStatusFocusInput({
                ...statusFocusInput,
                generic: false
            })
        });
        
    };

    const changePositionSpan = (idSpan:string) => {
        const spanGeneric = document.getElementById(idSpan);

        if (dataForm !== '' || statusFocusInput.generic)
            spanGeneric?.classList.add('spanFocus');
        else
            spanGeneric?.classList.remove('spanFocus');
    };
    return (
        <Label htmlFor="" className="Label">
            <span className="spanLabel" id={`${idSpan}`}>{titleLabel}</span>
            <Input type={!type ? 'text' : type}
                name={`${name}`}
                id={`${id}`}
                onChange={onChange}
                value={value}
                autoComplete={!autoComplete ? 'off' : ''}
                required={required} />
        </Label>
    );
}

export default InputLabel;