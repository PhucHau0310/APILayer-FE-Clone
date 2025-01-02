'use client';

import Alert from '@/components/items/Alert';
import useAlert from '@/hooks/useAlert';
import useLoading from '@/hooks/useLoading';
import {
    faArrowLeft,
    faEnvelopeOpenText,
    faKey,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = React.useState('');
    const [selectedOption, setSelectedOption] = React.useState<{
        option: 1 | 2 | 3;
    }>({ option: 1 });
    const [code, setCode] = React.useState('');
    const [newPass, setNewPass] = React.useState('');

    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, startLoading, stopLoading] = useLoading();

    const handleOptionChange = (newOption: 1 | 2 | 3) => {
        setSelectedOption({ option: newOption });
    };

    const router = useRouter();

    const handleForgotPass = async () => {
        startLoading();
        try {
            const url = new URL(
                `${process.env.NEXT_PUBLIC_API_BE}/api/User/forgot-password`
            );
            url.searchParams.append('email', email);

            const res = await fetch(url, {
                method: 'POST',
            });

            const data = await res.json();

            if (!res.ok) {
                showAlert(data.message, 'error');
            } else {
                showAlert(data.message, 'success');
                handleOptionChange(2);
            }
        } catch (error) {
            console.error(error);
            showAlert('An unexpected error occurred', 'error');
        } finally {
            stopLoading();
        }
    };

    const handleContinue = async () => {
        startLoading();
        try {
            const url = new URL(
                `${process.env.NEXT_PUBLIC_API_BE}/api/User/verify-code`
            );
            url.searchParams.append('email', email);
            url.searchParams.append('code', code);

            const res = await fetch(url, {
                method: 'POST',
            });

            const data = await res.json();

            if (!res.ok) {
                showAlert(data.message, 'error');
            } else {
                showAlert(data.message, 'success');
                handleOptionChange(3);
            }
        } catch (error) {
            console.error(error);
            showAlert('An unexpected error occurred', 'error');
        } finally {
            stopLoading();
        }
    };

    const handleResetPass = async () => {
        startLoading();
        try {
            const url = new URL(
                `${process.env.NEXT_PUBLIC_API_BE}/api/User/reset-password`
            );
            url.searchParams.append('email', email);
            url.searchParams.append('newPass', newPass);
            const res = await fetch(url, {
                method: 'POST',
            });

            const data = await res.json();

            if (!res.ok) {
                showAlert(data.message, 'error');
            } else {
                showAlert(data.message, 'success');

                setTimeout(() => {
                    router.push('/sign-in');
                }, 3000);
            }
        } catch (error) {
            console.error(error);
            showAlert('An unexpected error occurred', 'error');
        } finally {
            stopLoading();
        }
    };

    return (
        <div className="max-w-md mx-auto pt-14 pb-32 text-black">
            <Alert alert={alert} onClose={hideAlert} />
            {selectedOption.option === 1 && (
                <>
                    <div className="w-14 h-14 rounded-md mx-auto flex justify-center items-center mb-5 border-2 border-gray-400">
                        <FontAwesomeIcon icon={faKey} size="lg" color="black" />
                    </div>
                    <h1 className="text-center font-semibold text-2xl">
                        Forgot Password ?
                    </h1>
                    <p className="text-gray-600 text-center mt-3 mb-6">
                        No worries, we'll send you reset instructions
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full border-2 border-gray-400 rounded-md px-3 py-2"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button
                            // type="submit"
                            onClick={handleForgotPass}
                            disabled={email.length === 0}
                            className="w-full bg-blue-500 text-white rounded-md disabled:opacity-50 py-2 hover:shadow-md transition-all hover:scale-105"
                        >
                            {loading ? 'Loading...' : 'Reset Password'}
                        </button>
                    </div>
                </>
            )}

            {selectedOption.option === 2 && email.length !== 0 && (
                <>
                    <div className="w-14 h-14 rounded-md mx-auto flex justify-center items-center mb-5 border-2 border-gray-400">
                        <FontAwesomeIcon
                            icon={faEnvelopeOpenText}
                            size="lg"
                            color="black"
                        />
                    </div>
                    <h1 className="text-center font-semibold text-2xl">
                        Verify Your Email
                    </h1>
                    <p className="text-gray-600 text-center mt-3 mb-6">
                        We sent a code to{' '}
                        <span className="text-black font-semibold">
                            {email}
                        </span>
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="code"
                                className="block text-sm font-medium mb-2"
                            >
                                Code
                            </label>
                            <input
                                required
                                id="code"
                                type="text"
                                className="w-full border-2 border-gray-400 rounded-md px-3 py-2"
                                placeholder="Enter your code verify"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                        </div>
                        <button
                            // type="submit"
                            onClick={handleContinue}
                            disabled={code.length === 0}
                            className="w-full bg-blue-500 text-white rounded-md disabled:opacity-50 py-2 hover:shadow-md transition-all hover:scale-105"
                        >
                            {loading ? 'Loading...' : 'Continue'}
                        </button>
                    </div>
                </>
            )}

            {selectedOption.option === 3 && code.length !== 0 && (
                <>
                    <div className="w-14 h-14 rounded-md mx-auto flex justify-center items-center mb-5 border-2 border-gray-400">
                        <FontAwesomeIcon icon={faKey} size="lg" color="black" />
                    </div>
                    <h1 className="text-center font-semibold text-2xl">
                        Set New Password
                    </h1>
                    <p className="text-gray-600 text-center mt-3 mb-6">
                        Must be at least 8 characters long
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="newPass"
                                className="block text-sm font-medium mb-2"
                            >
                                New Password
                            </label>
                            <input
                                required
                                id="newPass"
                                type="text"
                                className="w-full border-2 border-gray-400 rounded-md px-3 py-2"
                                placeholder="Enter your new password"
                                value={newPass}
                                onChange={(e) => setNewPass(e.target.value)}
                            />
                        </div>
                        <button
                            // type="submit"
                            onClick={handleResetPass}
                            disabled={newPass.length < 8}
                            className="w-full bg-blue-500 text-white rounded-md disabled:opacity-50 py-2 hover:shadow-md transition-all hover:scale-105"
                        >
                            {loading ? 'Loading...' : 'Reset Password'}
                        </button>
                    </div>
                </>
            )}

            <Link
                href={'/sign-in'}
                className="flex items-center justify-center gap-2 mt-8 text-gray-500 hover:opacity-70"
            >
                <FontAwesomeIcon icon={faArrowLeft} size="1x" /> Back to Login
            </Link>
        </div>
    );
};

export default ForgotPassword;
