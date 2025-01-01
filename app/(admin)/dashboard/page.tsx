'use client';

import Datepicker from '@/components/items/admin/Datepicker';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import {
    faCode,
    faMoneyCheck,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PieChart } from '@mui/x-charts/PieChart';

const menu = [
    {
        name: 'Total APIs',
        icon: faCode,
        value: 10,
    },
    {
        name: 'Payments',
        icon: faMoneyCheck,
        value: 12,
    },
    {
        name: 'Subscriptions',
        icon: faProductHunt,
        value: 40,
    },
    {
        name: 'Active Now',
        icon: faCode,
        value: 10,
    },
    {
        name: 'Members',
        icon: faUsers,
        value: 5,
    },
    {
        name: 'Total APIs',
        icon: faCode,
        value: 30,
    },
];

const Dashboard = () => {
    return (
        <div className="pb-16">
            <div className="flex flex-row items-center justify-between gap-4">
                {menu.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#111C44] p-4 rounded-lg shadow-md w-1/5 hover:shadow-lg hover:shadow-slate-700 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="flex flex-row items-center gap-3">
                            <FontAwesomeIcon
                                icon={item.icon}
                                size="lg"
                                className="bg-[#1B254B] p-3 rounded-full"
                            />
                            <div>
                                <p className="text-[#A3AED0] text-base">
                                    {item.name}
                                </p>
                                <p className="text-white font-semibold text-lg">
                                    {item.name === 'Payments'
                                        ? `${item.value.toLocaleString(
                                              'vi-VN'
                                          )} đ`
                                        : item.value}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-row items-start justify-between gap-4 mt-8">
                <div className="bg-[#111C44] px-4 py-16 rounded-lg shadow-md mt-4 w-[40%]">
                    <h1 className="text-white font-semibold text-lg mb-6 text-center ">
                        Top APIs Subscription
                    </h1>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 2, value: 20, label: 'series C' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                </div>

                <Datepicker />

                <div className="bg-[#111C44] px-4 py-4 rounded-lg shadow-md mt-4 w-[30%]">
                    <div className="flex flex-row items-center gap-4 mb-4">
                        <input
                            type="checkbox"
                            name="tasks"
                            id="tasks"
                            className="w-4 h-4"
                        />
                        <label
                            htmlFor="tasks"
                            className="font-semibold text-xl"
                        >
                            Tasks
                        </label>
                    </div>
                    <div>
                        {[
                            'Finance',
                            'Dev Tools',
                            'E-commerce',
                            'Geolocation',
                            'Sports',
                            'Web Tool APIs',
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-center gap-4 mb-2"
                            >
                                <input
                                    type="checkbox"
                                    name={item}
                                    id={item}
                                    className="w-4 h-4"
                                />
                                <label
                                    htmlFor={item}
                                    className="font-semibold text-lg"
                                >
                                    {item}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
