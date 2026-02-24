import { memo } from 'react';
import type { WelcomeProps } from '../../interfaces/Props';
import Parallax from './components/Parallax';
import clsx from 'clsx';

const Welcome = ({ loadingEnd }: WelcomeProps) => {
    return (
        <section className='relative -z-1 grid h-screen place-items-center overflow-x-hidden select-none'>
            <Parallax />
            <h1
                className={clsx(
                    'font-primary text-5xl font-bold text-secund opacity-0 md:text-8xl',
                    loadingEnd && 'animate-welcome',
                )}
            >
                Hi! I'm Davi
            </h1>
        </section>
    );
};

export default memo(Welcome);
