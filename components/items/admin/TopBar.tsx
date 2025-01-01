'use client';

import useUser from '@/hooks/useUser';
import {
    faBell,
    faCircleInfo,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';

const TopBar = () => {
    const capitalizeFirstLetter = (str: string) => {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    };
    const pathname = usePathname();
    const path = pathname.split('/')[1];
    const formattedPath = capitalizeFirstLetter(path);

    const { data, loading, error } = useUser();

    return (
        <div className="px-6 bg-[#0B1437] py-4 flex items-center justify-between">
            <div className="flex flex-col">
                <p className="text-base">
                    Pages /{' '}
                    <span className="hover:underline cursor-pointer text-blue-500">
                        {formattedPath}
                    </span>
                </p>

                <h1 className="font-semibold text-xl mt-2">
                    MAIN {path.toUpperCase()}
                </h1>
            </div>

            <div className="bg-[#1B254B] flex flex-row items-center justify-between rounded-full px-1 py-2 w-[400px]  max-w-full relative">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size="lg"
                    color="white"
                    className="absolute ml-4 top-1/2 transform -translate-y-1/2"
                />
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    className="rounded-full pl-8 pr-2 py-1 bg-[#0B1437] placeholder-gray-400 ml-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                />
                <div className="flex flex-row items-center gap-6 mr-2">
                    <FontAwesomeIcon
                        icon={faBell}
                        size="lg"
                        color="white"
                        className=""
                    />
                    <FontAwesomeIcon
                        icon={faCircleInfo}
                        size="lg"
                        color="white"
                        className=""
                    />

                    <img
                        src={data?.avatar}
                        alt="avatar"
                        className="w-8 h-8 rounded-full shadow-md cursor-pointer hover:shadow-lg hover:shadow-gray-600"
                    />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
