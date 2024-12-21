import {
    faEnvelope,
    faHome,
    faMoneyCheck,
    faSearch,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import SvgAccount from '@/public/img/abstract-shapes.svg';
import Link from 'next/link';

const accountMenu = [
    {
        icon: faMoneyCheck,
        title: 'Purchase history',
        desc: 'Here you can download your invoices and see your purchase history',
        link: '/docs/article/purchase-history',
    },
    {
        icon: faUserShield,
        title: 'Managing Passwords',
        desc: 'Security is of paramount importance in APILayer. Your passwords are stored as a SHA256 hash, which is not reversible.',
        link: '/docs/article/managing-passwords',
    },
    {
        icon: faEnvelope,
        title: 'Communication Preferences',
        desc: 'We respect your privacy and personal preferences. Tell us how you wish to be contacted.',
        link: '/docs/article/communication-preferences',
    },
    {
        icon: faUserShield,
        title: 'Managing API Keys',
        desc: 'API key is used to authenticate requests and essential to use APIs through APILayer. Learn how to manage your API keys and authentication.',
        link: '/docs/article/managing-api-keys',
    },
    {
        icon: faMoneyCheck,
        title: 'Managing payment methods',
        desc: 'Manage your payment methods. You can add / remove credit cards easily from this screen. You can also view your existing invoices here.',
        link: '/docs/article/managing-payment-methods',
    },
];

const Account = () => {
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

                <span>Account</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                <h1 className="text-[#1e2022] font-semibold text-3xl">
                    Account
                </h1>

                <div>
                    {accountMenu.map((item) => {
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

export default Account;
