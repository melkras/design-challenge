// Theme provider + useTheme hook.
// This component allows to switch themes,
// preserve the state of the theme,
// pass the theme variable and its toggle function 
// accross the entire app.

import { createContext, useContext, useState, FC, PropsWithChildren, useEffect } from "react";

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("Cannot use useTheme outside of ThemeProvider!");
    }
    return context;
};

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState('light');
    // Set theme to localState + react state
    const themeSetter = (mode: string) => {
        setTheme(mode);
        document.body.setAttribute("data-theme-mode", mode);
        localStorage.setItem('__theme', mode);
    };
    useEffect(() => {
        const theme = localStorage.getItem('__theme');
        if (!theme) return;
        themeSetter(theme);
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            themeSetter('dark');
        } else {
            themeSetter('light');
        }
    };

    const currentTheme: ThemeContextProps = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={currentTheme}>{children}</ThemeContext.Provider>
    );
};
