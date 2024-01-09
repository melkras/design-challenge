// Checkbox component.
// Relevant styles can be found in: src\sass\components\_checkbox.scss
// Im using 2 utils functions ( getStateClassName, isDisabled ) to keep the code clean 

import { memo } from "react";
import { getStateClassName, isDisabled } from "../../utils";

export type TCheckbox = {
    state?: 'default' | 'hover' | 'active';
    name: string;
    label: string;
    helpLabel?: string;
    showHelp?: boolean;
    checked?: boolean;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef?: React.Ref<HTMLInputElement>;
    ref?: React.Ref<HTMLInputElement>; // hack to hide ts errors inside storybook
};

const Checkbox: React.FC<TCheckbox> = ({ state, name, checked, disabled, onChange, label, helpLabel, showHelp, inputRef, ...rest }) => {
    return (
        <div className={`checkbox ${isDisabled(disabled)}`}>
            <input
                className={`checkbox__input ${getStateClassName(state, 'checkbox__input')}`}
                name={name}
                id={name + label}
                checked={checked}
                disabled={disabled}
                type="checkbox"
                aria-label={label}
                onChange={onChange}
                {...rest}
                ref={inputRef}

            />
            <label htmlFor={name + label} className="checkbox__label">
                <span className="checkbox__button"></span>
                {label}
            </label>
            {showHelp === true && helpLabel &&
                <span className="checkbox__helper-text">{helpLabel}</span>
            }
        </div>
    );
};
export default memo(Checkbox);