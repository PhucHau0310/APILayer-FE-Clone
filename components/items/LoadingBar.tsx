'use client';

import NProgress from 'nprogress';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import 'nprogress/nprogress.css';

const LoadingBar = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        NProgress.done();
    }, [pathname, searchParams]);

    useEffect(() => {
        const handleStart = () => NProgress.start();
        const handleStop = () => NProgress.done();

        // Global event listeners for manual navigation
        window.addEventListener('popstate', handleStop);

        return () => {
            window.removeEventListener('popstate', handleStop);
        };
    }, []);

    return null;
};

export default LoadingBar;
