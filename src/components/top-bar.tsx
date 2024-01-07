import Button from "./ui/button";
// import darkModeIcon from '../assets/icons/dark-mode.svg'
import lightMode from '../assets/icons/light-mode.svg';
export default function TopBar() {
    return (
        <div className='top-bar'>
            <div className="top-bar__logo-container">
                <div className="top-bar__logo" />
                <span className="top-bar__logo-text">Componento</span>
            </div>
            <Button
                priority="secondary"
                label={'Dark'}
                iconEnd={lightMode}
                showIconEnd={true}
            />
        </div>
    );
}
