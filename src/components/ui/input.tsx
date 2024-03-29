// Checkbox component.
// Relevant styles can be found in: src\sass\components\_input.scss
// Im using 3 utils functions ( getStateClassName, isDisabled, isInvalid ) to keep the code clean.

import React, { memo } from "react";
import { getStateClassName, isDisabled, isInvalid } from "../../utils";

export type TInput = {
    state?: 'default' | 'hover' | 'active';
    label: string;
    showLabel?: boolean;
    helpLabel?: string;
    showHelp?: boolean;
    name: string;
    type?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    invalid?: boolean;
    disabled?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
};

const Input: React.FC<TInput> =
    ({ state, label, showLabel, helpLabel, showHelp, name, type = 'text', value, onChange, invalid, disabled, inputRef, ...rest }) => {
        return (
            <div className={`input ${getStateClassName(state, 'input')} ${isDisabled(disabled)} ${isInvalid(invalid)}`}>
                {showLabel !== false &&
                    <label
                        className='input__label' htmlFor={name + label}>
                        {label}
                    </label>
                }
                <input className='input__input-value'
                    autoComplete="off"
                    name={name}
                    type={type}
                    id={name + label}
                    aria-label={label}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                    {...rest}
                    ref={inputRef}
                />
                {showHelp !== false &&
                    <div className='input__helper-text'>
                        {invalid &&
                            <div className="input__error-icon" />
                        }
                        {helpLabel}
                    </div>
                }
            </div>
        );

    };
export default memo(Input);