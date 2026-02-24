import { useEffect, useState } from 'react';
import { IconArrowUp } from '@tabler/icons-react';
import clsx from 'clsx';

const BackButton = () => {
    const [isEmerge, setEmerge] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight / 2 < window.scrollY) setEmerge(true);
            else setEmerge(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <article
            className={clsx(
                'pointer-events-none fixed right-0 bottom-0 p-4 transition-all duration-200',
                isEmerge ? 'translate-none' : 'translate-x-full',
            )}
        >
            <button
                className='pointer-events-auto cursor-(--cursor-default) border-2 border-secund bg-first p-2 shadow-[3px_3px_0_var(--color-secund)] transition-all duration-50 hover:-translate-0.75 hover:shadow-[6px_6px_0_var(--color-secund)] active:translate-none active:shadow-none'
                onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
                aria-label='back to top'
            >
                <IconArrowUp size={32} className='stroke-secund' />
            </button>
        </article>
    );
};

export default BackButton;
