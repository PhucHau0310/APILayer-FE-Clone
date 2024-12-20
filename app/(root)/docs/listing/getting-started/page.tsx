import {
    faHandsHoldingCircle,
    faHome,
    faTruckFast,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const introMenu = [
    {
        icon: faHandsHoldingCircle,
        title: 'GDPR Compliance',
        desc: 'Declaration of our organization to meeting and upholding the principles of the GDPR.',
        link: '/docs/article/gdpr-compliance',
    },
    {
        icon: faTruckFast,
        title: 'Getting Started',
        desc: 'This is a step-by-step tutorial for getting you familiar with APILayer Marketplace. Learn how to use it and start integrating APIs to your apps.',
        link: '/docs/article/getting-started',
    },
];

const GettingStarted = () => {
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
                    {introMenu.map((item) => {
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

export default GettingStarted;
