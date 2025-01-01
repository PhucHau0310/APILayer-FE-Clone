import React from 'react';
import LeftSideBar from '@/components/items/admin/LeftSideBar';
import TopBar from '@/components/items/admin/TopBar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
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
