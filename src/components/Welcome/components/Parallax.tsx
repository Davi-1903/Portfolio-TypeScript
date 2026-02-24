import { useEffect, useState } from 'react';
import { useTheme } from '../../../context/themeContext';
import LayerLight1 from '/background-light/background-1.webp';
import LayerLight2 from '/background-light/background-2.webp';
import LayerLight3 from '/background-light/background-3.webp';
import LayerLight4 from '/background-light/background-4.webp';
import LayerDark1 from '/background-dark/background-1.webp';
import LayerDark2 from '/background-dark/background-2.webp';
import LayerDark3 from '/background-dark/background-3.webp';
import LayerDark4 from '/background-dark/background-4.webp';

const Parallax = () => {
    const { theme } = useTheme();
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
            <div className='fixed top-1/2 left-1/2 w-full min-w-[1536px] -translate-1/2'>
                <img src={theme === 'light' ? LayerLight4 : LayerDark4} alt='Layer 4' />
            </div>
            <div
                className='absolute top-1/2 left-1/2 w-full min-w-[1536px] -translate-1/2'
                style={{ transform: `translateY(${scroll / 2}px)` }}
            >
                <img src={theme === 'light' ? LayerLight3 : LayerDark3} alt='Layer 3' />
            </div>
            <div
                className='absolute top-1/2 left-1/2 w-full min-w-[1536px] -translate-1/2'
                style={{ transform: `translateY(${scroll / 4}px)` }}
            >
                <img src={theme === 'light' ? LayerLight2 : LayerDark2} alt='Layer 2' />
            </div>
            <div className='absolute top-1/2 left-1/2 w-full min-w-[1536px] -translate-1/2'>
                <img src={theme === 'light' ? LayerLight1 : LayerDark1} alt='Layer 1' />
            </div>
        </>
    );
};

export default Parallax;
