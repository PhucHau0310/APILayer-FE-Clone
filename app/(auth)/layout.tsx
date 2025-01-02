'use client';

import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import React from 'react';

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
