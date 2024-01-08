import { memo } from "react";
import { isDisabled } from "../../utils";

export type TCheckbox = {
    name: string;
    label: string;
    helpLabel?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default memo(function Checkbox(props: TCheckbox) {
    const { name, checked, disabled, onChange, label, helpLabel, ...rest } = props;
    return (
        <div className={`checkbox ${isDisabled(disabled)}`}>
            <input
                className="checkbox__input"
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
            {helpLabel &&
                <span className="checkbox__helper-text">{helpLabel}</span>
            }
        </div>
    );
});
