import Button from "./ui/button";
import lightMode from '../assets/icons/light-mode.svg';
import darkMode from '../assets/icons/dark-mode.svg';
import { useTheme } from "../hooks/use-theme";

const capitalize = (str: string) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
};
const switchToOpposite = (theme: string) => {
    if (theme === 'dark') return 'light';
    return 'dark';
};

export default function TopBar() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className='top-bar'>
            <div className="top-bar__logo-container">
                <div className="top-bar__logo" />
                <span className="top-bar__logo-text">Componento</span>
            </div>
            <Button
                priority="secondary"
                label={capitalize(switchToOpposite(theme))}
                iconEnd={theme === 'dark' ? lightMode : darkMode}
                showIconEnd={true}
                onClick={toggleTheme}
            />
        </div>
    );
}
