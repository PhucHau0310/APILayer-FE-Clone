'use client';

import Alert from '@/components/items/Alert';
import useAlert from '@/hooks/useAlert';
import useApis from '@/hooks/useApis';
import useLoading from '@/hooks/useLoading';
import { Label, LabelImportant } from '@mui/icons-material';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Input,
} from '@mui/material';
import React from 'react';

interface ApiData {
    id: string;
    name: string;
    category: string;
    description: string;
    basePrice: number;
    status: string;
    documentations: Array<{ logoUrl: string }>;
}

interface EditFormData {
    name: string;
    category: string;
    description: string;
    basePrice: number;
    status: string;
}

const APIs = () => {
    const { data } = useApis();
    const [isHoveredApi, setHoverdApi] = React.useState(-1);
    const [editDialogOpen, setEditDialogOpen] = React.useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
    const [selectedApi, setSelectedApi] = React.useState<ApiData | null>(null);
    const [editFormData, setEditFormData] = React.useState<EditFormData>({
        name: '',
        category: '',
        description: '',
        basePrice: 0,
        status: '',
    });

    const [loading, startLoading, stopLoading] = useLoading();
    const { alert, hideAlert, showAlert } = useAlert();

    console.log(data);

    const handleEditClick = (api: any) => {
        setSelectedApi(api);
        setEditFormData({
            name: api.name,
            category: api.category,
            description: api.description,
            basePrice: api.basePrice,
            status: api.status,
        });
        setEditDialogOpen(true);
    };

    const handleDeleteClick = (api: any) => {
        setSelectedApi(api);
        setDeleteDialogOpen(true);
    };

    const handleEditSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `https://apilayer-hvg5bbfkf5hteqc7.southeastasia-01.azurewebsites.net/api/Api/${selectedApi?.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(editFormData),
                }
            );

            if (!response.ok) {
                throw new Error('Failed to update API');
            }

            // Refresh the API list
            // await fetchApis();
            setEditDialogOpen(false);
        } catch (err) {
            showAlert(
                'An error occurred while proccessing. Please try again later.',
                'error'
            );
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(
                `https://apilayer-hvg5bbfkf5hteqc7.southeastasia-01.azurewebsites.net/api/Api/${selectedApi?.id}`,
                {
                    method: 'DELETE',
                }
            );

            if (!response.ok) {
                showAlert(
                    'Failed to delete the API. Please try again later.',
                    'error'
                );
            }

            showAlert('API deleted successfully', 'success');

            // Refresh the API list
            // await fetchApis();
            setDeleteDialogOpen(false);
        } catch (err) {
            showAlert(
                'An error occurred while proccessing. Please try again later.',
                'error'
            );
        }
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setEditFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    return (
        <div>
            <Alert alert={alert} onClose={hideAlert} />
            <h1 className="text-2xl font-semibold mb-4">List APIs</h1>

            <div className="grid grid-cols-3 gap-4">
                {data?.map((api) => (
                    <div
                        key={api.id}
                        className="bg-[#111C44] p-4 rounded-lg shadow-md relative"
                        onMouseEnter={() => setHoverdApi(api.id)}
                        onMouseLeave={() => setHoverdApi(-1)}
                    >
                        {isHoveredApi === api.id && (
                            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                                <button
                                    onClick={() => handleEditClick(api)}
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteClick(api)}
                                    className="bg-[#FF4C61] text-white px-4 py-2 rounded-lg ml-3"
                                >
                                    Delete
                                </button>
                            </div>
                        )}

                        <span className="absolute top-2 right-2 bg-[#FF4C61] text-white px-2 py-1 rounded-full">
                            {api.status}
                        </span>

                        <span className="absolute top-12 right-2 bg-green-600 text-white px-2 py-1 rounded-full">
                            {api.basePrice === 0 ? 'Free' : 'Premium'}
                        </span>

                        <img
                            src={api.documentations[0].logoUrl}
                            alt="img"
                            className="w-20 h-20 rounded-full mx-auto"
                        />
                        <h2 className="text-lg font-bold my-2">{api.name}</h2>
                        <h3 className="mb-3 font-semibold">
                            Category:{' '}
                            <span className="text-[#A3AED0]">
                                {api.category}
                            </span>
                        </h3>
                        <p className="text-[#A3AED0]">{api.description}</p>
                    </div>
                ))}
            </div>

            {/* Edit Dialog */}
            <Dialog
                open={editDialogOpen}
                onClose={() => setEditDialogOpen(false)}
            >
                <DialogTitle>Edit API</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleEditSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name">Name</label>
                            <Input
                                id="name"
                                name="name"
                                value={editFormData.name}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <Input
                                id="category"
                                name="category"
                                value={editFormData.category}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <Input
                                id="description"
                                name="description"
                                value={editFormData.description}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="basePrice">Base Price</label>
                            <Input
                                id="basePrice"
                                name="basePrice"
                                type="number"
                                value={editFormData.basePrice}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="status">Status</label>
                            <Input
                                id="status"
                                name="status"
                                value={editFormData.status}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                        </div>
                        <DialogActions>
                            <Button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700"
                            >
                                {loading ? 'Loading...' : 'Save Changes'}
                            </Button>
                            <Button
                                type="button"
                                onClick={() => setEditDialogOpen(false)}
                                className="bg-gray-500 hover:bg-gray-600 ml-2"
                            >
                                Cancel
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Delete Dialog */}
            <Dialog
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
            >
                <DialogTitle>Delete API</DialogTitle>
                <DialogContent>
                    <p>
                        Are you sure you want to delete {selectedApi?.name}?
                        This action cannot be undone.
                    </p>
                    <DialogActions>
                        <Button
                            onClick={handleDelete}
                            className="bg-[#FF4C61] hover:bg-red-700"
                        >
                            {loading ? 'Loading...' : 'Delete'}
                        </Button>
                        <Button
                            onClick={() => setDeleteDialogOpen(false)}
                            className="bg-gray-500 hover:bg-gray-600 ml-2"
                        >
                            Cancel
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default APIs;
