import {
    faBan,
    faCircleUp,
    faClock,
    faCloudDownload,
    faGift,
    faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const subsMenu = [
    {
        icon: faBan,
        title: 'Cancelling a subscription',
        desc: 'You may cancel your subscription to an API anytime. Your paid plan subscription will still be valid until the end of your subscription term.',
        link: '/article/cancelling-a-subscription',
    },
    {
        icon: faCircleUp,
        title: 'Upgrading a subscription',
        desc: 'Learn how to manage your subscriptions with one click. Easy upgrade based on your need. Simply select the plan you would like to change to.',
        link: '/article/upgrading-a-subscription',
    },
    {
        icon: faGift,
        title: 'Subscribing to an API',
        desc: 'How to subscribe to a plan. Choose the best subscription plan that matches with your application needs and start using your API immediately.',
        link: '/article/subscribing-to-an-api',
    },
    {
        icon: faCloudDownload,
        title: 'Downgrading a subscription',
        desc: 'Learn how to manage your subscriptions with one click. Easy downgrade based on your need. Simply select the plan you would like to change to.',
        link: '/article/downgrading-a-subscription',
    },
    {
        icon: faClock,
        title: 'Rate limits',
        desc: 'Rate limits define your allowance for the number of API requests in a given time period. Learn how to manage your rate limits on APILayer.',
        link: '/article/rate-limits',
    },
];

const Subscription = () => {
    return (
        <div className="mt-10 mb-20">
            <div className="text-[#677788] flex flex-row items-center gap-2 mt-10 max-w-screen-lg mx-auto">
                <Link
                    href="/"
                    className="hover:opacity-90 flex flex-row items-center gap-2"
                >
                    <FontAwesomeIcon icon={faHome} size="1x" color="blue" />
                    <span className="text-blue-500">Home</span>
                </Link>

                <span>/</span>
                <Link
                    href="/docs"
                    className="hover:opacity-90 flex flex-row items-center gap-2"
                >
                    <span className="text-blue-500">Docs</span>
                </Link>
                <span>/</span>

                <span>Introduction</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                <h1 className="text-[#1e2022] font-semibold text-3xl">
                    Introduction
                </h1>

                <div>
                    {subsMenu.map((item) => {
                        return (
                            <Link
                                href={item.link}
                                key={item.title}
                                className="bg-white flex transition-all duration-300 shadow-md rounded-md p-6 mt-8 hover:shadow-lg hover:shadow-blue-600"
                            >
                                <div className="flex flex-row items-center gap-4 mt-8">
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        size="2x"
                                        color="#677788"
                                    />
                                    <div>
                                        <p className="text-[#1e2022] font-semibold hover:opacity-90">
                                            {item.title}
                                        </p>
                                        <p className="text-[#677788] mt-2">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Subscription;
