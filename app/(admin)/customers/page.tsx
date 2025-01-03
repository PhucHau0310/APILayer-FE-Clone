'use client';

import React from 'react';
import { format } from 'date-fns';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    Avatar,
    Chip,
    Typography,
    Box,
} from '@mui/material';

const Customers = () => {
    const [users, setUsers] = React.useState<any>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(
                    'https://apilayer-hvg5bbfkf5hteqc7.southeastasia-01.azurewebsites.net/api/User/get-users'
                );
                if (res.ok) {
                    const data = await res.json();
                    setUsers(data['data']['$values']);
                } else {
                    console.error('Failed to fetch users');
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const formatDate = (dateString: string) => {
        return dateString
            ? format(new Date(dateString), 'dd/MM/yyyy HH:mm')
            : '-';
    };

    console.log(users);

    return (
        <Paper elevation={3} sx={{ width: '100%', overflow: 'hidden' }}>
            <Typography
                variant="h6"
                sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}
            >
                User List
            </Typography>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Last Login</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((user: any) => (
                                <TableRow hover key={user.id}>
                                    <TableCell>
                                        <Avatar
                                            src={user.avatar}
                                            alt={user.username}
                                        >
                                            {user.username
                                                ?.charAt(0)
                                                .toUpperCase()}
                                        </Avatar>
                                    </TableCell>
                                    <TableCell>
                                        <Box>
                                            <Typography variant="body2">
                                                {user.username}
                                            </Typography>
                                            {user.provider && (
                                                <Typography
                                                    variant="caption"
                                                    color="textSecondary"
                                                >
                                                    via {user.provider}
                                                </Typography>
                                            )}
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box>
                                            <Typography variant="body2">
                                                {user.email}
                                            </Typography>
                                            <Chip
                                                size="small"
                                                label={
                                                    user.isEmailConfirmed
                                                        ? 'Verified'
                                                        : 'Unverified'
                                                }
                                                color={
                                                    user.isEmailConfirmed
                                                        ? 'success'
                                                        : 'warning'
                                                }
                                                sx={{ mt: 0.5 }}
                                            />
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={user.role}
                                            color={
                                                user.role === 'Admin'
                                                    ? 'error'
                                                    : user.role === 'Provider'
                                                    ? 'primary'
                                                    : 'default'
                                            }
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={
                                                user.isActive
                                                    ? 'Active'
                                                    : 'Inactive'
                                            }
                                            color={
                                                user.isActive
                                                    ? 'success'
                                                    : 'error'
                                            }
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {formatDate(user.createAt)}
                                    </TableCell>
                                    <TableCell>
                                        {formatDate(user.lastLogin)}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default Customers;
