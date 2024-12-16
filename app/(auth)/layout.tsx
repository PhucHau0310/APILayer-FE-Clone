import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authentication',
    description: 'Marketplace for APIs',
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-white">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default AuthLayout;
