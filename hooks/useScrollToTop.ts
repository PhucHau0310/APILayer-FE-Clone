'use client';

import React from 'react';

const useScrollToTop = (threshold = 200) => {
    const [isVisible, setIsVisible] = React.useState(false);

    // Hàm xử lý sự kiện cuộn
    const handleScroll = React.useCallback(() => {
        if (window.scrollY > threshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [threshold]);

    // Cuộn lên đầu trang
    const scrollToTop = React.useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return { isVisible, scrollToTop };
};

export default useScrollToTop;
