import { useEffect, useRef, useState } from 'react';
import Me from '/Me.jpg';

export default function About() {
    const [isEmerge, setEmerge] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setEmerge(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className='min-h-screen bg-white p-12 flex items-center justify-center flex-wrap gap-12 md:p-24 shadow-about'
        >
            <div
                className={`w-sm bg-white p-4 border-2 border-black shadow-basic opacity-0 ${
                    isEmerge ? 'animate-translate-left' : ''
                }`}
            >
                <img src={Me} alt='Me' />
            </div>
            <div className={`w-sm text-black opacity-0 ${isEmerge ? 'animate-translate-right' : ''}`}>
                <h2 className='font-bold text-5xl font-primary'>Who am i?</h2>
                <hr className='border border-black my-2' />
                <p className='text-lg/normal font-secundary'>
                    My full name is <strong>Davi Francisco da Silva Fonseca</strong> and I'm 17 years old. I live in
                    Jucurutu, RN - Brazil, and I'm studing Computer Science for the Internet at <strong>IFRN</strong> -
                    Campus Caicó.
                </p>
            </div>
        </section>
    );
}
