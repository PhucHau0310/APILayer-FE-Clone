'use client';

import React, { useState, useEffect } from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
    Box,
} from '@mui/material';
import { Add as AddIcon, Close as CloseIcon } from '@mui/icons-material';
import { HubConnectionBuilder } from '@microsoft/signalr';
import useUser from '@/hooks/useUser';
import useLoading from '@/hooks/useLoading';
import useAlert from '@/hooks/useAlert';
import Alert from '@/components/items/Alert';
import {Notification} from '@/hooks/UseNoti';

interface NotificationFormData {
    message: string;
    recipient: string;
    // recipients: string[];
}

const Notifications = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [connection, setConnection] = useState<signalR.HubConnection | null>(
        null
    );
    const [open, setOpen] = useState(false);
    const [newNotification, setNewNotification] =
        useState<NotificationFormData>({
            message: '',
            recipient: '',
        });
    // const [newNotification, setNewNotification] =
    //     useState<NotificationFormData>({
    //         message: '',
    //         recipients: [], // Mặc định là mảng rỗng
    //     });

    const { data: user } = useUser();
    const [loading, startLoading, stopLoading] = useLoading();
    const { alert, showAlert, hideAlert } = useAlert();

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl(
                `${process.env.NEXT_PUBLIC_API_BE}/notificationhub`
            )
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);

        newConnection
            .start()
            .then(() => {
                console.log('Connected to SignalR Hub');
                newConnection.on(
                    'ReceiveNotification',
                    (notification: Notification) => {
                        setNotifications((prev) => [...prev, notification]);
                    }
                );
            })
            .catch((err) =>
                console.error('Failed to connect to SignalR Hub:', err)
            );

        return () => {
            newConnection.stop();
        };
    }, []);

    // Fetch initial notifications
    useEffect(() => {
        const fetchNotifications = async () => {
            if (!user?.username) return;

            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_BE}/api/Notification/all`
                );
                if (response.ok) {
                    const data = await response.json();
                    // setNotifications(data);

                    console.log(data);
                    const fetchedNotifications = data.$values || [];
                    setNotifications(fetchedNotifications);
                } else {
                    console.error(
                        'Failed to fetch notifications:',
                        response.statusText
                    );
                    setNotifications([]); // Fallback to empty array
                }
            } catch (error) {
                console.error('Failed to fetch notifications:', error);
            }
        };

        fetchNotifications();
    }, [user?.username]);

    const handleClickOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
        setNewNotification({ message: '', recipient: '' });
        // setNewNotification({ message: '', recipients: [] });
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('vi-VN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!user?.username) return;

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BE}/api/Notification/send`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        sender: user.username,
                        recipient: newNotification.recipient,
                        message: newNotification.message,
                    }),
                    // body: JSON.stringify({
                    //     sender: user.username,
                    //     recipients: newNotification.recipients,
                    //     message: newNotification.message,
                    // }),
                }
            );

            if (response.ok) {
                const data = await response.json();
                setNotifications((prev) => [...prev, data]);
                handleClose();
            }
        } catch (error) {
            console.error('Failed to send notification:', error);
        }
    };

    const handleMarkAsRead = async (id: number) => {
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
            }
        } catch (error) {
            console.error('Failed to mark notification as read:', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewNotification((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="h-[700px]">
            <Alert alert={alert} onClose={hideAlert} />
            <Box sx={{ p: 4 }}>
                {/* Header with Add button */}
                <Grid container spacing={2} alignItems="center" sx={{ mb: 4 }}>
                    <Grid item xs>
                        <Typography variant="h4" component="h1">
                            Notifications
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={handleClickOpen}
                        >
                            Add Notification
                        </Button>
                    </Grid>
                </Grid>

                {/* Notifications Grid */}
                <Grid container spacing={2}>
                    {notifications.map((notification) => (
                        <Grid item xs={12} sm={6} md={4} key={notification.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    bgcolor: notification.isRead
                                        ? 'background.paper'
                                        : 'primary.light',
                                    '&:hover': {
                                        boxShadow: 3,
                                        cursor: 'pointer',
                                    },
                                }}
                                onClick={() =>
                                    !notification.isRead &&
                                    handleMarkAsRead(notification.id)
                                }
                            >
                                <CardContent>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 2,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {notification.message}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                        >
                                            {formatDate(notification.createdAt)}
                                        </Typography>
                                        {!notification.isRead && (
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    px: 1,
                                                    py: 0.5,
                                                    bgcolor: 'primary.main',
                                                    color: 'white',
                                                    borderRadius: '12px',
                                                }}
                                            >
                                                New
                                            </Typography>
                                        )}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Create Notification Dialog */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth="sm"
                    fullWidth
                >
                    <DialogTitle>
                        Create New Notification
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="message"
                                label="Message"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={newNotification.message}
                                onChange={handleInputChange}
                                required
                            />
                            <TextField
                                margin="dense"
                                name="recipient"
                                label="Recipient Username"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={newNotification.recipient}
                                onChange={handleInputChange}
                                required
                            />
                            {/* <TextField
                                margin="dense"
                                name="recipients"
                                label="Recipients (comma-separated usernames)"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={newNotification.recipients.join(',')} // Hiển thị danh sách dạng chuỗi
                                onChange={(e) =>
                                    setNewNotification((prev) => ({
                                        ...prev,
                                        recipients: e.target.value
                                            .split(',')
                                            .map((r) => r.trim()), // Tách danh sách bằng dấu phẩy
                                    }))
                                }
                                required
                            /> */}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" variant="contained">
                                {loading ? 'Creating...' : 'Create'}
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </Box>
        </div>
    );
};

export default Notifications;
