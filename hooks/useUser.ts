import React from 'react';

interface User {
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
                        `https://localhost:7036/api/User/get-user-by-name?username=${storedUsername}`
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
