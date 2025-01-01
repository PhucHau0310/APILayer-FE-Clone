'use client';

import React, { useState } from 'react';
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
} from '@mui/material';
import { Add as AddIcon, Close as CloseIcon } from '@mui/icons-material';

// Define interfaces for our types
interface Notification {
    id: number;
    message: string;
    isRead: boolean;
    createdAt: string;
    senderId: number;
    receiverId: number;
}

interface NotificationFormData {
    message: string;
    receiverId: string;
}

const Notifications = () => {
    // State for notifications with proper typing
    const [notifications, setNotifications] = useState<Notification[]>([
        {
            id: 1,
            message: 'New message from John',
            isRead: false,
            createdAt: '2025-01-01T15:09:27',
            senderId: 1,
            receiverId: 2,
        },
    ]);

    // State for dialog with proper typing
    const [open, setOpen] = useState(false);
    const [newNotification, setNewNotification] =
        useState<NotificationFormData>({
            message: '',
            receiverId: '',
        });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setNewNotification({ message: '', receiverId: '' });
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return (
            date.toISOString().split('T')[0] +
            ' ' +
            date.toTimeString().split(' ')[0]
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create new notification with proper type conversion
        const notification: Notification = {
            id: notifications.length + 1,
            message: newNotification.message,
            isRead: false,
            createdAt: new Date().toISOString(),
            senderId: 1, // Assuming current user id is 1
            receiverId: parseInt(newNotification.receiverId, 10), // Convert string to number
        };

        setNotifications([...notifications, notification]);
        handleClose();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewNotification((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="p-4">
            {/* Header with Add button */}
            <Grid container spacing={2} alignItems="center" className="mb-4">
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
                    <Grid item xs={12} key={notification.id}>
                        <Card
                            className={!notification.isRead ? 'bg-blue-50' : ''}
                        >
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs>
                                        <Typography variant="body1">
                                            {notification.message}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            color="textSecondary"
                                        >
                                            {formatDate(notification.createdAt)}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        {!notification.isRead && (
                                            <Typography
                                                variant="caption"
                                                className="px-2 py-1 bg-blue-500 text-white rounded-full"
                                            >
                                                New
                                            </Typography>
                                        )}
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Create Notification Dialog */}
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
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
                            name="receiverId"
                            label="Receiver ID"
                            type="number"
                            fullWidth
                            variant="outlined"
                            value={newNotification.receiverId}
                            onChange={handleInputChange}
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit" variant="contained">
                            Create
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

export default Notifications;
