import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Purchases = () => {
    return (
        <div className="mt-20 text-[#1e2022]">
            <h1 className="text-4xl text-center font-semibold mb-16">
                Purchase History
            </h1>

            <div className="rounded-md shadow-md max-w-5xl mx-auto text-center mb-10">
                <p className="py-4">
                    You don't have any previous purchases yet. Would you like to
                    browse the{' '}
                    <Link
                        href={'/'}
                        className="text-blue-500 hover:text-black transition-all"
                    >
                        API catalog?
                    </Link>
                </p>
            </div>
            <Link
                href={'/subscriptions'}
                className="flex flex-row items-center justify-center gap-3 mb-20"
            >
                <FontAwesomeIcon
                    icon={faAngleRight}
                    size="1x"
                    color="blue"
                    className="px-2 py-1.5 bg-blue-300 rounded-full hover:opacity-90"
                />

                <span className="text-blue-500 hover:opacity-90">
                    Manage Subscriptions
                </span>
            </Link>
        </div>
    );
};

export default Purchases;
