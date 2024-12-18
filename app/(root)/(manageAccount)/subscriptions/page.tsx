'use client';

import useUser from '@/hooks/useUser';
import { faCode, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Subscriptions = () => {
    const { data, loading } = useUser();
    return (
        <div className="text-[#1e2022] mt-16 pt-8 mb-96 bg-blue-900 h-56">
            <div className="max-w-5xl mx-auto relative h-44">
                <h1 className="text-white font-semibold text-3xl">
                    API Dashboard
                </h1>
                <p className="text-[#677788] mt-2">
                    API Dashboard <span className="text-white">/</span>{' '}
                    Subscriptions
                </p>

                <div className="flex flex-row items-start justify-between gap-4 absolute w-full left-0 -bottom-72 text-[#677788]">
                    <div className="bg-white w-[27%] px-8 pt-6 pb-11 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold text-[#1e2022]">
                            {data?.username}
                        </h2>
                        <h3 className="mb-7">{data?.email}</h3>

                        <p className="mb-3">ACCOUNT</p>

                        <div className="flex flex-col gap-3">
                            <Link
                                href={'/provider'}
                                className="flex flex-row items-center gap-2.5 cursor-pointer hover:text-[#0052CC]"
                            >
                                <FontAwesomeIcon icon={faCode} size="1x" />
                                <span>My APIs</span>
                            </Link>
                            <div className="flex flex-row items-center gap-2.5 cursor-pointer text-[#0052CC]">
                                <FontAwesomeIcon icon={faListCheck} size="1x" />
                                <span>Subscriptions</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[73%] bg-white rounded-md shadow-md">
                        <h2 className="px-8 pt-6 pb-5 text-lg font-semibold text-[#1e2022] border-b border-b-[#e7eaf3]">
                            Subscriptions
                        </h2>

                        <div className="px-8 py-6">
                            <div className="text-center pt-4">
                                <h3 className="text-[#1e2022] text-4xl">
                                    Your API collection is empty
                                </h3>
                                <h4 className="mt-2 mb-16">
                                    Let's subscribe to your first API
                                </h4>

                                <Link
                                    href={'/'}
                                    className="bg-[#37C625] text-white px-4 py-3 rounded-md hover:shadow-md transition-all"
                                >
                                    Browse API marketplace
                                </Link>
                                <Link
                                    href={'/provider'}
                                    className="text-[#0052CC] block mt-4 hover:text-black transition-all cursor-pointer"
                                >
                                    or add your API
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscriptions;
