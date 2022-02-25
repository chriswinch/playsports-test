import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'remix';

interface NavigationContextType {
    navOpen: boolean;
    setNavOpen: (open: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType>({
    navOpen: false,
    setNavOpen: () => {},
});

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationProvider: React.FC = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setNavOpen(false);
    }, [location])

    return (
        <NavigationContext.Provider value={{
            navOpen,
            setNavOpen
        }}>
            {children}
        </NavigationContext.Provider>
    );
};
