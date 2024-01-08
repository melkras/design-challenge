// Button component.
// Relevant styles can be found in: src\sass\components\_button.scss
// Im using 3 utils functions ( getClassName, getStateClassName, renderIcon ) to keep the code clean

import { SVGProps, memo } from "react";
import { getClassName, getStateClassName, renderIcon } from "../../utils";

type TButton = {
    state?: 'default' | 'hover' | 'active',
    priority: 'primary' | 'secondary' | 'tertiary';
    showLabel?: boolean;
    showIconStart?: boolean;
    iconStart?: React.FC<SVGProps<SVGSVGElement>>;
    showIconEnd?: boolean;
    iconEnd?: React.FC<SVGProps<SVGSVGElement>>;
    disabled?: boolean;
    label: string;
    onClick?: (e: React.SyntheticEvent) => void;
};
export default memo(function Button(props: TButton) {
    const { priority, showIconStart, iconStart, showIconEnd, iconEnd, showLabel, label, disabled, onClick, state } = props;

    return (
        <button
            className={`btn ${getStateClassName(state, `btn__${priority}`)} ${disabled === true ? 'btn--disabled' : getClassName(priority)}`}
            onClick={onClick}
        >
            {renderIcon(showIconStart, iconStart)}
            {showLabel !== false &&
                <div className="btn__text">{label}</div>
            }
            {renderIcon(showIconEnd, iconEnd)}
        </button>
    );
});
