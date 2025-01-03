'use client';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

interface PageProps {
    params: {
        slug: string;
    };
}
// { params }: PageProps
const OrderComplete = () => {
    // const { slug } = params;
    const params = useParams();
    const { slug } = params;

    const [randomApiKey, setRandomApiKey] = React.useState('');
    const [copyText, setCopyText] = React.useState('Copy to Clipboard!');

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

    return (
        <div className="max-w-3xl mx-auto mt-16">
            <div>
                <div className="flex justify-center items-center">
                    <FontAwesomeIcon
                        icon={faCheck}
                        size="3x"
                        color="white"
                        className="py-2.5 px-3 bg-green-500 rounded-full"
                    />
                </div>
                <h1 className="text-center text-black font-semibold text-3xl mt-4 mb-2">
                    Subscription successful!
                </h1>
                <p className="text-center w-[70%] mx-auto text-[#677788] text-lg">
                    Thank you for your business with us! You can immediately
                    start using the{' '}
                    <Link
                        href={`/marketplace/${
                            typeof slug === 'string' &&
                            slug.split('%20').join(' ')
                        }`}
                        className="text-blue-700 hover:opacity-80 cursor-pointer"
                    >
                        {typeof slug === 'string' &&
                            slug.split('%20').join(' ')}
                    </Link>{' '}
                    now. You will also receive an email confirmation with
                    details.
                </p>
                <button className="flex mx-auto text-white bg-gray-500 rounded-full px-10 py-4 font-semibold my-10 hover:shadow-lg hover:shadow-blue-600 transform transition duration-300 hover:-translate-y-2">
                    <Link
                        href={`/marketplace/${
                            typeof slug === 'string' &&
                            slug.split('%20').join(' ')
                        }`}
                    >
                        See API Documentation
                    </Link>
                </button>
            </div>

            <div>
                <h2 className="text-center text-black font-semibold text-3xl mt-4 mb-2">
                    Your API Key
                </h2>
                <p className="text-center w-[70%] mx-auto text-[#677788] text-lg">
                    Use this API key for each request. Please check docs for
                    more information.
                </p>
                <div className="w-[70%] mx-auto mt-4 mb-10">
                    <input
                        value={randomApiKey}
                        type="text"
                        name="apikey"
                        id="apikey"
                        readOnly
                        className="text-black bg-[#f8fafd] border-2 border-gray-300 px-4 py-3 w-2/3 focus:outline-none focus:border-2 transition duration-300 focus:border-blue-400"
                    />
                    <button
                        onClick={handleCopy}
                        className="border-t-2 border-b-2 border-r-2 border-gray-300 px-4 py-3 text-gray-400 hover:text-blue-300"
                    >
                        {copyText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;
