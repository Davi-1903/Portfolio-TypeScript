import { useEffect, useState } from 'react';
import { useTheme } from '../../../context/themeContext';
import LayerLight1 from '../../../../public/background-light/background-1.webp';
import LayerLight2 from '../../../../public/background-light/background-2.webp';
import LayerLight3 from '../../../../public/background-light/background-3.webp';
import LayerLight4 from '../../../../public/background-light/background-4.webp';
import LayerDark1 from '../../../../public/background-dark/background-1.webp';
import LayerDark2 from '../../../../public/background-dark/background-2.webp';
import LayerDark3 from '../../../../public/background-dark/background-3.webp';
import LayerDark4 from '../../../../public/background-dark/background-4.webp';

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
            <div
                className='absolute inset-0 bg-cover bg-fixed bg-center'
                style={{
                    backgroundImage: `url(${theme === 'light' ? LayerLight4 : LayerDark4})`,
                }}
            ></div>
            <div
                className='absolute inset-0 bg-cover bg-center'
                style={{
                    backgroundImage: `url(${theme === 'light' ? LayerLight3 : LayerDark3})`,
                    transform: `translateY(${scroll / 2}px)`,
                }}
            ></div>
            <div
                className='absolute inset-0 bg-cover bg-center'
                style={{
                    backgroundImage: `url(${theme === 'light' ? LayerLight2 : LayerDark2})`,
                    transform: `translateY(${scroll / 4}px)`,
                }}
            ></div>
            <div
                className='absolute inset-0 bg-cover bg-center'
                style={{
                    backgroundImage: `url(${theme === 'light' ? LayerLight1 : LayerDark1})`,
                }}
            ></div>
        </>
    );
};

export default Parallax;
