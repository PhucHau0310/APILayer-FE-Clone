import React from 'react';
import LeftSideBar from '@/components/items/admin/LeftSideBar';
import TopBar from '@/components/items/admin/TopBar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-[#111C44]">
            <div className="flex flex-row">
                <LeftSideBar />
                <div className="ml-[290px]">
                    <TopBar />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
