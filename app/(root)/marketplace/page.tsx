'use client';

import useApis from '@/hooks/useApis';
import useUser from '@/hooks/useUser';
import {
    faCheck,
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

const Marketplace = () => {
    const { data, loading, error } = useApis();
    const { data: userData } = useUser();
    const [selectedCategories, setSelectedCategories] = React.useState<
        string[]
    >([]);
    const [selectedRatings, setSelectedRatings] = React.useState<number[]>([]);
    const [searchQuery, setSearchQuery] = React.useState<string>('');
    const [renderType, setRenderType] = React.useState(1);
    const [selectedPaymentType, setSelectedPaymentType] =
        React.useState<string>('');
    const [isFeatured, setIsFeatured] = React.useState<string>('');

    const categories = [
        'Finance',
        'Dev Tools',
        'E-commerce',
        'Geolocation',
        'Sports',
        'Web Tools APIs',
    ];

    // console.log(data);
    // console.log(userData?.userSubscriptions.$values);

    const countCategories = (category: string) => {
        return data?.filter((api) => api.category === category).length || 0;
    };

    const filterByCategoriesAndRatingsAndSearch = (
        categories: string[],
        ratings: number[],
        query: string,
        paymentType: string,
        isFeatued: string
    ) => {
        if (
            categories.length === 0 &&
            ratings.length === 0 &&
            query.length === 0 &&
            paymentType === '' &&
            isFeatued === 'Latest'
        ) {
            return data;
        }

        return (
            data?.filter((api) => {
                const matchesCategory =
                    categories.length === 0 ||
                    categories.includes(api.category);

                const averageRating =
                    api.reviews.length > 0
                        ? Math.round(
                              api.reviews.reduce(
                                  (sum, review) => sum + review.rating,
                                  0
                              ) / api.reviews.length
                          )
                        : 0;

                const matchesRating =
                    ratings.length === 0 || ratings.includes(averageRating);

                const matchesSearch =
                    query.length === 0 ||
                    api.name.toLowerCase().includes(query.toLowerCase()) ||
                    api.description.toLowerCase().includes(query.toLowerCase());

                const matchesPayment =
                    paymentType === '' ||
                    (paymentType === 'free' && api.basePrice === 0) ||
                    (paymentType === 'premium' && api.basePrice > 0);

                const mathchesIsFeatued = true;

                return (
                    matchesCategory &&
                    matchesRating &&
                    matchesSearch &&
                    matchesPayment &&
                    mathchesIsFeatued
                );
            }) || []
        );
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };

    const handleRatingChange = (rating: number) => {
        setSelectedRatings((prev) =>
            prev.includes(rating)
                ? prev.filter((item) => item !== rating)
                : [...prev, rating]
        );
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handlePaymentTypeChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedPaymentType(event.target.value);
    };

    const handleFeaturedChagne = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setIsFeatured(event.target.value);
    };

    const filteredData = filterByCategoriesAndRatingsAndSearch(
        selectedCategories,
        selectedRatings,
        searchQuery,
        selectedPaymentType,
        isFeatured
    );

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
                {/* Fillter by Search */}
                <div className="w-[50%] relative">
                    <input
                        type="text"
                        name="searchApi"
                        id="searchApi"
                        className="bg-transparent border border-[#e0e5f1] rounded-xl px-5 py-[5px] w-full text-[#1e2022] focus:outline-none focus:shadow-lg focus:shadow-blue-100"
                        placeholder="Search API..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />

                    <FontAwesomeIcon
                        icon={faSearch}
                        size="1x"
                        color="white"
                        className="bg-[#37c625] absolute top-1/5 translate(-50%, 50%) right-0 px-5 py-[10px] rounded-tr-xl rounded-br-xl hover:shadow-sm cursor-pointer hover:shadow-[#37c625] transition-all"
                    />
                </div>

                <div className="flex flex-row items-center text-[#1e2022] gap-5">
                    {/* Filter by Featured */}
                    <div className="flex flex-row items-center gap-2">
                        <span>Sort by</span>
                        <select
                            value={isFeatured}
                            onChange={handleFeaturedChagne}
                            className="border border-[#e0e5f1] px-2 py-1.5 rounded-md focus:outline-none"
                        >
                            <option value="latest">Latest</option>
                            <option value="featured">Featured</option>
                        </select>
                    </div>

                    {/* Filter by Pay Type */}
                    <div className="flex flex-row items-center gap-2">
                        <select
                            value={selectedPaymentType}
                            onChange={handlePaymentTypeChange}
                            className="border border-[#e0e5f1] px-2 py-1.5 rounded-md focus:outline-none"
                        >
                            <option value="">Free + Premium</option>
                            <option value="free">Free</option>
                            <option value="premium">Premium</option>
                        </select>
                    </div>

                    {/* Render Type */}
                    <div className="flex flex-row items-center gap-2">
                        <span>View by</span>

                        <div className="flex flex-row items-center gap-4 bg-[#f5f8fd] p-1 rounded-md">
                            <FontAwesomeIcon
                                icon={faShapes}
                                size="lg"
                                color="#0052cc"
                                className={`hover:bg-white p-2 cursor-pointer rounded-md ${
                                    renderType === 1 && 'bg-white'
                                }`}
                                onClick={() => setRenderType(1)}
                            />
                            <FontAwesomeIcon
                                icon={faList}
                                size="lg"
                                color="#677788"
                                className={`hover:bg-white p-2 cursor-pointer rounded-md ${
                                    renderType === 2 && 'bg-white'
                                }`}
                                onClick={() => setRenderType(2)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-8 flex flex-row items-start gap-5">
                <div className="w-[28%] px-5 py-6 bg-[#f5f8fd] rounded-md">
                    {/* Filter by Categories */}
                    <div>
                        <h2 className="text-[#1e2022] font-semibold text-xl">
                            Filter by Categories
                        </h2>
                        <div className="mt-4">
                            {categories.map((item) => {
                                return (
                                    <div
                                        key={item}
                                        className="flex flex-row items-center gap-2 text-[#677788] mb-2"
                                    >
                                        <div>
                                            <input
                                                id={item}
                                                type="checkbox"
                                                className="w-4 h-4"
                                                onChange={() =>
                                                    handleCategoryChange(item)
                                                }
                                                checked={selectedCategories.includes(
                                                    item
                                                )}
                                            />
                                            <label
                                                htmlFor={item}
                                                className="ml-2"
                                            >
                                                {item}
                                            </label>
                                        </div>

                                        <span className="ml-auto">
                                            {countCategories(item)}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Filter by Rating */}
                    <div className="mt-10">
                        <h2 className="text-[#1e2022] font-semibold text-xl">
                            Filter by Rating
                        </h2>
                        <div className="mt-4">
                            <div className="flex flex-col gap-2">
                                {Array(5)
                                    .fill(null)
                                    .map((_, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-row items-center gap-2"
                                        >
                                            <input
                                                id={idx.toString()}
                                                type="checkbox"
                                                className="w-4 h-4"
                                                onChange={() =>
                                                    handleRatingChange(idx + 1)
                                                }
                                                checked={selectedRatings.includes(
                                                    idx + 1
                                                )}
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
                    {renderType === 1 ? (
                        <>
                            <h2 className="text-[#0052cc] font-semibold text-xl mb-4">
                                {selectedCategories.length > 0 ||
                                selectedRatings.length > 0
                                    ? `Results for: ${[
                                          ...selectedCategories,
                                          ...selectedRatings.map(
                                              (rating) => `${rating}★`
                                          ),
                                      ].join(', ')} (${filteredData?.length})`
                                    : `All APIs (${filteredData?.length})`}
                            </h2>

                            <div className="grid grid-cols-3 gap-4">
                                {filteredData?.map((item) => {
                                    return (
                                        <div
                                            key={item.id}
                                            className="bg-[#f5f8fd] mb-6 p-4 rounded-xl relative"
                                        >
                                            {userData?.userSubscriptions.$values.map(
                                                (subsItem) =>
                                                    subsItem.apiId ===
                                                        item.id && (
                                                        <div
                                                            key={subsItem.id}
                                                            className="absolute top-1 left-1 bg-green-100 p-1 rounded-md"
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faCheck}
                                                                size="1x"
                                                                color="green"
                                                            />
                                                            <span className="text-green-700 ml-1 text-sm">
                                                                Subcribed
                                                            </span>
                                                        </div>
                                                    )
                                            )}

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
                                                <Rating
                                                    name="read-only"
                                                    value={
                                                        item.reviews.length ?? 0
                                                    }
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
                        </>
                    ) : (
                        <div className="flex flex-col gap-16">
                            {filteredData?.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-row items-center justify-between gap-4 pl-1 py-4 border-y border-gray-300 hover:bg-slate-200"
                                >
                                    <img
                                        src={
                                            item.documentations[0]?.logoUrl ||
                                            ''
                                        }
                                        alt="logoUrl"
                                        className="w-14 h-14 rounded-full"
                                    />

                                    <div>
                                        <h3 className="text-[#1e2022] font-semibold text-sm w-[33%]">
                                            {item.name}
                                        </h3>
                                        {userData?.userSubscriptions.$values.map(
                                            (subsItem) =>
                                                subsItem.apiId === item.id && (
                                                    <div
                                                        key={subsItem.id}
                                                        className=" bg-green-100 px-1 rounded-md"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faCheck}
                                                            size="1x"
                                                            color="green"
                                                        />
                                                        <span className="text-green-700 ml-1 text-sm">
                                                            Subcribed
                                                        </span>
                                                    </div>
                                                )
                                        )}
                                    </div>

                                    <p className="flex flex-row items-center">
                                        <Rating
                                            name="read-only"
                                            value={item.reviews.length ?? 0}
                                            precision={0.5}
                                            readOnly
                                        />
                                        <span className="text-[#677788] text-sm ml-1">
                                            ({item.reviews.length ?? 0})
                                        </span>
                                    </p>

                                    <p className="text-[#1e2022] text-sm w-[40%]">
                                        {item.description}
                                    </p>

                                    <Link
                                        href={`/marketplace/${item.name}`}
                                        className="text-white bg-[#2390e5] w-28 text-xs font-semibold text-center p-2 rounded-md hover:opacity-90"
                                    >
                                        View API
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
