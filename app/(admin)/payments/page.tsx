'use client';

import {
    Box,
    Chip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from '@mui/material';
import React from 'react';

const Payments = () => {
    const [payments, setPayments] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    React.useEffect(() => {
        const fetchPayments = async () => {
            const res = await fetch(
                `https://apilayer-hvg5bbfkf5hteqc7.southeastasia-01.azurewebsites.net/api/Payment/payments`
            );

            if (res.ok) {
                const data = await res.json();
                setPayments(data['data']['$values']);
            } else {
                console.log('Failed to fetch payments');
            }
        };
        fetchPayments();
    }, []);

    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const getStatusColor = (status: any) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'warning';
            case 'completed':
                return 'success';
            case 'failed':
                return 'error';
            default:
                return 'default';
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString('vi-VN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const formatAmount = (amount: any) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount);
    };
    return (
        <Box sx={{ width: '100%', p: 2 }}>
            <Typography variant="h6" gutterBottom component="div">
                History of Payments
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="payment table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>User ID</TableCell>
                            <TableCell>API ID</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell>Pay Method</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Pay Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {payments
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((payment: any) => (
                                <TableRow
                                    key={payment.id}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell>{payment.id}</TableCell>
                                    <TableCell>{payment.userId}</TableCell>
                                    <TableCell>{payment.apiId}</TableCell>
                                    <TableCell align="right">
                                        {formatAmount(payment.amount)}
                                    </TableCell>
                                    <TableCell>
                                        {payment.paymentMethod}
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={payment.paymentStatus}
                                            color={getStatusColor(
                                                payment.paymentStatus
                                            )}
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {formatDate(payment.paymentDate)}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={payments.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage="Số dòng mỗi trang"
                />
            </TableContainer>
        </Box>
    );
};

export default Payments;
