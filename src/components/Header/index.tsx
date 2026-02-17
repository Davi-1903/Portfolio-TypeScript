import { IconBrandGithub, IconBrandInstagram, IconMail } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import type { Link } from '../../interfaces/Objects';
import clsx from 'clsx';

const linksList: Link[] = [
    {
        id: 1,
        icon: (
            <IconBrandGithub className='h-[32pt] w-[32pt] stroke-black transition-all duration-125 hover:-translate-y-2' />
        ),
        url: 'https://github.com/Davi-1903',
        target: '_blank',
    },
    {
        id: 2,
        icon: (
            <IconBrandInstagram className='h-[32pt] w-[32pt] stroke-black transition-all duration-125 hover:-translate-y-2' />
        ),
        url: 'https://instagram.com/davifran11',
        target: '_blank',
    },
    {
        id: 3,
        icon: <IconMail className='h-[32pt] w-[32pt] stroke-black transition-all duration-125 hover:-translate-y-2' />,
        url: 'mailto:franciscodavi327@gmail.com',
        target: '_self',
    },
];

export default function Header() {
    const [dropHeader, setDropHeader] = useState(true);
    const [opacity, setOpacity] = useState(0);
    const lastY = useRef<number | null>(null);

    useEffect(() => {
        const handlerScroll = () => {
            const scrolled = window.scrollY;
            setDropHeader(lastY.current === null || lastY.current > scrolled);
            lastY.current = scrolled;
        };

        const handlerOpacity = () => {
            setOpacity(Math.min(window.scrollY / window.innerHeight, 1));
        };

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
                'fixed z-1 flex h-header w-full items-center justify-between px-8 transition-all duration-200',
                dropHeader ? 'top-0' : '-top-(--height-header)',
            )}
            style={{
                backgroundColor: `hsl(from var(--base-white) h s l / ${opacity})`,
                borderBottom: `2px solid hsl(from var(--base-black) h s l / ${opacity})`,
            }}
        >
            <h1 className='font-title text-5xl font-bold text-black'>Davi</h1>
            <nav>
                <ul className='flex gap-8'>
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
