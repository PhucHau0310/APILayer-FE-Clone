'use client';

import { useState, useEffect } from 'react';
import useUser from '@/hooks/useUser';

export interface Notification {
    id: number;
    message: string;
    isRead: boolean;
    createdAt: string;
    senderId: number;
    receiverId: number;
    $values?: Notification[];
}

export default function useUserNotifications() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const { data: user } = useUser();

    const fetchNotifications = async () => {
        if (!user?.username) return;

        setLoading(true);
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BE}/api/Notification/${user.username}`
            );
            if (response.ok) {
                const data = await response.json();
                const fetchedNotifications = data.$values || [];
                setNotifications(fetchedNotifications);
            } else {
                throw new Error('Failed to fetch notifications');
            }
        } catch (err) {
            setError(err as Error);
            setNotifications([]);
        } finally {
            setLoading(false);
        }
    };

    const markAsRead = async (id: number) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BE}/api/Notification/${id}/read`,
                {
                    method: 'PUT',
                }
            );

            if (response.ok) {
                setNotifications((prev) =>
                    prev.map((notif) =>
                        notif.id === id ? { ...notif, isRead: true } : notif
                    )
                );
                return true;
            }
            return false;
        } catch (error) {
            console.error('Failed to mark notification as read:', error);
            return false;
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, [user?.username]);

    return {
        notifications,
        loading,
        error,
        markAsRead,
        refetch: fetchNotifications,
    };
}
