'use client';

import Alert from '@/components/items/Alert';
import useAlert from '@/hooks/useAlert';
import useApis from '@/hooks/useApis';
import useLoading from '@/hooks/useLoading';
import useUser from '@/hooks/useUser';
import {
    faGrinBeam,
    faMeh,
    faQuestionCircle,
    faSadTear,
    faSmile,
    faStarHalfAlt,
    faUpRightFromSquare,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface APIDoc {
    id: number;
    apiId: number;
    documentUrl: string;
    logoUrl: string;
    codeExamples: string;
    status: string;
}
interface Review {
    reviewId: number;
    userId: number;
    apiId: number;
    rating: number;
    comment: string;
    reviewDate: Date;
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
    reviews: {
        $values: Review[];
    };
}

interface Params {
    slug: string;
}

const ApiDetail = ({ params }: { params: Promise<Params> }) => {
    const resolvedParams = React.use(params);
    const { slug } = resolvedParams;
    const { data } = useApis();
    const { data: userData } = useUser();
    const [api, setApi] = React.useState<API | null>(null);
    const [subTab, setSubTab] = React.useState('API Info');
    const [rating, setRating] = React.useState<number | null>(2);
    const [loading, startLoading, hideLoading] = useLoading();
    const { alert, showAlert, hideAlert } = useAlert();
    const router = useRouter();
    const [textReview, setTextReview] = React.useState('');

    const [randomApiKey, setRandomApiKey] = React.useState('');
    const [copyText, setCopyText] = React.useState('Copy API Key');

    const generateRandomString = (length: number) => {
        const chars =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    React.useEffect(() => {
        setRandomApiKey(generateRandomString(32));
    }, [slug]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(randomApiKey);
            setCopyText('Copied!');
            setTimeout(() => setCopyText('Copy to Clipboard!'), 2000); // Đặt lại chữ sau 2 giây
        } catch (error) {
            console.error('Failed to copy API key:', error);
        }
    };

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

    const handleSubscription = async () => {
        startLoading();

        try {
            if (!userData?.id || !api?.id) {
                showAlert('User or API information is missing!', 'error');
                hideLoading();
                return;
            }

            const subsInfo = {
                id: 0,
                userId: userData?.id,
                apiId: api?.id,
                subscriptionType: api?.basePrice === 0 ? 'Free' : 'Premium',
                startDate: new Date().toISOString(),
                endDate: new Date(
                    new Date().setFullYear(new Date().getFullYear() + 1)
                ).toISOString(),
            };

            const res = await fetch(
                `https://localhost:7036/api/Subscription/user`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify(subsInfo),
                }
            );

            if (!res.ok) {
                showAlert('Failed to subscription!', 'error');
                return;
            }

            showAlert('Subscription successfully!', 'success');
            setTimeout(() => {
                router.push(`/marketplace/order-complete/${slug}`);
            }, 2000);
        } catch (error) {
            console.log(error);
            showAlert('An occured while proccessing', 'error');
        } finally {
            hideLoading();
        }
    };

    const handleWriteReview = async () => {
        startLoading();
        try {
            if (!userData || !rating || !textReview) {
                showAlert('Fill in all', 'error');
                return;
            }

            const dataReq = {
                userId: userData?.id,
                apiId: api?.id,
                rating: rating,
                comment: textReview,
            };

            const res = await fetch(`https://localhost:7036/api/Review`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Add this for cookies if needed
                body: JSON.stringify(dataReq),
            });

            if (!res.ok) {
                showAlert('Failled to add review', 'error');
            }

            showAlert('Add review successfully', 'success');
            setTextReview('');
        } catch (error) {
            console.log(error);
            showAlert('An occured while proccessing', 'error');
        } finally {
            hideLoading();
        }
    };

    let ratingAvg =
        api?.reviews.$values && api?.reviews.$values.length > 0
            ? api.reviews.$values.reduce(
                  (sum, review) => sum + review.rating,
                  0
              ) / api.reviews.$values.length
            : 0;

    return (
        <div className="mb-20">
            <Alert alert={alert} onClose={hideAlert} />
            {/* Links */}
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

            {/* Information */}
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

                    {userData?.userSubscriptions?.$values.some(
                        (subsItem) => subsItem.apiId === api?.id
                    ) ? (
                        <button
                            // onClick={() =>
                            //     router.push(`/subscriptions/${api?.id}`)
                            // }
                            className="flex flex-row items-center gap-4 font-semibold mt-10 bg-gray-500 py-4 px-10 rounded-md text-base hover:shadow-md transition-all"
                        >
                            Manage Subscription
                        </button>
                    ) : (
                        <button
                            onClick={handleSubscription}
                            className="flex flex-row items-center gap-4 font-semibold mt-10 bg-blue-700 py-4 px-16 rounded-md text-base hover:shadow-md transition-all hover:shadow-blue-500"
                        >
                            {loading ? (
                                'Loading...'
                            ) : (
                                <>
                                    Subscribe
                                    <FontAwesomeIcon
                                        icon={faUpRightFromSquare}
                                        size="1x"
                                        color="white"
                                    />
                                </>
                            )}
                        </button>
                    )}
                </div>

                {userData?.userSubscriptions?.$values.some(
                    (subsItem) => subsItem.apiId === api?.id
                ) ? (
                    <div className="shadow-md border border-gray-300 w-1/2 rounded-md mt-6">
                        <p className="border-b border-b-gray-300 p-4 text-[#677788]">
                            Your plan:{' '}
                            <span className="font-semibold text-blue-600">
                                Free plan
                            </span>
                        </p>

                        <div className="border-b border-b-gray-300 p-4 flex flex-row items-center justify-between">
                            <div>
                                <p className="text-black font-semibold text-lg">
                                    API Key:{' '}
                                </p>
                                <p className="text-[#677788] text-lg">
                                    {generateRandomString(32)}
                                </p>
                            </div>

                            <button
                                onClick={handleCopy}
                                className="bg-gray-500 text-white px-2 py-1 rounded-md text-sm"
                            >
                                {copyText}
                            </button>
                        </div>

                        <div className="h-12"></div>
                    </div>
                ) : (
                    <div className="bg-black w-1/2">
                        <div className="p-4 font-mono text-sm h-[230px] overflow-y-scroll">
                            <pre className="whitespace-pre-wrap">
                                <code>
                                    {api?.documentations[0].codeExamples}
                                </code>
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
                )}
            </div>

            {/* Tabs */}
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
                    // Reviews
                    <>
                        <div className="flex flex-row items-start justify-between gap-8">
                            <div className="w-1/3 py-10 bg-blue-700 rounded-md flex flex-col justify-center items-center">
                                <p className="text-white font-semibold text-5xl mb-2">
                                    {ratingAvg.toFixed(1)}
                                </p>
                                <Rating
                                    name="read-only"
                                    value={ratingAvg}
                                    precision={0.5}
                                    readOnly
                                />
                                <p className="mt-2 text-white">API rating</p>
                            </div>

                            {/* Write Review */}
                            <div className="w-2/3">
                                <input
                                    value={textReview}
                                    onChange={(e) =>
                                        setTextReview(e.target.value)
                                    }
                                    type="text"
                                    name="review"
                                    id="review"
                                    placeholder="Some text heare, Great!!! this is amazing"
                                    className="w-full pt-4 pb-8 px-8 bg-gray-100 text-black rounded-full border border-gray-500 focus:outline-none focus:border-blue-800"
                                />

                                <div className="flex flex-row items-center gap-14 mt-8">
                                    <button
                                        onClick={handleWriteReview}
                                        className="bg-red-400 px-6 py-2 text-white rounded-full transition-all hover:shadow-md hover:shadow-red-500"
                                    >
                                        {loading
                                            ? 'Loading...'
                                            : ' Write review'}
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

                        {/* Show Reviews */}
                        <div className="flex flex-col gap-8 mt-16 shadow-md p-4 max-h-[600px] overflow-y-scroll">
                            {api?.reviews.$values.map((item, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className="flex flex-row items-center justify-between gap-8"
                                    >
                                        <div className="w-1/3 flex flex-row items-center gap-3">
                                            {/* <img
                                                src="/"
                                                alt="avatar"
                                                className="w-12 h-12 rounded-full"
                                            /> */}
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                size="2x"
                                                className="rounded-full border border-gray-300 p-2.5"
                                            />
                                            <div>
                                                <p>
                                                    {new Date(
                                                        item.reviewDate
                                                    ).toLocaleDateString(
                                                        'en-US',
                                                        {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric',
                                                        }
                                                    )}
                                                </p>
                                                <p className="font-semibold text-black">
                                                    UserID: {item.userId}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="w-2/3">
                                            <Rating
                                                name="read-only"
                                                value={item.rating}
                                                precision={0.5}
                                                readOnly
                                            />
                                            <p>{item.comment}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>

            {/* Related Products */}
            <div className="max-w-6xl mx-auto mt-20">
                <h2 className="font-medium text-4xl text-blue-700">
                    Related Products
                </h2>

                <div className="grid grid-cols-3 gap-6 mt-6">
                    {data
                        ?.filter(
                            (item) =>
                                item.category === api?.category &&
                                item.id !== api?.id
                        ) // Exclude the current API
                        ?.map((item, idx) => (
                            <Link
                                href={`/marketplace/${item.name}`}
                                key={idx}
                                className="flex flex-row items-center gap-6 cursor-pointer"
                            >
                                <img
                                    src={item?.documentations[0].logoUrl}
                                    alt="logoUrl"
                                    className="w-20 h-20"
                                />

                                <div>
                                    <h2 className="text-black font-semibold text-lg">
                                        {item?.name}
                                    </h2>
                                    <h3 className="text-[#677788] text-sm">
                                        {item?.category}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ApiDetail;
