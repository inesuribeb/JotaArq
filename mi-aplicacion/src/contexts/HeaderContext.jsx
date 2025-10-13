// contexts/HeaderContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const HeaderContext = createContext();

export function HeaderProvider({ children }) {
    const [headerVisible, setHeaderVisible] = useState(true);
    const [headerHeight, setHeaderHeight] = useState(80); // altura por defecto

    return (
        <HeaderContext.Provider value={{ 
            headerVisible, 
            setHeaderVisible, 
            headerHeight, 
            setHeaderHeight 
        }}>
            {children}
        </HeaderContext.Provider>
    );
}

export function useHeader() {
    const context = useContext(HeaderContext);
    if (!context) {
        throw new Error('useHeader must be used within HeaderProvider');
    }
    return context;
}