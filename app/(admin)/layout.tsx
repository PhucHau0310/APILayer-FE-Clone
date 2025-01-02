'use client';

import React from 'react';
import LeftSideBar from '@/components/items/admin/LeftSideBar';
import TopBar from '@/components/items/admin/TopBar';
import useUser from '@/hooks/useUser';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const { data } = useUser();

    if (data?.role !== 'Admin') {
        return (
            <div className="bg-black flex flex-col items-center justify-center h-[90vh]">
                <h1 className="text-white font-bold text-4xl">
                    You aren't an admin 😢
                </h1>

                <button className="bg-blue-600 px-4 py-3 rounded-lg mt-6 font-bold text-xl hover:bg-blue-700 transition-all duration-300">
                    <a href="/">Go back to home</a>
                </button>
            </div>
        );
    }
    return (
        <div className="bg-[#0B1437]">
            <div className="flex flex-row">
                <LeftSideBar />
                <div className="ml-[290px] w-full">
                    <TopBar />
                    <div className="px-6 py-8">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
