import { IconMoon, IconSun } from '@tabler/icons-react';
import { useMenu } from '../../../context/menuContext';
import { useTheme } from '../../../context/themeContext';
import clsx from 'clsx';

const linksList = [
    {
        id: 1,
        name: 'Github',
        url: 'https://github.com/Davi-1903',
        target: '_blank',
    },
    {
        id: 2,
        name: 'Instagram',
        target: '_blank',
    },
    {
        id: 3,
        name: 'Email',
        url: 'mailto:franciscodavi327@gmail.com',
        target: '_self',
    },
];

export default function MenuMobile() {
    const { isCloseMenu, setOpenMenu } = useMenu();
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    };

    const onAnimationEnd = () => {
        if (isCloseMenu) setOpenMenu(false);
    };

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 z-2 h-screen w-screen bg-white-100/25 backdrop-blur-2xl',
                isCloseMenu ? 'animate-fade-out' : 'animate-fade-in',
            )}
            onAnimationEnd={onAnimationEnd}
        >
            <ul className='mt-17 flex w-full flex-col gap-8 p-4'>
                {linksList.map(link => (
                    <li key={link.id}>
                        <a
                            href={link.url}
                            target={link.target}
                            className='block cursor-pointer overflow-hidden rounded-xl p-3 font-primary text-5xl font-bold text-ellipsis text-black-100 transition-all duration-100 hover:bg-black-100/25'
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
                <li key='toggle-theme'>
                    <button
                        className='cursor-pointer rounded-xl p-2 transition-all duration-100 hover:bg-black-100/25'
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? (
                            <IconMoon className='icon hover:translate-none' />
                        ) : (
                            <IconSun className='icon hover:translate-none' />
                        )}
                    </button>
                </li>
            </ul>
        </nav>
    );
}
