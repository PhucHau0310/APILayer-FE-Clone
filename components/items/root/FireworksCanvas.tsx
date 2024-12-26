import React, { useEffect, useRef } from 'react';

const FireworksCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const str: string[] = ['Happy', 'New', 'Year', '2025'];
    let chars: Array<Array<[number, number]>> = [];
    let particles: number = 0;
    let w: number = 0;
    let h: number = 0;
    let current: number | undefined = undefined;
    const duration: number = 5000;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const makeChar = (c: string): [number, number][] => {
            let tmp = document.createElement('canvas');
            let size = (tmp.width = tmp.height = w < 400 ? 200 : 300);
            let tmpCtx = tmp.getContext('2d');
            if (!tmpCtx) return [];
            tmpCtx.font = 'bold ' + size + 'px Arial';
            tmpCtx.fillStyle = 'white';
            tmpCtx.textBaseline = 'middle';
            tmpCtx.textAlign = 'center';
            tmpCtx.fillText(c, size / 2, size / 2);
            let char2 = tmpCtx.getImageData(0, 0, size, size);
            let char2particles: [number, number][] = [];
            for (let i = 0; char2particles.length < particles; i++) {
                let x = size * Math.random();
                let y = size * Math.random();
                let offset = parseInt(y) * size * 4 + parseInt(x) * 4;
                if (char2.data[offset])
                    char2particles.push([x - size / 2, y - size / 2]);
            }
            return char2particles;
        };

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            particles = window.innerWidth < 400 ? 55 : 99;
        };

        const makeChars = (t: number) => {
            let actual = parseInt(t / duration) % str.length;
            if (current === actual) return;
            current = actual;
            chars = [...str[actual]].map(makeChar);
        };

        const render = (t: number) => {
            makeChars(t);
            requestAnimationFrame(render);
            ctx.fillStyle = '#00000010';
            ctx.fillRect(0, 0, w, h);
            chars.forEach((pts, i) => firework(t, i, pts));
        };

        const firework = (t: number, i: number, pts: [number, number][]) => {
            t -= i * 200;
            let id = i + chars.length * parseInt(t - (t % duration));
            t = (t % duration) / duration;
            let dx = ((i + 1) * w) / (1 + chars.length);
            dx += Math.min(0.33, t) * 100 * Math.sin(id);
            let dy = h * 0.5;
            dy += Math.sin(id * 4547.411) * h * 0.1;
            if (t < 0.33) {
                rocket(dx, dy, id, t * 3);
            } else {
                explosion(
                    pts,
                    dx,
                    dy,
                    id,
                    Math.min(1, Math.max(0, t - 0.33) * 2)
                );
            }
        };

        const rocket = (x: number, y: number, id: number, t: number) => {
            ctx.fillStyle = 'white';
            let r = 2 - 2 * t + Math.pow(t, 15 * t) * 16;
            y = h - y * t;
            circle(x, y, r);
        };

        const explosion = (
            pts: [number, number][],
            x: number,
            y: number,
            id: number,
            t: number
        ) => {
            let dy = t * t * t * 20;
            let r = Math.sin(id) * 1 + 3;
            r = t < 0.5 ? (t + 0.5) * t * r : r - t * r;
            ctx.fillStyle = `hsl(${id * 55}, 55%, 55%)`;
            pts.forEach((xy, i) => {
                if (i % 20 === 0)
                    ctx.fillStyle = `hsl(${id * 55}, 55%, ${
                        55 + t * Math.sin(t * 55 + i) * 45
                    }%)`;
                circle(t * xy[0] + x, h - y + t * xy[1] + dy, r);
            });
        };

        const circle = (x: number, y: number, r: number) => {
            ctx.beginPath();
            ctx.ellipse(x, y, r, r, 0, 0, 6.283);
            ctx.fill();
        };

        const init = () => {
            resize();
            requestAnimationFrame(render);
        };

        window.addEventListener('resize', resize);
        init();

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'absolute', top: 0, left: 0 }}
        />
    );
};

export default FireworksCanvas;
