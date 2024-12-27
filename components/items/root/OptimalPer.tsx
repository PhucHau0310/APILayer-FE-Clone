'use client';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Lottie from 'react-lottie-player';
import AnimationCar from '@/public/img/AnimationCar.json';
import AnimationAPI from '@/public/img/AnimationAPI.json';

const OptimalPer = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-row items-center justify-between">
                    <div>
                        <span className="border border-[#bad1df] px-4 py-1 rounded-md text-[#2480fc]">
                            Numbers
                        </span>
                        <h2 className="mt-3 font-medium text-5xl text-[#27344a] w-[60%]">
                            <p>Natively Integrated for Optimal Performance</p>
                        </h2>

                        <h3 className="text-[#6c7a92] mt-3 w-[60%]">
                            APILayer APIs are feature-rich and easy to
                            integrate, offering low latency for an enhanced
                            developer experience.
                        </h3>
                    </div>

                    <Link
                        href={'/marketplace'}
                        className="px-4 py-2 bg-white text-[#27344a] rounded-md hover:bg-[#0052cc] hover:text-white transition-all shadow-md"
                    >
                        Browse all APIs{' '}
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            size="1x"
                            className="ml-2 hover:text-white"
                            color="#0052cc"
                        />
                    </Link>
                </div>

                <div className="bg-gray-200 mt-10 flex flex-row items-center justify-between rounded-md shadow-md">
                    <Lottie
                        loop
                        animationData={AnimationCar}
                        play
                        style={{ width: 300, height: 300 }}
                    />

                    <Link
                        href={'/marketplace'}
                        className="px-4 py-2 bg-white text-[#27344a] rounded-md hover:bg-[#0052cc] hover:text-white transition-all shadow-md"
                    >
                        Browse all APIs{' '}
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            size="1x"
                            className="ml-2 hover:text-white"
                            color="#0052cc"
                        />
                    </Link>

                    <Lottie
                        loop
                        animationData={AnimationAPI}
                        play
                        style={{ width: 300, height: 300 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default OptimalPer;
