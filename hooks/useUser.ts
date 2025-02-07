'use client';

import React from 'react';

export interface User {
    username: string;
    email: string;
    role: string;
    avatar: string;
    hashedPassword: string;
    createdAt: string;
    id: number;
    isActive: boolean;
    isEmailConfirmed: boolean;
    coolInfoMySelft: string;
    userSubscriptions: {
        $values: Subscription[];
    };
}

interface Subscription {
    userId: number;
    apiId: number;
    endDate: string;
    id: number;
    paymentStatus: string;
    startDate: string;
    subscriptionType: string;
}

const useUser = () => {
    const [data, setData] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchUserData = async () => {
            const storedUsername = localStorage.getItem('username');

            if (storedUsername) {
                try {
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_API_BE}/api/User/get-user-by-name?username=${storedUsername}`
                    );

                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }

                    const result = await response.json();
                    setData(result.data);
                } catch (err: any) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    return { data, loading, error };
};

export default useUser;
