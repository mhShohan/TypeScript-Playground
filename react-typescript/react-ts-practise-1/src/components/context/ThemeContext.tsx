import React, { createContext } from 'react';

const theme = {
    primary: {
        bg: 'green',
        color: 'white',
    },
    secondary: {
        bg: 'red',
        color: 'black',
    },
};

type ThemeProviderProps = {
    children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};
