'use client';

import useApis from '@/hooks/useApis';
import {
    faGrinBeam,
    faMeh,
    faQuestionCircle,
    faSadTear,
    faSmile,
    faStarHalfAlt,
    faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface APIDoc {
    id: number;
    apiId: number;
    documentUrl: string;
    logoUrl: string;
    codeExamples: string;
    status: string;
}

interface API {
    id: number;
    onwerId: number;
    name: string;
    description: string;
    category: string;
    pricingUrl: string;
    basePrice: number;
    status: string;
    overallSubscription: number;
    documentations: APIDoc[];
}

interface Params {
    slug: string;
}

const ApiDetail = ({ params }: { params: Promise<Params> }) => {
    const resolvedParams = React.use(params);
    const { slug } = resolvedParams;
    const { data, loading, error } = useApis();
    const [api, setApi] = React.useState<API | null>(null);
    const [subTab, setSubTab] = React.useState('API Info');
    const [rating, setRating] = React.useState<number | null>(2);

    const getRatingInfo = (
        rating: number | null
    ): {
        text: string;
        color: string;
        icon: any;
    } => {
        if (!rating)
            return {
                text: 'Select rating',
                color: 'text-gray-400',
                icon: faQuestionCircle,
            };

        if (rating <= 1)
            return {
                text: 'Poor',
                color: 'text-red-500',
                icon: faSadTear,
            };

        if (rating <= 2)
            return {
                text: 'Fair',
                color: 'text-orange-500',
                icon: faMeh,
            };

        if (rating <= 3)
            return {
                text: 'Good',
                color: 'text-yellow-500',
                icon: faSmile,
            };

        if (rating <= 4)
            return {
                text: 'Very Good',
                color: 'text-lime-500',
                icon: faGrinBeam,
            };

        return {
            text: 'Excellent',
            color: 'text-green-500',
            icon: faStarHalfAlt,
        };
    };

    React.useEffect(() => {
        if (data) {
            const foundApi = data.find(
                (api) => api.name === slug.split('%20').join(' ')
            );
            if (foundApi) {
                setApi(foundApi);
            }
        }
    }, [data, slug]);

    return (
        <div className="mb-20">
            <div className="bg-[#f5f8fd] p-5 mt-6">
                <div className="max-w-6xl mx-auto">
                    <Link
                        href="/marketplace"
                        className="text-[#2390e5] hover:underline transition-opacity duration-300"
                    >
                        API Marketplace
                    </Link>

                    <span className="text-[#677788] mx-1">/</span>

                    <span className="font-medium text-[#677788]">
                        {slug
                            ? slug.split('%20').join(' ')
                            : 'No slug provided'}
                    </span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-row items-start justify-between gap-8">
                <div className="w-1/2 py-8">
                    <div className="flex flex-row items-start gap-8">
                        <img
                            src={api?.documentations[0].logoUrl}
                            alt="logoUrl"
                            className="w-24 h-24"
                        />

                        <div className="">
                            <h1 className="font-medium text-3xl text-blue-600 mb-4">
                                {api?.name}
                            </h1>
                            <h2 className="text-[#677788]  text-lg">
                                {api?.description}
                            </h2>
                        </div>
                    </div>

                    <button className="flex flex-row items-center gap-4 font-semibold mt-10 bg-blue-700 py-4 px-16 rounded-md text-base hover:shadow-md transition-all hover:shadow-blue-500">
                        Subscribe
                        <FontAwesomeIcon
                            icon={faUpRightFromSquare}
                            size="1x"
                            color="white"
                        />
                    </button>
                </div>

                <div className="bg-black w-1/2">
                    <div className="p-4 font-mono text-sm h-[230px] overflow-y-scroll">
                        <pre className="whitespace-pre-wrap">
                            <code>{api?.documentations[0].codeExamples}</code>
                        </pre>
                    </div>

                    <div className="px-4 py-2 bg-[#252525] text-gray-400 text-sm">
                        Response example. If you want to see more{' '}
                        <Link
                            href={api?.documentations[0].documentUrl ?? ''}
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            check the documentation
                        </Link>
                        .
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-4 text-[#677788] flex flex-row items-center gap-12 border-b border-b-[#677788] pb-6 px-5">
                <button
                    onClick={() => setSubTab('API Info')}
                    className={`hover:text-blue-600 font-semibold ${
                        subTab === 'API Info' && 'border-b-2 border-b-blue-700'
                    }`}
                >
                    API Info{' '}
                </button>
                <Link
                    href={api?.pricingUrl ?? '/'}
                    target="_blank"
                    className="flex flex-row items-center gap-2 hover:text-blue-600 font-semibold"
                >
                    Pricing{' '}
                    <FontAwesomeIcon
                        icon={faUpRightFromSquare}
                        size="1x"
                        color="#677788"
                    />
                </Link>
                <Link
                    href={api?.documentations[0].documentUrl ?? '/'}
                    target="_blank"
                    className="flex flex-row items-center gap-2 hover:text-blue-600 font-semibold"
                >
                    Documentation
                    <FontAwesomeIcon
                        icon={faUpRightFromSquare}
                        size="1x"
                        color="#677788"
                    />
                </Link>
                <button
                    onClick={() => setSubTab('Reviews')}
                    className={`flex flex-row items-center gap-2 hover:text-blue-600 font-semibold ${
                        subTab === 'Reviews' && 'border-b-2 border-b-blue-700'
                    }`}
                >
                    Reviews
                </button>
            </div>

            <div className="max-w-6xl mx-auto mt-10 text-[#677788]">
                {subTab === 'API Info' ? (
                    <p className="text-base">Not yet provided API Info</p>
                ) : (
                    <>
                        <div className="flex flex-row items-start justify-between gap-8">
                            <div className="w-1/3 py-10 bg-blue-700 rounded-md flex flex-col justify-center items-center">
                                <p className="text-white font-semibold text-5xl mb-2">
                                    4.5
                                </p>
                                <Rating
                                    name="read-only"
                                    value={4.5}
                                    precision={0.5}
                                    readOnly
                                />
                                <p className="mt-2 text-white">API rating</p>
                            </div>

                            <div className="w-2/3">
                                <input
                                    type="text"
                                    name="review"
                                    id="review"
                                    placeholder="Some text heare, Great!!! this is amazing"
                                    className="w-full pt-4 pb-8 px-8 bg-gray-100 text-black rounded-full border border-gray-500 focus:outline-none focus:border-blue-800"
                                />

                                <div className="flex flex-row items-center gap-14 mt-8">
                                    <button className="bg-red-400 px-6 py-2 text-white rounded-full transition-all hover:shadow-md hover:shadow-red-500">
                                        Write review
                                    </button>

                                    <div className="flex flex-row items-center gap-4">
                                        <p>Overall rating*</p>
                                        <Rating
                                            name="simple-controlled"
                                            precision={0.5}
                                            value={rating}
                                            onChange={(event, newValue) => {
                                                setRating(newValue);
                                            }}
                                            // onChangeActive={(e, value) => {
                                            //     setRating(value);
                                            // }}
                                        />
                                    </div>

                                    <div
                                        className={`flex items-center gap-2 font-semibold ${
                                            getRatingInfo(rating).color
                                        }`}
                                    >
                                        <FontAwesomeIcon
                                            icon={getRatingInfo(rating).icon}
                                            className="text-xl"
                                        />
                                        <span>
                                            {getRatingInfo(rating).text}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 mt-16 shadow-md p-4 h-[600px] overflow-y-scroll">
                            {Array(8)
                                .fill(null)
                                .map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-row items-center justify-between gap-8"
                                    >
                                        <div className="w-1/3 flex flex-row items-center gap-3">
                                            <img
                                                src="/"
                                                alt="avatar"
                                                className="w-12 h-12 rounded-full"
                                            />
                                            <div>
                                                <p>2 years ago</p>
                                                <p className="font-semibold text-black">
                                                    Nguyen Hau
                                                </p>
                                            </div>
                                        </div>

                                        <div className="w-2/3">
                                            <Rating
                                                name="read-only"
                                                value={4.5}
                                                precision={0.5}
                                                readOnly
                                            />
                                            <p>
                                                Amazing API, accurate and fast
                                                results! I love it
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </>
                )}
            </div>

            <div className="max-w-6xl mx-auto mt-20">
                <h2 className="font-medium text-4xl text-blue-700">
                    Related Products
                </h2>

                <div className="grid grid-cols-3 gap-6 mt-6">
                    {Array(5)
                        .fill(0)
                        .map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-row items-center gap-6"
                            >
                                <img
                                    src={api?.documentations[0].logoUrl}
                                    alt="logoUrl"
                                    className="w-20 h-20"
                                />

                                <div>
                                    <h2 className="text-black font-semibold text-lg">
                                        {api?.name}
                                    </h2>
                                    <h3 className="text-[#677788] text-sm">
                                        {api?.category}
                                    </h3>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ApiDetail;
