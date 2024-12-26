'use client';

import React, { useEffect, useState } from 'react';

const ShootingFireworks = () => {
    const [particles, setParticles] = useState<React.CSSProperties[]>([]);

    const colors = [
        '#ff4444',
        '#44ff44',
        '#4444ff',
        '#ffff44',
        '#ff44ff',
        '#44ffff',
    ];

    const createFirework = () => {
        const mainColor = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 80 + 10;
        const particles = [];

        // Initial shooting particle
        particles.push({
            left: `${left}%`,
            width: '4px',
            height: '4px',
            backgroundColor: mainColor,
            boxShadow: `0 0 6px ${mainColor}`,
            animation: 'shoot 1s ease-out forwards',
            opacity: 1,
        });

        // Explosion particles
        for (let i = 0; i < 36; i++) {
            const angle = i * 10;
            const distance = 100 + Math.random() * 50;
            const size = 2 + Math.random() * 2;

            particles.push({
                '--angle': `${angle}deg`,
                '--distance': `${distance}px`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: mainColor,
                boxShadow: `0 0 ${size * 2}px ${mainColor}`,
                animation: 'explode 1.5s ease-out forwards',
                animationDelay: '0.6s',
                opacity: 0,
            } as React.CSSProperties);
        }

        // Smaller trailing particles
        for (let i = 0; i < 24; i++) {
            const angle = i * 15;
            const distance = 50 + Math.random() * 30;
            const size = 1 + Math.random();

            particles.push({
                '--angle': `${angle}deg`,
                '--distance': `${distance}px`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: mainColor,
                boxShadow: `0 0 ${size * 2}px ${mainColor}`,
                animation: 'explode 1s ease-out forwards',
                animationDelay: '0.7s',
                opacity: 0,
            } as React.CSSProperties);
        }

        return particles;
    };

    useEffect(() => {
        const launchFirework = () => {
            setParticles((prev) => [...prev, ...createFirework()]);
        };

        const interval = setInterval(launchFirework, 2000);

        const cleanup = setInterval(() => {
            setParticles((prev) => prev.slice(-200));
        }, 3000);

        return () => {
            clearInterval(interval);
            clearInterval(cleanup);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden bg-black/90">
            <style jsx>{`
                @keyframes shoot {
                    0% {
                        transform: translate(0, 100vh) scale(1);
                    }
                    50% {
                        transform: translate(0, 50vh) scale(1.5);
                    }
                    60% {
                        transform: translate(0, 50vh) scale(0.3);
                    }
                    100% {
                        transform: translate(0, 50vh) scale(0);
                    }
                }

                @keyframes explode {
                    0% {
                        transform: translate(0, 50vh) scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(
                                calc(cos(var(--angle)) * var(--distance)),
                                calc(50vh + sin(var(--angle)) * var(--distance))
                            )
                            scale(0);
                        opacity: 0;
                    }
                }
            `}</style>
            {particles.map((style, index) => (
                <div
                    key={index}
                    className="absolute rounded-full"
                    style={style}
                />
            ))}
        </div>
    );
};

export default ShootingFireworks;
