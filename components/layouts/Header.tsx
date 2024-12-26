'use client';

import {
    faAngleDown,
    faBell,
    faCircleQuestion,
    faCircleUser,
    faCode,
    faCreditCard,
    faGear,
    faLayerGroup,
    faListCheck,
    faMoneyBill,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useClickOutside } from '@/hooks/useClickOutSide';
import Link from 'next/link';
import SignIn from '../items/auth/SignIn';
import { useRouter } from 'next/navigation';
import useUser from '@/hooks/useUser';
import Img2025 from '@/public/img/png/2025.png';
import ImgClouds from '@/public/img/png/clouds.png';
import ImgConfetti from '@/public/img/png/confetti.png';
import ImgDecoration from '@/public/img/png/decoration.png';
import ImgFirework from '@/public/img/png/firework.png';
import ImgRedEnvelope from '@/public/img/png/red-envelope.png';

const Menu = [
    {
        title: 'Marketplace',
        link: '/marketplace',
        subsMenu: null,
    },
    {
        title: 'Resources',
        link: null,
        subsMenu: [
            {
                title: 'Blogs',
                link: '/blogs',
            },
            {
                title: 'FAQ',
                link: '/docs/listing/faq',
            },
        ],
    },
    {
        title: 'Developers',
        link: null,
        subsMenu: [
            {
                title: 'Github',
                link: 'https://github.com/PhucHau0310/APILayer-BE',
            },
            {
                title: 'Discord',
                link: 'https://discord.com',
            },
        ],
    },
    {
        title: 'Repo',
        link: 'https://github.com/PhucHau0310/APILayer-FE',
        subsMenu: null,
    },
];

const menuAccount = [
    {
        icon: faCode,
        tite: 'MyApis',
        link: '/provider',
    },
    {
        icon: faListCheck,
        tite: 'Subscriptions',
        link: '/subscriptions',
    },
    {
        icon: faUser,
        tite: 'Account',
        link: '/account',
    },
    {
        icon: faMoneyBill,
        tite: 'Purchase history',
        link: '/purchases',
    },
    {
        icon: faCreditCard,
        tite: 'Payment methods',
        link: '/payment',
    },
    {
        icon: faCircleQuestion,
        tite: 'Supports',
        link: '/support',
    },
    {
        icon: faRightFromBracket,
        tite: 'Log out',
        link: '/provider',
    },
];

