'use client';

import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Grid,
    Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const FAQs = () => {
    const [faqs, setFaqs] = useState<any[]>([]);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedFAQ, setSelectedFAQ] = useState<any>(null);

    useEffect(() => {
        fetchFAQs();
    }, []);

    const fetchFAQs = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BE}/api/FAQ/get-faqs`
            );
            const data = await response.json();
            if (response.ok) {
                setFaqs(data.data.$values || []);
            } else {
                console.error('Failed to fetch FAQs:', data.message);
            }
        } catch (error) {
            console.error('Error fetching FAQs:', error);
        }
    };

    const handleDelete = async (id: any) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BE}/api/FAQ/delete-faq?id=${id}`,
                {
                    method: 'DELETE',
                }
            );
            const data = await response.json();
            if (data.success) {
                setFaqs((prevFaqs) => prevFaqs.filter((faq) => faq.id !== id));
            } else {
                console.error('Failed to delete FAQ:', data.message);
            }
        } catch (error) {
            console.error('Error deleting FAQ:', error);
        }
    };

    const handleEditOpen = (faq: any) => {
        setSelectedFAQ(faq);
        setOpenEdit(true);
    };

    const handleEditClose = () => {
        setSelectedFAQ(null);
        setOpenEdit(false);
    };

    const handleEditSave = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BE}/api/FAQ/update-faq?id=${selectedFAQ.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        question: selectedFAQ.question,
                        answer: selectedFAQ.answer,
                        category: selectedFAQ.category,
                        userId: selectedFAQ.userId,
                    }),
                }
            );
            const data = await response.json();
            if (data.success) {
                fetchFAQs();
                handleEditClose();
            } else {
                console.error('Failed to update FAQ:', data.message);
            }
        } catch (error) {
            console.error('Error updating FAQ:', error);
        }
    };

    return (
        <Box p={4}>
            <Typography variant="h4" gutterBottom>
                FAQ List
            </Typography>
            <Grid container spacing={2}>
                {faqs?.length > 0 ? (
                    faqs.map((faq) => (
                        <Grid item xs={12} key={faq.id}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Typography variant="h6">
                                    Question: {faq.question}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary">
                                    Answer: {faq.answer}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary">Category: {faq.category}
                                </Typography>

                                <Typography
                                    variant="caption"
                                    color="text">
                                    <br />
                                    Created by: {faq.user.username}
                                </Typography>
                                <Box mt={2}>
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleEditOpen(faq)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => handleDelete(faq.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </Paper>
                        </Grid>
                    ))
                ) : (
                    <p className="mt-4 px-4">
                        <Typography>No FAQs available</Typography>
                    </p>
                )}
            </Grid>

            {/* Edit Dialog */}
            {selectedFAQ && (
                <Dialog open={openEdit} onClose={handleEditClose}>
                    <DialogTitle>Edit FAQ</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Question"
                            fullWidth
                            margin="normal"
                            value={selectedFAQ.question}
                            onChange={(e) =>
                                setSelectedFAQ({
                                    ...selectedFAQ,
                                    question: e.target.value,
                                })
                            }
                        />
                        <TextField
                            label="Answer"
                            fullWidth
                            margin="normal"
                            value={selectedFAQ.answer}
                            onChange={(e) =>
                                setSelectedFAQ({
                                    ...selectedFAQ,
                                    answer: e.target.value,
                                })
                            }
                        />
                        <TextField
                            label="Category"
                            fullWidth
                            margin="normal"
                            value={selectedFAQ.category}
                            onChange={(e) =>
                                setSelectedFAQ({
                                    ...selectedFAQ,
                                    category: e.target.value,
                                })
                            }
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleEditClose}>Cancel</Button>
                        <Button onClick={handleEditSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Box>
    );
};

export default FAQs;
