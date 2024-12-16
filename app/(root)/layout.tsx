'use client';

import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
// import type { Metadata } from 'next';
import Intergrate from '@/components/items/root/Intergrate';
import useScrollToTop from '@/hooks/useScrollToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

// export const metadata: Metadata = {
//     title: 'API Layer',
//     description: 'Marketplace for APIs',
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const { isVisible, scrollToTop } = useScrollToTop(200);

    return (
        <div className="bg-white relative">
            <Header />
            <Intergrate />
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
        </div>
    );
};

export default RootLayout;