const Header = () => {
    const [isClickMenu, setClickMenu] = React.useState<string | null>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);
    const [isClickSignIn, setClickSignIn] = React.useState(false);
    const [isLogined, setLogined] = React.useState(false);
    const [isHoverAccount, setHoverAccount] = React.useState(false);
    const [isHoverNotification, setHoverNotification] = React.useState(false);
    const router = useRouter();
    const { data, loading, error } = useUser();

    useClickOutside(menuRef, () => {
        setClickMenu(null);
    });

    React.useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setLogined(true);
        }
    }, [isLogined]);

    const hanldeLogOut = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        setLogined(false);

        router.push('/sign-in');
    };

    return (
        <header className="z-50 flex items-center justify-between bg-white text-[#27344A] max-w-4xl mx-auto sticky top-5 px-3 py-2 rounded-md shadow-lg">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
                <FontAwesomeIcon
                    icon={faLayerGroup}
                    size="2x"
                    color="#0052cc"
                    className="rotate-[30deg]"
                />
                <h1 className="text-3xl text-[#0052cc] font-semibold">
                    API <span className="text-[#27344a]">Layer</span>
                </h1>
            </Link>

            <div ref={menuRef} className="flex items-center gap-5">
                {Menu.map((item) => {
                    if (item.title === 'Repo') {
                        return (
                            <Link
                                key={item.title}
                                target="_blank"
                                href="https://github.com/PhucHau0310/APILayer-FE"
                                className="flex items-center gap-1 px-1 py-0.5 cursor-pointer relative"
                            >
                                <FontAwesomeIcon icon={faGithub} size="1x" />
                                {item.title}

                                <img
                                    src={Img2025.src}
                                    alt="img"
                                    className="absolute bottom-5 -left-5 w-10 h-10"
                                />
                            </Link>
                        );
                    }
                    return (
                        <div
                            key={item.title}
                            className="flex items-center gap-1 px-1 py-0.5 cursor-pointer relative"
                            //onClick={() => setClickMenu(item.title)}
                            onClick={() =>
                                item.subsMenu
                                    ? setClickMenu((prev) =>
                                          prev === item.title
                                              ? null
                                              : item.title
                                      )
                                    : window.location.assign(item.link ?? '/')
                            }
                        >
                            {item.title}

                            <img
                                src={
                                    item.title === 'Marketplace'
                                        ? ImgClouds.src
                                        : item.title === 'Resources'
                                        ? ImgConfetti.src
                                        : item.title === 'Developers'
                                        ? ImgDecoration.src
                                        : ImgFirework.src
                                }
                                alt="img"
                                className="absolute bottom-5 -left-5 w-10 h-10"
                            />

                            {item.subsMenu && (
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    size="1x"
                                    color="#0052cc"
                                />
                            )}

                            {item.subsMenu && isClickMenu === item.title && (
                                <div className="absolute top-12 rounded-md p-2 w-24 bg-white flex flex-col">
                                    {item.subsMenu?.map((subItem) => {
                                        return (
                                            <Link
                                                key={subItem.title}
                                                target="_blank"
                                                href={subItem.link ?? '/'}
                                                className="p-2 hover:text-[#0052cc]"
                                            >
                                                {subItem.title}
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div>
                {isLogined ? (
                    <div className="flex items-center">
                        <div
                            onMouseEnter={() => setHoverAccount(true)}
                            onMouseLeave={() => setHoverAccount(false)}
                            className="mr-2 p-1 hover:cursor-pointer transition-all duration-500 relative"
                        >
                            <div className="flex flex-row items-center gap-2 relative">
                                {data?.avatar ? (
                                    <img
                                        src={data.avatar}
                                        alt="avatar"
                                        className="w-8 h-8 rounded-full"
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faCircleUser}
                                        size="2x"
                                    />
                                )}
                                <span>Hi, {data?.username}</span>

                                <img
                                    src={ImgRedEnvelope.src}
                                    alt="img"
                                    className="absolute bottom-5 -left-5 w-10 h-10"
                                />
                            </div>

                            {isHoverAccount && (
                                <div className="bg-white absolute top-10 right-0 rounded-md text-[#27344a] shadow-md w-52">
                                    <div className="px-6 py-4 border-b border-b-[#27344a]">
                                        {data?.avatar ? (
                                            <img
                                                src={data.avatar}
                                                alt="avatar"
                                                className="w-8 h-8 rounded-full"
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={faCircleUser}
                                                size="2x"
                                            />
                                        )}
                                        <h2 className="font-semibold text-base mt-2">
                                            {data?.username}
                                        </h2>
                                        <h2 className="text-sm mt-0.5">
                                            {data?.email}
                                        </h2>
                                    </div>

                                    <div className="px-6 py-4">
                                        {menuAccount.map((item) => {
                                            if (item.tite === 'Log out') {
                                                return (
                                                    <div
                                                        onClick={() =>
                                                            hanldeLogOut()
                                                        }
                                                        key={item.tite}
                                                        className="flex flex-row items-center gap-3 mb-3 text-sm hover:text-blue-400"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={item.icon}
                                                            size="1x"
                                                        />
                                                        <span className="">
                                                            {item.tite}
                                                        </span>
                                                    </div>
                                                );
                                            }

                                            return (
                                                <Link
                                                    href={item.link}
                                                    key={item.tite}
                                                    className="flex flex-row items-center gap-3 mb-3 text-sm hover:text-blue-400"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={item.icon}
                                                        size="1x"
                                                    />
                                                    <span className="">
                                                        {item.tite}
                                                    </span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            className="realtive py-2 cursor-pointer"
                            onMouseEnter={() => setHoverNotification(true)}
                            onMouseLeave={() => setHoverNotification(false)}
                        >
                            <FontAwesomeIcon
                                icon={faBell}
                                size="xl"
                                color="#27344a"
                                className="ml-2 inline hover:scale-110 transition-all duration-300 cursor-pointer"
                            />
                            {isHoverNotification && (
                                <div className="bg-white shadow-md absolute top-[85%] right-0 w-[260px] rounded-sm transition-all duration-500">
                                    <div className="bg-red-400 flex flex-row items-center justify-between py-2 px-4 rounded-tl-sm rounded-tr-sm">
                                        <h3 className="text-white">
                                            Notifications
                                        </h3>
                                        <FontAwesomeIcon
                                            icon={faGear}
                                            size="1x"
                                            color="white"
                                        />
                                    </div>

                                    <div className="py-2 px-4 hover:bg-[#f0f0f0] transition-all duration-300">
                                        <div className="flex flex-row items-center gap-3 py-2">
                                            <FontAwesomeIcon
                                                icon={faCircleUser}
                                                size="2x"
                                            />

                                            <div>
                                                <h3>Nguyen Hau</h3>
                                                <p>4 hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2 px-4 hover:bg-[#f0f0f0] transition-all duration-300">
                                        <div className="flex flex-row items-center gap-3 py-2">
                                            <FontAwesomeIcon
                                                icon={faCircleUser}
                                                size="2x"
                                            />

                                            <div>
                                                <h3>Nguyen Hau</h3>
                                                <p>4 hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2 px-4 hover:bg-[#f0f0f0] transition-all duration-300 border-t border-[#f0f0f0]">
                                        <p className="text-green-500 py-2 text-center">
                                            See all recent activity
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <>
                        <Link
                            href={'/sign-up'}
                            className="font-semibold bg-[#f0f0f0] border border-[#f0f0f0] px-2.5 py-3 rounded-md mr-2 hover:shadow-md hover:shadow-[#37C625] transform transition-all"
                        >
                            Sign Up
                        </Link>
                        <button
                            className="text-white font-semibold bg-[#0052CC] border border-[#2480FC] p-2 rounded-md"
                            onClick={() => setClickSignIn(true)}
                        >
                            Start Building
                        </button>
                    </>
                )}
            </div>

            {/* Form Sign In */}
            {isClickSignIn && (
                <SignIn
                    isVisible={isClickSignIn}
                    onClose={() => setClickSignIn(false)}
                />
            )}
        </header>
    );
};

export default Header;
