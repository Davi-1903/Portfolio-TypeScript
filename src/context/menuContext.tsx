import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { menuContextType } from '../interfaces/Objects';

const menuContext = createContext<menuContextType>({
    isOpenMenu: false,
    isCloseMenu: false,
    setOpenMenu: () => {},
    setCloseMenu: () => {},
});

export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const [isCloseMenu, setCloseMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (isOpenMenu) setCloseMenu(true);
        };

        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setCloseMenu(true);
        };

        if (!isOpenMenu) setCloseMenu(false);
        document.body.style.overflowY = isOpenMenu ? 'hidden' : 'auto';
        window.addEventListener('resize', handleResize);
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [isOpenMenu]);

    return (
        <menuContext.Provider value={{ isOpenMenu, isCloseMenu, setOpenMenu, setCloseMenu }}>
            {children}
        </menuContext.Provider>
    );
};

export const useMenu = () => {
    return useContext(menuContext);
};
