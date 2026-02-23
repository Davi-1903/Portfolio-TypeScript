import clsx from 'clsx';
import { useMenu } from '../../../context/menuContext';

const MenuButton = () => {
    const { isOpenMenu, isCloseMenu, setOpenMenu, setCloseMenu } = useMenu();

    const toggleMenu = () => {
        if (!isOpenMenu) setOpenMenu(true);
        else setCloseMenu(true);
    };

    return (
        <button
            className='relative z-3 block aspect-square h-8 cursor-pointer sm:hidden'
            onClick={toggleMenu}
            aria-label='button menu'
        >
            <div
                className={clsx(
                    'absolute h-1/10 w-4/5 rounded-full bg-secund transition-all duration-500',
                    isOpenMenu && !isCloseMenu ? 'top-1/2 left-1/2 -translate-1/2 rotate-225' : 'top-3/10 left-1/10',
                )}
            ></div>
            <div
                className={clsx(
                    'absolute h-1/10 w-4/5 rounded-full bg-secund transition-all duration-500',
                    isOpenMenu && !isCloseMenu
                        ? 'right-1/2 bottom-1/2 translate-1/2 -rotate-225'
                        : 'right-1/10 bottom-3/10',
                )}
            ></div>
        </button>
    );
};

export default MenuButton;
