import Image from 'next/image';
import LightImg from '@/public/img/jpg/light.jpg';
import Link from 'next/link';

const About = () => {
    return (
        <div>
            <div className="text-center py-36">
                <h1 className="text-[#1e2022] text-4xl font-semibold">
                    Why choose APILayer?
                </h1>
                <p className="text-[#677788] text-base mt-2">
                    APILayer vs other API marketplaces.
                </p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-row items-center justify-between mb-36">
                <div>
                    <h2 className="text-[#0052CC] text-3xl font-semibold">
                        Curated
                    </h2>
                    <p className="text-[#677788] text-lg mt-2 mb-10">
                        All APIs are thoroughly reviewed before they are listed.
                    </p>
                    <h2 className="text-[#0052CC] text-3xl font-semibold">
                        Start Free
                    </h2>
                    <p className="text-[#677788] text-lg mt-2 mb-10">
                        Free plans with no credit card required.
                    </p>
                    <h2 className="text-[#0052CC] text-3xl font-semibold">
                        Strict Uptime
                    </h2>
                    <p className="text-[#677788] text-lg mt-2 mb-10">
                        On-demand SLA available.
                    </p>
                </div>

                <Image
                    src={LightImg}
                    alt="light"
                    width={500}
                    height={500}
                    className="rounded-md"
                />
            </div>

            <div className="text-center mb-20">
                <h2 className="text-[#1e2022] text-3xl font-semibold">
                    Why not take a look at our API catalog ?
                </h2>
                <p className="text-[#677788] text-base mt-2">
                    Maybe you'll find an API you like {';)'}
                </p>

                <Link
                    href={'/'}
                    className="bg-[#0052CC] inline-flex rounded-md px-6 py-4 mt-8 font-semibold shadow-md hover:shadow-lg hover:shadow-blue-600 transform transition duration-300 hover:-translate-y-2"
                >
                    Explore
                </Link>
            </div>
        </div>
    );
};

export default About;
