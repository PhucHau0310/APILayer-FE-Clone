'use client';

import Alert from '@/components/Alert';
import useAlert from '@/hooks/useAlert';
import useLoading from '@/hooks/useLoading';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const SignIn = () => {
    const [username, setUsername] = React.useState<string | null>(null);
    const [password, setPassword] = React.useState<string | null>(null);
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, startLoading, stopLoading] = useLoading();
    const router = useRouter();

    const handlerSignIn = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        startLoading();
        try {
            e.preventDefault();

            if (!username || !password) {
                showAlert('Please fill in all fields', 'error');
                return;
            }

            const dataReq = {
                username,
                password,
            };

            const res = await fetch(`https://localhost:7036/api/Auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataReq),
            });

            const { message, data } = await res.json();

            if (res.ok) {
                showAlert(message, 'success');

                if (data?.accessToken) {
                    console.log(data.accessToken);
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('username', username);
                }

                setPassword(null);
                setUsername(null);

                setTimeout(() => {
                    router.push('/');
                }, 2000);
            } else {
                showAlert(message, 'error');
            }
        } catch (error) {
            console.log(error);
            showAlert('An error occurred during signin', 'error');
        } finally {
            stopLoading();
        }
    };

    return (
        <div className="max-w-md mx-auto pt-8 pb-32">
            <Alert alert={alert} onClose={hideAlert} />
            <div className="p-5">
                <h2 className="text-3xl font-bold text-black text-center">
                    Welcome back
                </h2>
                <p className="text-[#9aa3b4] text-center text-lg">
                    Login to manage your account.
                </p>
            </div>

            <form className="px-5 py-3 text-black">
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Username
                    </label>
                    <input
                        id="username"
                        value={username ?? ''}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Username"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <Link
                    href={'/forgot-password'}
                    className="text-gray-700 text-sm font-medium mb-2 hover:text-black flex justify-end"
                >
                    Forgot Password?
                </Link>

                <div className="mb-4">
                    <label
                        htmlFor="pass"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        id="pass"
                        value={password ?? ''}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="********"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <button
                    type="submit"
                    onClick={(e) => handlerSignIn(e)}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    {loading ? 'Loading...' : ' Sign In'}
                </button>
            </form>

            <p className="text-[#a0aab4] text-center py-3">
                <span>-------</span> OR <span>-------</span>
            </p>

            <p className="text-center text-[#a0aab4]">
                Don't have an account?{' '}
                <Link href={'/sign-up'} className="text-blue-700 font-semibold">
                    Sign Up
                </Link>
            </p>
        </div>
    );
};

export default SignIn;
