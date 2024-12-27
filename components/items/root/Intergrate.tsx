'use client';

import { faScreenpal, faSketch } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import CountUp from 'react-countup';

const fakeData = [
    {
        title: 'Developers',
        subs: 4,
        character: 'M',
    },
    {
        title: 'APIs in the Hub',
        subs: 40,
        character: 'K',
    },
    {
        title: 'API calls per month',
        subs: 5,
        character: 'B',
    },
];

const Intergrate = () => {
    const [showText, setShowText] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(-1);
    const [startCount, setStartCount] = React.useState<boolean[]>([]);

    const numbersRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShowText(true); // Hiển thị tiêu đề khi nó nằm trong khung nhìn
                    }
                });
            },
            { threshold: 0.5 } // Kích hoạt khi 50% phần tử nằm trong khung nhìn
        );

        if (numbersRef.current) {
            observer.observe(numbersRef.current);
        }

        return () => {
            if (numbersRef.current) {
                observer.unobserve(numbersRef.current);
            }
        };
    }, []);

    React.useEffect(() => {
        if (showText) {
            let index = 0;
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    if (prevIndex < fakeData.length - 1) {
                        // Kích hoạt CountUp khi hiển thị
                        setStartCount((prevState) => {
                            const newState = [...prevState];
                            newState[index] = true;
                            return newState;
                        });
                        index++;
                        return prevIndex + 1;
                    } else {
                        clearInterval(interval); // Dừng khi tất cả khối được hiển thị
                        return prevIndex;
                    }
                });
            }, 300);

            return () => clearInterval(interval);
        }
    }, [showText]);
    return (
        <div className="bg-[#007bff] absolute top-0 left-0 right-0 pb-5 rounded-br-lg rounded-bl-lg">
            <div className="relative pt-60 pb-64 text-white font-medium text-7xl flex flex-col items-center justify-center">
                <span>Discover.</span>
                <span className="text-[#27344a]">Intergrate.</span>
                <span>Build.</span>

                <Link
                    href={'/marketplace'}
                    className="bg-[#27344a] px-6 py-2 mt-4 rounded-lg hover:bg-white hover:text-[#27344a] transition-all"
                >
                    <span className="flex items-center font-normal text-base">
                        Browse API Marketplace
                        <FontAwesomeIcon
                            icon={faAngleRight}
                            size="1x"
                            className="ml-2"
                            color="#00c900"
                        />
                    </span>
                </Link>

                <FontAwesomeIcon
                    icon={faScreenpal}
                    size="1x"
                    color="#23344c"
                    className="p-2 bg-white rounded-lg absolute top-24 left-12"
                />

                <FontAwesomeIcon
                    icon={faPhone}
                    size="1x"
                    color="#23344c"
                    className="p-2 bg-white rounded-lg absolute top-[300px] left-48"
                />

                <FontAwesomeIcon
                    icon={faSketch}
                    size="1x"
                    color="#23344c"
                    className="p-2 bg-white rounded-lg absolute top-[520px] left-12"
                />

                <FontAwesomeIcon
                    icon={faPhone}
                    size="1x"
                    color="#23344c"
                    className="p-2 bg-white rounded-lg absolute top-24 right-12"
                />

                <FontAwesomeIcon
                    icon={faSketch}
                    size="1x"
                    color="#23344c"
                    className="p-2 bg-white rounded-lg absolute top-[300px] right-48"
                />

                <FontAwesomeIcon
                    icon={faScreenpal}
                    size="1x"
                    color="#23344c"
                    className="p-2 bg-white rounded-lg absolute top-[520px] right-12"
                />
            </div>

            <div className="">
                <div
                    ref={numbersRef}
                    className={`max-w-screen-xl mx-auto transition-opacity duration-300 ${
                        showText ? 'fade-in' : 'opacity-0'
                    }`}
                >
                    <span className="border border-white px-4 py-1 rounded-md">
                        Numbers
                    </span>
                    <h2 className="mt-3 font-medium text-5xl">
                        <p>Leading Engineering Teams</p>
                        <p>
                            Rely on{' '}
                            <span className="text-[#27344a]">APILayer</span>
                        </p>
                    </h2>
                </div>

                <div
                    className={`flex flex-row justify-between gap-4 w-[97%] mx-auto mt-6`}
                >
                    {fakeData.map((item, index) => {
                        return (
                            <div
                                key={item.title}
                                className={`bg-white w-[33.33%] rounded-md h-64 px-4 pb-3 flex flex-col justify-end text-[#27344a] transition-opacity duration-300 ${
                                    currentIndex >= index
                                        ? 'fade-in'
                                        : 'opacity-0'
                                }`}
                            >
                                <h3 className="text-8xl  font-semibold">
                                    {/* {item.subs}{' '} */}
                                    <CountUp
                                        end={Number(item.subs)}
                                        duration={5}
                                        separator=","
                                    />
                                    {/* {startCount[index] ? (
                                        <CountUp
                                            end={Number(item.subs)}
                                            duration={2}
                                            separator=","
                                        />
                                    ) : (
                                        0
                                    )} */}
                                    {item.character}
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        color="#007bff"
                                    />
                                </h3>
                                <h4 className="text-xl">{item.title}</h4>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Intergrate;
