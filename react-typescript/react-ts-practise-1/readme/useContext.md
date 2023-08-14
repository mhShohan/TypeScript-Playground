```ts
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
```

# Example 2

```ts
import React, { createContext, useState } from 'react';

type User = {
    name: string;
    email: string;
};

type UserContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
export const UserContext = createContext({} as UserContextType);

type UserProviderProps = {
    children: React.ReactNode;
};
export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
```
