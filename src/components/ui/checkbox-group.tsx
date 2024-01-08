// Checkbox-group component.
// Relevant styles can be found in: src\sass\components\_checkbox-group.scss
// Im using 2 utils functions ( isDisabled, isInvalid ) to keep the code clean 

import React, { memo } from "react";
import { TCheckbox } from "./checkbox";
import { isDisabled, isInvalid } from "../../utils";
type TCheckboxGroupProps = {
    label: string;
    infoLabel: string;
    children: React.ReactElement<TCheckbox>[] | React.ReactElement<TCheckbox>;
    disabled?: boolean;
    errorText?: string;
    required?: boolean;
    invalid?: boolean;
};

export default memo(function CheckboxGroup(props: TCheckboxGroupProps) {
    const { label, infoLabel, errorText, children, disabled, required, invalid } = props;

    // clonedChildren - this function is needed to pass on the disabled prop to the children.
    const clonedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { disabled });
        }
        return child;
    });

    return (
        <div className="checkbox-group">
            <div className="checkbox-group__title-container">
                <div className={`checkbox-group__label ${isDisabled(disabled)} ${isInvalid(invalid)}`}>
                    {label}
                    {required &&
                        <span className="required">*</span>
                    }
                </div>
                {invalid && errorText &&
                    <div className={`checkbox-group__error-text ${isDisabled(disabled)}`}>  {invalid &&
                        <div className="input__error-icon" />
                    }{errorText}</div>
                }
                <div className={`checkbox-group__info-label ${isDisabled(disabled)}`}>{infoLabel}</div>
            </div>
            <div className={`checkbox-group__content`}>{clonedChildren}</div>
        </div>
    );
});