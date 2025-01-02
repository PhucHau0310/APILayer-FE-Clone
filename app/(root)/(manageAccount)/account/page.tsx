'use client';

import Alert from '@/components/items/Alert';
import useAlert from '@/hooks/useAlert';
import useLoading from '@/hooks/useLoading';
import useUser from '@/hooks/useUser';
import { faEye, faEyeSlash, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Account = () => {
    const { data } = useUser();
    const [isHoverAvatar, setHoverAvatar] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = React.useState<string>('');
    const [username, setUsername] = React.useState('');
    const [coolInfo, setCoolInfo] = React.useState('');
    const [oldPass, setOldPass] = React.useState('');
    const [newPass, setNewPass] = React.useState('');
    const [newPassAgain, setNewPassAgain] = React.useState('');
    const [isSeePassword, setIsSeePassword] = React.useState(false);
    const [loading, startLoading, stopLoading] = useLoading();
    const { alert, showAlert, hideAlert } = useAlert();
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
        if (data?.username) {
            setUsername(data.username);
        }

        if (data?.coolInfoMySelft) {
            setCoolInfo(data.coolInfoMySelft);
        }
    }, [data?.username || data?.coolInfoMySelft]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const objectUrl = URL.createObjectURL(file);
            setPreviewUrl(objectUrl);
        }
    };

    React.useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const handleUpdateAvatar = async () => {
        if (!selectedFile) {
            showAlert('Please select an image file to upload.', 'error');
            return;
        }

        startLoading();
        try {
            const url = new URL(
                `${process.env.NEXT_PUBLIC_API_BE}/api/User/update-avatar-user`
            );

            url.searchParams.append('username', data?.username ?? '');

            const formData = new FormData();
            formData.append('avatar', selectedFile);

            const res = await fetch(url, {
                method: 'PUT',
                body: formData,
            });

            if (!res.ok) {
                throw new Error('Failed to update avatar');
            }

            showAlert('Avatar updated successfully!', 'success');
        } catch (error) {
            console.log(error);
            showAlert('An error occurred, please try again later.', 'error');
        } finally {
            stopLoading();
        }
    };

    const handleUpdateUsername = async () => {
        startLoading();
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_BE}/api/User/update-username`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: data?.username,
                        newUsername: username,
                        coolInfoMySelft: coolInfo,
                    }),
                }
            );

            if (!res.ok) {
                throw new Error('Failed to update username');
            }

            showAlert('Username updated successfully!', 'success');
        } catch (error) {
            console.log(error);
            showAlert('An error occurred, please try again later.', 'error');
        } finally {
            stopLoading();
        }
    };

    const handleChangPassword = async () => {
        if (
            oldPass.length === 0 ||
            newPass.length === 0 ||
            newPassAgain.length === 0
        ) {
            showAlert('Please fill all fields', 'error');
            return;
        }

        if (newPass !== newPassAgain) {
            showAlert('New password does not match', 'error');
            return;
        }

        startLoading();
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_BE}/api/User/change-password`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: data?.username,
                        password: oldPass,
                        newPassword: newPass,
                    }),
                }
            );

            if (!res.ok) {
                throw new Error('Failed to change password');
            }

            showAlert('Changed password successfully!', 'success');

            setOldPass('');
            setNewPass('');
            setNewPassAgain('');
        } catch (error) {
            console.log(error);
            showAlert('An error occurred, please try again later.', 'error');
        } finally {
            stopLoading();
        }
    };

    const handleClickAvatar = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="text-[#1e2022] mt-16 py-8">
            <Alert alert={alert} onClose={hideAlert} />
            <div className="max-w-[600px] mx-auto">
                <div className="flex flex-col mb-8">
                    <div className="shadow-md p-6 rounded-md bg-white flex flex-col items-center mb-16">
                        <div className="relative">
                            <img
                                src={previewUrl || data?.avatar}
                                alt="avatar"
                                className={`w-32 h-32 rounded-full cursor-pointer transition-all ${
                                    isHoverAvatar ? 'opacity-50' : ''
                                }`}
                                onMouseEnter={() => setHoverAvatar(true)}
                                onMouseLeave={() => setHoverAvatar(false)}
                                onClick={handleClickAvatar}
                            />

                            {isHoverAvatar && (
                                <FontAwesomeIcon
                                    icon={faImage}
                                    size="2x"
                                    className="absolute top-1/2 left-1/2 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
                                />
                            )}
                        </div>
                        <p className="text-sm mt-1.5 text-gray-500 text-center">
                            Click on the avatar to update it
                        </p>

                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                            className="mt-2"
                        />

                        <button
                            onClick={handleUpdateAvatar}
                            className={`block rounded-md border border-blue-600 text-blue-600 px-3 py-1.5 mt-2 transition-all duration-300 hover:bg-blue-600 hover:text-white ${
                                loading ? 'opacity-50 pointer-events-none' : ''
                            }`}
                            disabled={loading}
                        >
                            {loading ? 'Updating...' : 'Update Avatar'}
                        </button>
                    </div>

                    <div className="shadow-md p-6 rounded-md bg-white mb-16">
                        <h2 className="font-semibold text-2xl mb-3">
                            Change Username
                        </h2>
                        <input
                            id="username"
                            type="text"
                            className="w-full font-semibold border-2 border-gray-200 rounded-md px-4 py-3 focus:border-blue-500 focus:outline-none"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <textarea
                            value={coolInfo}
                            onChange={(e) => setCoolInfo(e.target.value)}
                            className="w-full h-20 border-2 border-gray-200 rounded-md px-4 py-2 mt-2 focus:border-blue-500 focus:outline-none"
                            placeholder="Some cool info about myself"
                        />

                        <button
                            className={`block rounded-md border border-blue-600 text-blue-600 px-3 py-1.5 mt-2 transition-all duration-300 hover:bg-blue-600 hover:text-white ${
                                loading ? 'opacity-50 pointer-events-none' : ''
                            }`}
                            disabled={loading}
                            onClick={handleUpdateUsername}
                        >
                            {loading ? 'Updating...' : 'Save'}
                        </button>
                    </div>

                    <div className="shadow-md p-6 rounded-md bg-white">
                        <div className="flex flex-row items-center gap-4">
                            <h2 className="font-semibold text-2xl mb-3">
                                Change Password
                            </h2>

                            <FontAwesomeIcon
                                icon={isSeePassword ? faEyeSlash : faEye}
                                onClick={() => setIsSeePassword(!isSeePassword)}
                                size="lg"
                                className="mb-3 hover:scale-105 transition-all duration-300 cursor-pointer"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="oldPass"
                                className="block text-base font-medium mb-2"
                            >
                                Old Password
                            </label>
                            <input
                                id="oldPass"
                                type={isSeePassword ? 'text' : 'password'}
                                required
                                className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                                placeholder="**********"
                                value={oldPass}
                                onChange={(e) => setOldPass(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="newPass"
                                className="block text-base font-medium mb-2"
                            >
                                New Password
                            </label>
                            <input
                                id="newPass"
                                type={isSeePassword ? 'text' : 'password'}
                                required
                                className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                                placeholder="**********"
                                value={newPass}
                                onChange={(e) => setNewPass(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="oldPass"
                                className="block text-base font-medium mb-2"
                            >
                                New Password Again
                            </label>
                            <input
                                id="oldPass"
                                type={isSeePassword ? 'text' : 'password'}
                                required
                                className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                                placeholder="**********"
                                value={newPassAgain}
                                onChange={(e) =>
                                    setNewPassAgain(e.target.value)
                                }
                            />
                        </div>
                        <button
                            className={`block rounded-md border border-blue-600 text-blue-600 px-3 py-1.5 mt-5 transition-all duration-300 hover:bg-blue-600 hover:text-white ${
                                loading ? 'opacity-50 pointer-events-none' : ''
                            }`}
                            disabled={loading}
                            onClick={handleChangPassword}
                        >
                            {loading ? 'Changing...' : ' Change Password'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
