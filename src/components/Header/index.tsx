import { IconBrandGithub, IconBrandInstagram, IconMail, IconMoon, IconSun } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import type { Link, Theme } from '../../interfaces/Objects';
import { loadTheme } from '../../utils/theme';
import clsx from 'clsx';

const linksList: Link[] = [
    {
        id: 1,
        name: 'Github',
        icon: <IconBrandGithub className='icon' />,
        url: 'https://github.com/Davi-1903',
        target: '_blank',
    },
    {
        id: 2,
        name: 'Instagram',
        icon: <IconBrandInstagram className='icon' />,
        url: 'https://instagram.com/davifran11',
        target: '_blank',
    },
    {
        id: 3,
        name: 'Email',
        icon: <IconMail className='icon' />,
        url: 'mailto:franciscodavi327@gmail.com',
        target: '_self',
    },
];

export default function Header() {
    const [dropHeader, setDropHeader] = useState(true);
    const [opacity, setOpacity] = useState(0);
    const [theme, setTheme] = useState<Theme>(loadTheme);
    const lastY = useRef<number | null>(null);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const handlerScroll = () => {
            const scrolled = window.scrollY;
            setDropHeader(lastY.current === null || lastY.current > scrolled);
            lastY.current = scrolled;
        };

        const handlerOpacity = () => {
            setOpacity(Math.min(window.scrollY / window.innerHeight, 1));
        };

        handlerOpacity();
        window.addEventListener('scroll', handlerScroll);
        window.addEventListener('scroll', handlerOpacity);
        return () => {
            window.removeEventListener('scroll', handlerScroll);
            window.removeEventListener('scroll', handlerOpacity);
        };
    }, []);

    return (
        <header
            className={clsx(
                'h-header fixed top-0 z-1 flex w-full animate-translate-up items-center justify-between p-4 transition-all duration-200 md:p-8',
                dropHeader ? 'translate-none' : '-translate-y-full',
            )}
            style={{
                backgroundColor: `hsl(from var(--base-white) h s l / ${opacity})`,
                borderBottom: `2px solid hsl(from var(--base-black) h s l / ${opacity})`,
            }}
        >
            <h1 className='font-title text-3xl font-bold text-black-100 md:text-5xl'>Portfólio</h1>
            <nav>
                <ul className='flex gap-8'>
                    {linksList.map(link => (
                        <li key={link.id}>
                            <a href={link.url} target={link.target} className='cursor-pointer'>
                                {link.icon}
                            </a>
                        </li>
                    ))}
                    <li key='toggle-theme'>
                        <button className='cursor-pointer' onClick={toggleTheme}>
                            {theme === 'dark' ? (
                                <IconMoon className='icon hover:translate-none' />
                            ) : (
                                <IconSun className='icon hover:translate-none' />
                            )}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
