import { memo, useEffect, useRef, useState } from 'react';
import { useMenu } from '../../context/menuContext';
import MenuButton from './components/MenuButton';
import MenuMobile from './components/MenuMobile';
import MenuDask from './components/MenuDesk';
import clsx from 'clsx';

function Header() {
    const [dropHeader, setDropHeader] = useState(true);
    const [opacity, setOpacity] = useState(0);
    const { isOpenMenu } = useMenu();
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
            <h1 className='font-title text-3xl font-bold text-black-100 select-none md:text-5xl'>Portfólio</h1>
            <MenuDask />
            {isOpenMenu && <MenuMobile />}
            <MenuButton />
        </header>
    );
}

export default memo(Header);
