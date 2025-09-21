import type { JSX } from 'react';
import { IconBrandGithub, IconBrandInstagram, IconMail } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import './Header.css';

interface Link {
    id: number;
    icon: React.ReactNode;
    url: string;
    target: string;
}

const linksList: Link[] = [
    {
        id: 1,
        icon: <IconBrandGithub />,
        url: 'https://github.com/Davi-1903',
        target: '_blank',
    },
    {
        id: 2,
        icon: <IconBrandInstagram />,
        url: 'https://instagram.com/davifran11',
        target: '_blank',
    },
    {
        id: 3,
        icon: <IconMail />,
        url: 'mailto:franciscodavi327@gmail.com',
        target: '_self',
    },
];

export default function Header(): JSX.Element {
    const [dropHeader, setDropHeader] = useState<boolean>(true);
    const [opacity, setOpacity] = useState<number>(0);
    const lastY = useRef<number | null>(null);

    useEffect(() => {
        function handlerScroll() {
            const scrolled = window.scrollY;
            setDropHeader(lastY.current === null || lastY.current > scrolled);
            lastY.current = scrolled;
        }

        function handlerOpacity() {
            setOpacity(Math.min(window.scrollY / window.innerHeight, 1));
        }

        window.addEventListener('scroll', handlerScroll);
        window.addEventListener('scroll', handlerOpacity);
        return () => {
            window.removeEventListener('scroll', handlerScroll);
            window.removeEventListener('scroll', handlerOpacity);
        };
    }, []);

    return (
        <header
            className={dropHeader ? 'drop' : ''}
            style={{
                backgroundColor: `rgba(255, 255, 255, ${opacity})`,
                boxShadow: `0 .5rem 1rem rgba(48, 48, 64, ${opacity / 4})`,
            }}
        >
            <h1 id='logo'>Davi</h1>
            <nav>
                <ul className='menu'>
                    {linksList.map(link => (
                        <li key={link.id}>
                            <a href={link.url} target={link.target}>
                                {link.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
