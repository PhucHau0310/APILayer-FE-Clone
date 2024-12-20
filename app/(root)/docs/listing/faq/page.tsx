import { faBook, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import SvgAccount from '@/public/img/abstract-shapes.svg';
import Link from 'next/link';

const FAQmenu = [
    {
        icon: faBook,
        title: 'Marketplace FAQ',
        desc: 'Search our marketplace FAQ for answers to anything you might ask. About free API services, build API, Upgrade my plane, Latest offer for API, Read more',
        link: '/docs/article/marketplace-faq',
    },
    {
        icon: faBook,
        title: 'Provider FAQ',
        desc: 'Search our Provider FAQ for answers or queries to anything you might ask. About free API services, build API, Upgrade my plane, Latest offer for API, Read more',
        link: '/docs/article/provider-faq',
    },
];

const FAQ = () => {
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

                <span>FAQs</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                <h1 className="text-[#1e2022] font-semibold text-3xl">FAQs</h1>

                <div>
                    {FAQmenu.map((item) => {
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

export default FAQ;
