import type React from 'react';
import { useEffect, useRef, useState } from 'react';

interface SectionEmergeProps {
    children: React.ReactNode;
    threshold?: number;
}

export default function SectionEmerge({
    children,
    threshold = 0.1,
}: SectionEmergeProps): React.JSX.Element {
    const [emerge, setEmerge] = useState<boolean>(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        setEmerge(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div className={`section-emerge ${emerge ? 'emerge' : ''}`} ref={sectionRef}>
            {children}
        </div>
    );
}
