import { SVGProps } from "react";
import { getStateClassName } from "../../utils";

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
export default function Button(props: TButton) {
    const { priority, showIconStart, iconStart, showIconEnd, iconEnd, showLabel, label, disabled, onClick, state } = props;

    const getClassName = () => {
        switch (priority) {
            case 'primary':
                return 'btn__primary';
            case 'secondary':
                return 'btn__secondary';
            case 'tertiary':
                return 'btn__tertiary';
            default:
                return 'btn__secondary';
        }
    };

    const renderIcon = (show?: boolean, icon?: React.FC<SVGProps<SVGSVGElement>>) => {
        // return early if showIconStart is not true
        if (show !== true) return null;
        // return early if iconStart is not defined
        if (!icon) return null;
        // return element when the conditions above are met
        return (
            <div style={{ maskImage: `url(${icon})` }} className="btn__icon"></div>
        );
    };

    return (
        <button className={`btn ${getStateClassName(state, `btn__${priority}`)} ${disabled === true ? 'btn--disabled' : getClassName()}`} onClick={onClick}>
            {renderIcon(showIconStart, iconStart)}
            {showLabel !== false &&
                <div className="btn__text">{label}</div>
            }
            {renderIcon(showIconEnd, iconEnd)}
        </button>
    );
}
