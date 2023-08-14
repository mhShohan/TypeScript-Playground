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
