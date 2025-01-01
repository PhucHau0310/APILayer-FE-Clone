'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCircleQuestion,
    faCode,
    faCreditCard,
    faHouse,
    faLayerGroup,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import Lottie from 'react-lottie-player';
import AnimationQR from '@/public/img/AnimationQR.json';

const menu = [
    {
        title: 'Dashboard',
        icon: faHouse,
        link: '/dashboard',
    },
    {
        title: 'APIs',
        icon: faCode,
        link: '/apis',
    },
    {
        title: 'Customers',
        icon: faUser,
        link: '/customers',
    },
    {
        title: 'Notifications',
        icon: faBell,
        link: '/notifications',
    },
    {
        title: 'Payments',
        icon: faCreditCard,
        link: '/payments',
    },
    {
        title: 'FAQs',
        icon: faCircleQuestion,
        link: '/faqs',
    },
];

const LeftSideBar = () => {
    const pathname = usePathname();

    return (
        <div className="bg-[#111C44] w-[290px] fixed h-full shadow-lg">
            <Link
                href="/"
                className="flex justify-center items-center gap-1 cursor-pointer border-b border-b-gray-600 py-5"
            >
                <FontAwesomeIcon
                    icon={faLayerGroup}
                    size="2x"
                    color="#0052cc"
                    className="rotate-[30deg] mr-1"
                />
                <h1 className="text-3xl text-[#0052cc] font-semibold">
                    API <span className="text-white">Layer</span>
                </h1>
            </Link>

            <div className="px-6 py-4">
                {menu.map((item) => (
                    <Link
                        href={item.link}
                        key={item.title}
                        className={`${
                            item.link === pathname && 'bg-white'
                        } flex flex-row items-center gap-3 mb-5 py-2 px-4 rounded-md transition-all duration-300 hover:bg-gray-500`}
                    >
                        <FontAwesomeIcon
                            icon={item.icon}
                            size="lg"
                            color={item.link === pathname ? '#7551FF' : 'white'}
                        />
                        <span
                            className={`font-semibold text-lg ${
                                item.link === pathname
                                    ? 'text-[#7551FF]'
                                    : 'text-white'
                            }`}
                        >
                            {item.title}
                        </span>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center">
                <Lottie
                    loop
                    animationData={AnimationQR}
                    play
                    style={{ width: 190, height: 190 }}
                    className="bg-white rounded-xl"
                />
            </div>
        </div>
    );
};

export default LeftSideBar;
