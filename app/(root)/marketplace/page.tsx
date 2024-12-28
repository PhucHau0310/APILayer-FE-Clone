'use client';

import useApis from '@/hooks/useApis';
import {
    faList,
    faPhone,
    faSearch,
    faShapes,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const fakeCategories = [
    {
        title: 'AI/ML',
        number: 4,
    },
    {
        title: 'Automotive',
        number: 1,
    },
    {
        title: 'Blockchain',
        number: 1,
    },
    {
        title: 'Business',
        number: 9,
    },
    {
        title: 'Communication',
        number: 7,
    },
    {
        title: 'Conversion APIs',
        number: 1,
    },
    {
        title: 'Dev Tools',
        number: 51,
    },
    {
        title: 'E-commerce',
        number: 3,
    },
    {
        title: 'Finance',
        number: 14,
    },
    {
        title: 'Food',
        number: 1,
    },
];

const Marketplace = () => {
    const { data, loading, error } = useApis();

    console.log(data);

    return (
        <div className="py-20">
            <h1 className="text-[#0052cc] text-center font-medium text-5xl">
                API Marketplace
            </h1>
            <p className="text-[#677788] text-center text-lg mt-4">
                Discover, integrate, and manage top-tier APIs across diverse
                categories.
            </p>

            <div className="max-w-6xl mx-auto mt-8 flex flex-row items-center justify-between">
                <div className="w-[50%] relative">
                    <input
                        type="text"
                        name="searchApi"
                        id="searchApi"
                        className="bg-transparent border border-[#e0e5f1] rounded-xl px-5 py-[5px] w-full text-[#1e2022] focus:outline-none focus:shadow-lg focus:shadow-blue-100"
                        placeholder="Search API..."
                    />

                    <FontAwesomeIcon
                        icon={faSearch}
                        size="1x"
                        color="white"
                        className="bg-[#37c625] absolute top-1/5 translate(-50%, 50%) right-0 px-5 py-[10px] rounded-tr-xl rounded-br-xl hover:shadow-sm cursor-pointer hover:shadow-[#37c625] transition-all"
                    />
                </div>

                <div className="flex flex-row items-center text-[#1e2022] gap-10">
                    <div className="flex flex-row items-center gap-2">
                        <span>Sort by</span>
                        <select className="border border-[#e0e5f1] px-2 py-1.5 rounded-md focus:outline-none">
                            <option value="featured">Featured</option>
                            <option value="alphabetical">Alphabetical</option>
                            <option value="latest">Latest</option>
                        </select>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <span>View by</span>

                        <div className="flex flex-row items-center gap-4 bg-[#f5f8fd] p-1 rounded-md">
                            <FontAwesomeIcon
                                icon={faShapes}
                                size="lg"
                                color="#0052cc"
                                className="hover:bg-white p-2 cursor-pointer rounded-md"
                            />
                            <FontAwesomeIcon
                                icon={faList}
                                size="lg"
                                color="#677788"
                                className="hover:bg-white p-2 cursor-pointer rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-8 flex flex-row items-start gap-5">
                <div className="w-[28%] px-5 py-6 bg-[#f5f8fd] rounded-md">
                    <div>
                        <h2 className="text-[#1e2022] font-semibold text-xl">
                            Filter by Categories
                        </h2>
                        <div className="mt-4">
                            {fakeCategories.map((item) => {
                                return (
                                    <div
                                        key={item.title}
                                        className="flex flex-row items-center gap-2 text-[#677788] mb-2"
                                    >
                                        <div>
                                            <input
                                                id={item.title}
                                                type="checkbox"
                                                className="w-4 h-4"
                                            />
                                            <label
                                                htmlFor={item.title}
                                                className="ml-2"
                                            >
                                                {item.title}
                                            </label>
                                        </div>

                                        <span className="ml-auto">
                                            {item.number}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-[#1e2022] font-semibold text-xl">
                            Filter by Rating
                        </h2>
                        <div className="mt-4">
                            <div className="flex flex-col gap-2">
                                {Array(5)
                                    .fill(null)
                                    .map((_, idx) => (
                                        <div className="flex flex-row items-center gap-2">
                                            <input
                                                id={idx.toString()}
                                                type="checkbox"
                                                className="w-4 h-4"
                                            />
                                            <label
                                                htmlFor={idx.toString()}
                                                className="flex flex-row items-center gap-0.5"
                                            >
                                                <Rating
                                                    name="read-only"
                                                    value={idx + 1}
                                                    precision={0.5}
                                                    readOnly
                                                />
                                            </label>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[72%]">
                    <h2 className="text-[#0052cc] font-semibold text-xl mb-4">
                        All APIs ({data?.length})
                    </h2>

                    <div className="grid grid-cols-3 gap-4">
                        {data?.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="bg-[#f5f8fd] mb-6 p-4 rounded-xl"
                                >
                                    <div className="flex justify-center mb-5">
                                        <img
                                            src={
                                                item.documentations[0]
                                                    ?.logoUrl || ''
                                            }
                                            alt="logoUrl"
                                            className="w-16 h-16 rounded-md"
                                        />
                                    </div>
                                    <h3 className="text-[#1e2022] font-semibold">
                                        {item.name}
                                    </h3>
                                    <p className="mt-2.5 flex flex-row items-center">
                                        {/* {Array(5)
                                            .fill(null)
                                            .map((star, idx) => {
                                                return (
                                                    <FontAwesomeIcon
                                                        key={idx}
                                                        icon={faStar}
                                                        size="sm"
                                                        color="#ffc107"
                                                        className="mr-1"
                                                    />
                                                );
                                            })} */}
                                        <Rating
                                            name="read-only"
                                            value={item.reviews.length ?? 0}
                                            precision={0.5}
                                            readOnly
                                        />
                                        <span className="text-[#677788] text-sm ml-1.5">
                                            ({item.reviews.length ?? 0})
                                        </span>
                                    </p>
                                    <p className="text-[#1e2022] text-base mt-3 h-24">
                                        {item.description}
                                    </p>

                                    <Link
                                        href={`/marketplace/${item.name}`}
                                        className="text-white bg-[#2390e5] mt-20 block mx-auto w-28 text-center px-5 py-1.5 rounded-md hover:opacity-90"
                                    >
                                        View API
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
