'use client';

import React, { useEffect, useState } from 'react';

const SnowEffect = () => {
    const [snowflakes, setSnowflakes] = useState<React.CSSProperties[]>([]);

    useEffect(() => {
        // Generate random values for 50 snowflakes
        const generateSnowflakes = () => {
            return Array.from({ length: 50 }, (_, i) => {
                const size = (Math.random() * 5 * 0.2).toFixed(2);
                const leftIni = (Math.random() * 20 - 10).toFixed(2);
                const leftEnd = (Math.random() * 20 - 10).toFixed(2);
                const left = Math.random() * 100;
                const animationDuration = 5 + Math.random() * 10;
                const animationDelay = -(Math.random() * 10);

                return {
                    '--size': `${size}vw`,
                    '--left-ini': `${leftIni}vw`,
                    '--left-end': `${leftEnd}vw`,
                    left: `${left}%`,
                    width: `${size}vw`,
                    height: `${size}vw`,
                    animation: `snowfall ${animationDuration}s linear infinite`,
                    animationDelay: `${animationDelay}s`,
                    filter: i % 6 === 0 ? 'blur(1px)' : 'none'
                } as React.CSSProperties;
            });
        };

        setSnowflakes(generateSnowflakes());
    }, []); // Empty dependency array means this runs once on mount

    if (snowflakes.length === 0) {
        return null; // Return null during initial server-side render
    }

    return (
        <div className="fixed inset-0 pointer-events-none">
            <style jsx>{`
                @keyframes snowfall {
                    0% {
                        transform: translate3d(var(--left-ini), 0, 0);
                    }
                    100% {
                        transform: translate3d(var(--left-end), 110vh, 0);
                    }
                }
            `}</style>
            {snowflakes.map((style, index) => (
                <div
                    key={index}
                    className="absolute rounded-full bg-white"
                    style={style}
                />
            ))}
        </div>
    );
};

export default SnowEffect;