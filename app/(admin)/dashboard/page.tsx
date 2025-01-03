'use client';

import Datepicker from '@/components/items/admin/Datepicker';
import useApis from '@/hooks/useApis';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import {
    faCode,
    faMoneyCheck,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react';

interface Subscription {
    id: number;
    apiId: number;
    userId: number;
    subscriptionType: string;
}

const Dashboard = () => {
    const { data: apis, loading, error } = useApis();
    const [subscriptions, setSubscriptions] = React.useState<Subscription[]>(
        []
    );
    const [users, setUsers] = React.useState<any[]>([]);
    const [payments, setPayments] = React.useState<any[]>([]);

    React.useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch(
                `https://apilayer-hvg5bbfkf5hteqc7.southeastasia-01.azurewebsites.net/api/User/get-users`
            );

            if (res.ok) {
                const data = await res.json();
                // console.log(data['data']['$values']);
                setUsers(data['data']['$values']);
            } else {
                console.log('Failed');
            }
        };
        fetchUsers();
    }, []);

    React.useEffect(() => {
        const fetchApiSubs = async () => {
            const res = await fetch(
                `https://apilayer-hvg5bbfkf5hteqc7.southeastasia-01.azurewebsites.net/api/Subscription/user`
            );

            if (res.ok) {
                const data = await res.json();
                // console.log({ data });
                setSubscriptions(data['$values']);
            } else {
                console.log('Failed');
            }
        };
        fetchApiSubs();
    }, []);

    React.useEffect(() => {
        const fetchPayments = async () => {
            const res = await fetch(
                `https://apilayer-hvg5bbfkf5hteqc7.southeastasia-01.azurewebsites.net/api/Payment/payments`
            );

            if (res.ok) {
                const data = await res.json();
                console.log(data['data']['$values']);
                setPayments(data['data']['$values']);
            } else {
                console.log('Failed');
            }
        };
        fetchPayments();
    }, []);

    const apiSubscriptionsCount = subscriptions.reduce(
        (acc: any, sub: Subscription) => {
            acc[sub.apiId] = (acc[sub.apiId] || 0) + 1;
            return acc;
        },
        {}
    );

    const topApis = Object.entries(apiSubscriptionsCount)
        .sort((a, b) => Number(b[1]) - Number(a[1]))
        .slice(0, 3)
        .map(([apiId, count]) => {
            const api = apis?.find((api) => api.id === parseInt(apiId));
            return { name: api ? api.name : 'Unknown', count: Number(count) };
        });

    const totalPayments = payments.reduce((acc, payment) => {
        acc += payment.amount;
        return acc;
    }, 0);

    const menu = [
        {
            name: 'Total APIs',
            icon: faCode,
            value: apis?.length || 0,
        },
        {
            name: 'Payments',
            icon: faMoneyCheck,
            value: totalPayments,
        },
        {
            name: 'Subscriptions',
            icon: faProductHunt,
            value: subscriptions?.length || 0,
        },
        {
            name: 'Active Now',
            icon: faCode,
            value: users.length || 0,
        },
        {
            name: 'Members',
            icon: faUsers,
            value: users.length || 0,
        },
        {
            name: 'Total APIs',
            icon: faCode,
            value: apis?.length || 0,
        },
    ];

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
                        Top 3 APIs Subscription
                    </h1>
                    <PieChart
                        colors={['#7551FF', '#6AD2FF', '#39B8FF']}
                        series={[
                            {
                                data: topApis.map((api, index) => ({
                                    id: index,
                                    value: api.count,
                                    label: api.name,
                                })),
                                highlightScope: {
                                    fade: 'global',
                                    highlight: 'item',
                                },
                                faded: {
                                    innerRadius: 30,
                                    additionalRadius: -30,
                                    color: 'gray',
                                },
                                // valueFormatter,
                            },
                        ]}
                        width={400}
                        height={200}
                        slotProps={{
                            legend: {
                                labelStyle: {
                                    fill: 'white',
                                    fontFamily: 'bold',
                                },
                            },
                        }}
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
