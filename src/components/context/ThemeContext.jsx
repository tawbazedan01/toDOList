// ThemeContext.jsx

import { createContext, useState } from 'react';

// 1. إنشاء الكونتكست
export const ThemeContext = createContext();

// 2. تعريف الـ Provider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
