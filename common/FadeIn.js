import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
const FadeIn = ({ children, className = '', ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else if (entry.boundingClientRect.top > 0) {
                    setIsVisible(false);
                }
            });
        });

        observer.observe(domRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'show' : ''} ${className}`}
            ref={domRef}
            {...props}
        >
            {children}
        </div>
    );
};

export default FadeIn;
