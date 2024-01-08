export const isDisabled = (disabled?: boolean) => {
    if (disabled === true) return 'disabled';
};
export const isInvalid = (invalid?: boolean) => {
    if (invalid === true) return 'invalid';
};
export const getStateClassName = (state?: string, target?: string) => {
    switch (state) {
        case 'hover':
            return `${target}--hover`;
        case 'active':
            return `${target}--active`;
        case 'default':
            return '';
        default:
            return '';
    }
};