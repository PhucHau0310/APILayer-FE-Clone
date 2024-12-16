import {
    faList,
    faPhone,
    faSearch,
    faShapes,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const fakeCategories = [
    {
        title: 'AI/ML',
        number: 4,
    },
    {
        title: 'Automotive',
        number: 1,
    },
    {
        title: 'Blockchain',
        number: 1,
    },
    {
        title: 'Business',
        number: 9,
    },
    {
        title: 'Communication',
        number: 7,
    },
    {
        title: 'Conversion APIs',
        number: 1,
    },
    {
        title: 'Dev Tools',
        number: 51,
    },
    {
        title: 'E-commerce',
        number: 3,
    },
    {
        title: 'Finance',
        number: 14,
    },
    {
        title: 'Food',
        number: 1,
    },
];

const fakeItems = [
    {
        title: 'IPstack',
        totalReview: 10,
        starAvg: 4,
        sub: 'Locate and Identify Website Visitors by IP Address',
    },
    {
        title: 'Exchange Rates Data API',
        totalReview: 20,
        starAvg: 5,
        sub: 'Real-Time, Intraday & Historical Market Data API.',
    },
    {
        title: 'Currency Data API',
        totalReview: 30,
        starAvg: 1,
        sub: 'Reliable Exchange Rates & Currency Conversion for your Business.',
    },
    {
        title: 'IPapi',
        totalReview: 10,
        starAvg: 3,
        sub: 'Real-time Geolocation & Reverse IP Lookup REST API',
    },
    {
        title: 'Aviationstack',
        totalReview: 21,
        starAvg: 2,
        sub: 'Free, Real-time Flight Status & Global Aviation Data API',
    },
];

const Marketplace = () => {
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
                <div className="w-[50%] relative">
                    <input
                        type="text"
                        name="searchApi"
                        id="searchApi"
                        className="bg-transparent border border-[#e0e5f1] rounded-xl px-5 py-[5px] w-full text-[#1e2022] focus:outline-none focus:shadow-lg focus:shadow-blue-100"
                        placeholder="Search API..."
                    />

                    <FontAwesomeIcon
                        icon={faSearch}
                        size="1x"
                        color="white"
                        className="bg-[#37c625] absolute top-1/5 translate(-50%, 50%) right-0 px-5 py-[10px] rounded-tr-xl rounded-br-xl hover:shadow-sm cursor-pointer hover:shadow-[#37c625] transition-all"
                    />
                </div>

                <div className="flex flex-row items-center text-[#1e2022] gap-10">
                    <div className="flex flex-row items-center gap-2">
                        <span>Sort by</span>
                        <select
                            value=""
                            className="border border-[#e0e5f1] px-2 py-1.5 rounded-md focus:outline-none"
                        >
                            <option value="featured">Featured</option>
                            <option value="alphabetical">Alphabetical</option>
                            <option value="latest">Latest</option>
                        </select>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <span>View by</span>

                        <div className="flex flex-row items-center gap-4 bg-[#f5f8fd] p-1 rounded-md">
                            <FontAwesomeIcon
                                icon={faShapes}
                                size="lg"
                                color="#0052cc"
                                className="hover:bg-white p-2 cursor-pointer rounded-md"
                            />
                            <FontAwesomeIcon
                                icon={faList}
                                size="lg"
                                color="#677788"
                                className="hover:bg-white p-2 cursor-pointer rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-8 flex flex-row items-start gap-5">
                <div className="w-[28%] px-5 py-6 bg-[#f5f8fd] rounded-md">
                    <div>
                        <h2 className="text-[#1e2022] font-semibold text-xl">
                            Filter by Categories
                        </h2>
                        <div className="mt-4">
                            {fakeCategories.map((item) => {
                                return (
                                    <div
                                        key={item.title}
                                        className="flex flex-row items-center gap-2 text-[#677788] mb-2"
                                    >
                                        <div>
                                            <input
                                                id={item.title}
                                                type="checkbox"
                                                className="w-4 h-4"
                                            />
                                            <label
                                                htmlFor={item.title}
                                                className="ml-2"
                                            >
                                                {item.title}
                                            </label>
                                        </div>

                                        <span className="ml-auto">
                                            {item.number}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-[#1e2022] font-semibold text-xl">
                            Filter by Rating
                        </h2>
                        <div className="mt-4">
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    id="star-5"
                                    type="checkbox"
                                    className="w-4 h-4"
                                />
                                <label
                                    htmlFor="star-5"
                                    className="flex flex-row items-center gap-0.5"
                                >
                                    {Array(5)
                                        .fill(null)
                                        .map((star, idx) => {
                                            return (
                                                <FontAwesomeIcon
                                                    key={idx}
                                                    icon={faStar}
                                                    size="sm"
                                                    color="#ffc107"
                                                />
                                            );
                                        })}
                                </label>
                            </div>
                            <div className="flex flex-row items-center gap-2 mt-2">
                                <input
                                    id="star-4"
                                    type="checkbox"
                                    className="w-4 h-4"
                                />
                                <label
                                    htmlFor="star-4"
                                    className="flex flex-row items-center gap-0.5"
                                >
                                    {Array(4)
                                        .fill(null)
                                        .map((star, idx) => {
                                            return (
                                                <FontAwesomeIcon
                                                    key={idx}
                                                    icon={faStar}
                                                    size="sm"
                                                    color="#ffc107"
                                                />
                                            );
                                        })}
                                </label>
                            </div>
                            <div className="flex flex-row items-center gap-2 mt-2">
                                <input
                                    id="star-3"
                                    type="checkbox"
                                    className="w-4 h-4"
                                />
                                <label
                                    htmlFor="star-3"
                                    className="flex flex-row items-center gap-0.5"
                                >
                                    {Array(3)
                                        .fill(null)
                                        .map((star, idx) => {
                                            return (
                                                <FontAwesomeIcon
                                                    key={idx}
                                                    icon={faStar}
                                                    size="sm"
                                                    color="#ffc107"
                                                />
                                            );
                                        })}
                                </label>
                            </div>
                            <div className="flex flex-row items-center gap-2 mt-2">
                                <input
                                    id="star-2"
                                    type="checkbox"
                                    className="w-4 h-4"
                                />
                                <label
                                    htmlFor="star-2"
                                    className="flex flex-row items-center gap-0.5"
                                >
                                    {Array(2)
                                        .fill(null)
                                        .map((star, idx) => {
                                            return (
                                                <FontAwesomeIcon
                                                    key={idx}
                                                    icon={faStar}
                                                    size="sm"
                                                    color="#ffc107"
                                                />
                                            );
                                        })}
                                </label>
                            </div>
                            <div className="flex flex-row items-center gap-2 mt-2">
                                <input
                                    id="star-1"
                                    type="checkbox"
                                    className="w-4 h-4"
                                />
                                <label
                                    htmlFor="star-1"
                                    className="flex flex-row items-center gap-0.5"
                                >
                                    {Array(1)
                                        .fill(null)
                                        .map((star, idx) => {
                                            return (
                                                <FontAwesomeIcon
                                                    key={idx}
                                                    icon={faStar}
                                                    size="sm"
                                                    color="#ffc107"
                                                />
                                            );
                                        })}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[72%]">
                    <h2 className="text-[#0052cc] font-semibold text-xl mb-4">
                        All APIs (219)
                    </h2>

                    <div className="grid grid-cols-3 gap-4">
                        {fakeItems.map((item) => {
                            return (
                                <div
                                    key={item.title}
                                    className="bg-[#f5f8fd] mb-6 p-4 rounded-xl"
                                >
                                    <div className="flex justify-center mb-5">
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            size="lg"
                                            color="blue"
                                        />
                                    </div>
                                    <h3 className="text-[#1e2022] font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2.5">
                                        {Array(item.starAvg)
                                            .fill(null)
                                            .map((star, idx) => {
                                                return (
                                                    <FontAwesomeIcon
                                                        key={idx}
                                                        icon={faStar}
                                                        size="sm"
                                                        color="#ffc107"
                                                        className="mr-1"
                                                    />
                                                );
                                            })}
                                        <span className="text-[#677788] text-sm ml-1.5">
                                            ({item.totalReview})
                                        </span>
                                    </p>
                                    <p className="text-[#1e2022] text-base mt-3 h-24">
                                        {item.sub}
                                    </p>

                                    <button className="text-white bg-[#2390e5] mt-16 block mx-auto px-5 py-1.5 rounded-md hover:opacity-90">
                                        View API
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
