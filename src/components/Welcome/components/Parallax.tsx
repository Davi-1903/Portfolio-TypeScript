import { useEffect, useState } from 'react';

const Parallax = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='fixed top-1/2 left-1/2 w-full min-w-384 -translate-1/2'>
                <img src={theme === 'light' ? LayerLight4 : LayerDark4} alt='Layer 4' className='w-full' />
            </div>
            <div
                className='absolute top-1/2 left-1/2 w-full min-w-384 -translate-1/2'
                style={{ transform: `translateY(${scroll / 2}px)` }}
            >
                <img src={theme === 'light' ? LayerLight3 : LayerDark3} alt='Layer 3' className='w-full' />
            </div>
            <div
                className='absolute top-1/2 left-1/2 w-full min-w-384 -translate-1/2'
                style={{ transform: `translateY(${scroll / 4}px)` }}
            >
                <img src={theme === 'light' ? LayerLight2 : LayerDark2} alt='Layer 2' className='w-full' />
            </div>
            <div className='absolute top-1/2 left-1/2 w-full -translate-1/2'>
                <img src={theme === 'light' ? LayerLight1 : LayerDark1} alt='Layer 1' className='w-full min-w-384' />
            </div>
        </>
    );
};

export default Parallax;
