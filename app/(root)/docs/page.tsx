import Image from 'next/image';
import Link from 'next/link';
import StudyImg from '@/public/img/jpg/study.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faCameraRetro,
    faMoneyCheck,
    faSearch,
    faUserShield,
    faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';

const menuDocs = [
    {
        icon: faUserShield,
        title: 'Account',
        desc: 'Manage passwords, communication preferences, API keys and payment methods.',
        articleNum: 5,
        link: '/docs/listing/account',
    },
    {
        icon: faBook,
        title: 'FAQs',
        desc: 'Frequently Asked Questions.',
        articleNum: 2,
        link: '/docs/listing/faq',
    },
    {
        icon: faCameraRetro,
        title: 'Introduction',
        desc: 'Everything you need to know to start engaging with APILayer Marketplace.',
        articleNum: 2,
        link: '/docs/listing/getting-started',
    },
    {
        icon: faMoneyCheck,
        title: 'Subscription',
        desc: 'Learn how to subscribe to an API, manage your subscription plans, monitor your rate limits.',
        articleNum: 5,
        link: '/docs/listing/subscriptions',
    },
    {
        icon: faWandMagicSparkles,
        title: 'Tips and Tricks',
        desc: 'Useful tips and tricks in order to excel our services.',
        articleNum: 2,
        link: '/docs/listing/tips-and-tricks',
    },
];

const Docs = () => {
    return (
        <div className="mt-12 mb-44">
            <div className="py-10 bg-[#f5f8fd] mb-20">
                <div className="flex flex-row items-center justify-between max-w-screen-xl mx-auto">
                    <div>
                        <h1 className="text-[#1e2022] text-4xl font-semibold">
                            How can we help?
                        </h1>
                        <div className="relative mt-8 mb-4 w-[500px]">
                            <FontAwesomeIcon
                                icon={faSearch}
                                size="1x"
                                color="#677788"
                                className="absolute top-1/2 left-3 transform -translate-y-1/2"
                            />
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search the knowledge base..."
                                className="w-full rounded-md text-black placeholder:text-[#677788] bg-white border border-[#677788] px-9 py-2 active:outline-none focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                            />
                        </div>
                        <p className="text-[#677788]">
                            Popular help topics:{' '}
                            <Link
                                href={'/'}
                                className="text-blue-700 font-semibold hover:opacity-90"
                            >
                                upgrade
                            </Link>
                            ,{' '}
                            <Link
                                href={'/'}
                                className="text-blue-700 font-semibold hover:opacity-90"
                            >
                                subscription
                            </Link>
                            ,{' '}
                            <Link
                                href={'/'}
                                className="text-blue-700 font-semibold hover:opacity-90"
                            >
                                api key
                            </Link>
                            ,{' '}
                            <Link
                                href={'/'}
                                className="text-blue-700 font-semibold hover:opacity-90"
                            >
                                limit
                            </Link>
                        </p>
                    </div>

                    <Image
                        src={StudyImg}
                        alt="study"
                        width={410}
                        height={410}
                        className="rounded-md"
                    />
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuDocs.map((item) => {
                    return (
                        <Link
                            href={item.link}
                            key={item.title}
                            className="bg-white rounded-md p-8 shadow-md flex flex-row items-start gap-5 mb-6 hover:shadow-lg hover:shadow-blue-700 cursor-pointer transition-all duration-300"
                        >
                            <FontAwesomeIcon
                                icon={item.icon}
                                size="2x"
                                color="blue"
                            />

                            <div>
                                <h2 className="text-[#1e2022] font-semibold text-xl">
                                    {item.title}
                                </h2>
                                <h3 className="text-[#677788] text-base mt-2 mb-4">
                                    {item.desc}
                                </h3>
                                <p className="text-[#1e2022]">
                                    {item.articleNum} articles in this
                                    collection
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Docs;
