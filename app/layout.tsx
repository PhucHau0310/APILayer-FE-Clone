import type { Metadata } from 'next';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
// import LoadingBar from '@/components/items/LoadingBar';
// import { Suspense } from 'react';

config.autoAddCss = false;

export const metadata: Metadata = {
    title: 'API Layer',
    description: 'Marketplace for APIs',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                {/*<LoadingBar />*/}
                {/* <Suspense>{children}</Suspense> */}
                {children}
            </body>
        </html>
    );
}
