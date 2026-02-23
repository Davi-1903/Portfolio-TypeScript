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
            <div className='absolute inset-0 bg-[url(background-light/background-4.webp)] bg-cover bg-fixed bg-center'></div>
            <div
                className='absolute inset-0 bg-[url(background-light/background-3.webp)] bg-cover bg-center'
                style={{ transform: `translateY(${scroll / 2}px)` }}
            ></div>
            <div
                className='absolute inset-0 bg-[url(background-light/background-2.webp)] bg-cover bg-center'
                style={{ transform: `translateY(${scroll / 4}px)` }}
            ></div>
            <div className='absolute inset-0 bg-[url(/background-light/background-1.webp)] bg-cover bg-center'></div>
        </>
    );
};

export default Parallax;
