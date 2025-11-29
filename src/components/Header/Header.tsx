import { IconBrandGithub, IconBrandInstagram, IconMail } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import type { Link } from '../../interfaces/Objects';

const linksList: Link[] = [
    {
        id: 1,
        icon: (
            <IconBrandGithub className='w-[32pt] h-[32pt] stroke-black transition-all duration-125 hover:-translate-y-2' />
        ),
        url: 'https://github.com/Davi-1903',
        target: '_blank',
    },
    {
        id: 2,
        icon: (
            <IconBrandInstagram className='w-[32pt] h-[32pt] stroke-black transition-all duration-125 hover:-translate-y-2' />
        ),
        url: 'https://instagram.com/davifran11',
        target: '_blank',
    },
    {
        id: 3,
        icon: <IconMail className='w-[32pt] h-[32pt] stroke-black transition-all duration-125 hover:-translate-y-2' />,
        url: 'mailto:franciscodavi327@gmail.com',
        target: '_self',
    },
];

export default function Header() {
    const [dropHeader, setDropHeader] = useState<boolean>(true);
    const [opacity, setOpacity] = useState<number>(0);
    const lastY = useRef<number | null>(null);

    useEffect(() => {
        function handlerScroll(): void {
            const scrolled = window.scrollY;
            setDropHeader(lastY.current === null || lastY.current > scrolled);
            lastY.current = scrolled;
        }

        function handlerOpacity(): void {
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
            className={`h-header z-1 fixed w-full px-8 flex items-center justify-between transition-all duration-200 ${
                dropHeader ? 'top-0' : '-top-(--height-header)'
            }`}
            style={{
                backgroundColor: `hsl(from var(--base-white) h s l / ${opacity})`,
                borderBottom: `2px solid hsl(from var(--base-black) h s l / ${opacity})`,
            }}
        >
            <h1 className='font-bold text-5xl font-title text-black'>Davi</h1>
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
