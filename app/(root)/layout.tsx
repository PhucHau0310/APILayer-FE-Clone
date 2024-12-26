'use client';

import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import useScrollToTop from '@/hooks/useScrollToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import SnowEffect from '@/components/items/root/SnowEffect';
import FireworksCanvas from '@/components/items/root/FireworksCanvas';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const { isVisible, scrollToTop } = useScrollToTop(200);

    return (
        <div className="bg-white relative">
            <Header />
            {children}
            <Footer />

            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-[#f1f3f5] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#004bb5] transition-all opacity-70"
                >
                    <FontAwesomeIcon
                        icon={faAngleUp}
                        size="1x"
                        color="#677788"
                    />
                </button>
            )}
            <div className="fixed inset-0 pointer-events-none z-[9999]">
                <SnowEffect />
            </div>
            {/* <FireworksCanvas /> */}
        </div>
    );
};

export default RootLayout;
