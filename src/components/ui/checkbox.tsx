import { memo } from "react";
import { getStateClassName, isDisabled } from "../../utils";

export type TCheckbox = {
    state?: 'default' | 'hover' | 'active';
    name: string;
    label: string;
    helpLabel: string;
    showHelp?: boolean;
    checked?: boolean;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default memo(function Checkbox(props: TCheckbox) {
    const { state, name, checked, disabled, onChange, label, helpLabel, showHelp, ...rest } = props;

    return (
        <div className={`checkbox ${isDisabled(disabled)}`}>
            <input
                className={`checkbox__input ${getStateClassName(state, 'checkbox__input')}`}
                name={name}
                id={name + label}
                checked={checked}
                disabled={disabled}
                type="checkbox"
                onChange={onChange}
                aria-label={label}
                {...rest}
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
});
