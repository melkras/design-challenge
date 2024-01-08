// TopBar component.
// Relevant styles can be found in: src\sass\layout\_top-bar.scss
// Im using 2 utils functions ( capitalize, switchToOpposite ) to keep the code clean

import Button from "./ui/button";
import lightMode from '../assets/icons/light-mode.svg';
import darkMode from '../assets/icons/dark-mode.svg';
import { useTheme } from "../hooks/use-theme";
import { capitalize, switchToOpposite } from "../utils";

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
