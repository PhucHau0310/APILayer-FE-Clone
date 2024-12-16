'use client';

import { faAngleDown, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useClickOutside } from '@/hooks/useClickOutSide';
import Link from 'next/link';
import SignIn from '../items/auth/SignIn';



const Menu = [
    {
        title: 'Marketplace',
        link: '/market-place',
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
                link: '/faq',
            },
        ],
    },
    {
        title: 'Developers',
        link: null,
        subsMenu: [
            {
                title: 'Github',
                link: '/github',
            },
            {
                title: 'Discord',
                link: '/discord',
            },
        ],
    },
    {
        title: 'Repo',
        link: '/repo',
        subsMenu: null,
    },
];

const Header = () => {
    const [isClickMenu, setClickMenu] = React.useState<string | null>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);
    const [isClickSignIn, setClickSignIn] = React.useState(false);

    useClickOutside(menuRef, () => {
        setClickMenu(null);
    });

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
                                href="https://github.com/PhucHau0310/APILayer-FE"
                                className="flex items-center gap-1 px-1 py-0.5 cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faGithub} size="1x" />
                                {item.title}
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
