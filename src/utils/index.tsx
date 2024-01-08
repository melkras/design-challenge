// Simple className getter
export const isDisabled = (disabled?: boolean) => {
    if (disabled === true) return 'disabled';
};
// Simple className getter
export const isInvalid = (invalid?: boolean) => {
    if (invalid === true) return 'invalid';
};
// Function to get the state class name dynamically.
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
// Function to dynamically get the button className.
export const getClassName = (priority: string) => {
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
// Function to render the buttons icon as masked image.
// If buttons use svg's as masked images then I dont have to use
// create separate components for .svg's. This makes adding more icons easier.
export const renderIcon = (show?: boolean, icon?: React.FC<React.SVGProps<SVGSVGElement>>) => {
    // return early if showIconStart is not true
    if (show !== true) return null;
    // return early if iconStart is not defined
    if (!icon) return null;
    // return element when the conditions above are met
    return (
        <div style={{ maskImage: `url(${icon})` }} className="btn__icon"></div>
    );
};
// Function to captialize the first character
export const capitalize = (str: string) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
};
// Function to toggle theme names
export const switchToOpposite = (theme: string) => {
    if (theme === 'dark') return 'light';
    return 'dark';
};