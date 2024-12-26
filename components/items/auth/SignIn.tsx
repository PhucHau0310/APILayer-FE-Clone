'use client';

import Alert from '@/components/items/Alert';
import useAlert from '@/hooks/useAlert';
import { useClickOutside } from '@/hooks/useClickOutSide';
import useLoading from '@/hooks/useLoading';
import {
    faFacebook,
    faGithub,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface SignInProps {
    isVisible: boolean;
    onClose: () => void;
}

const SignIn: React.FC<SignInProps> = ({ isVisible, onClose }) => {
    const signInRef = React.useRef<HTMLDivElement>(null);
    const [username, setUsername] = React.useState<string | null>(null);
    const [password, setPassword] = React.useState<string | null>(null);
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, startLoading, stopLoading] = useLoading();
    const router = useRouter();

    useClickOutside(signInRef, () => {
        if (isVisible) {
            onClose();
        }
    });

    const handleSignIn = async (
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
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('username', username);
                }

                setPassword(null);
                setUsername(null);

                setTimeout(() => {
                    router.push('/');
                    onClose();
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

    const handleClickOAuth = () => {
        showAlert('This feature is not available yet', 'info');
    };

    return (
        <div
            ref={signInRef}
            className={`fixed top-0 right-0 h-full max-w-sm w-full bg-white shadow-lg z-[100] transition-transform duration-1000 ease-in-out transform ${
                isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <Alert alert={alert} onClose={hideAlert} />
            <div className="p-5">
                <button
                    className="text-[#71869d] hover:bg-gray-800 hover:text-white px-3 py-1.5 rounded-md transition-all block ml-auto bg-[#f1f3f5]"
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faClose} size="1x" />
                </button>
                <h2 className="text-lg font-medium text-[#6c7a92] text-center">
                    Sign in to APILayer
                </h2>
                <p className="text-[#9aa3b4] text-center text-sm">
                    Start by choosing an account or email you use.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <div
                    onClick={handleClickOAuth}
                    className="border w-2/3 mx-auto text-center py-1.5 rounded-md hover:bg-blue-100 cursor-pointer"
                >
                    <FontAwesomeIcon
                        icon={faGoogle}
                        size="1x"
                        color="green"
                        className="mr-2"
                    />
                    Sign In With Google
                </div>
                <div
                    onClick={handleClickOAuth}
                    className="border w-2/3 mx-auto text-center py-1.5 rounded-md hover:bg-blue-100 cursor-pointer"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="1x"
                        color="black"
                        className="mr-2"
                    />
                    Sign In With Github
                </div>
                <div
                    onClick={handleClickOAuth}
                    className="border w-2/3 mx-auto text-center py-1.5 rounded-md hover:bg-blue-100 cursor-pointer"
                >
                    <FontAwesomeIcon
                        icon={faFacebook}
                        size="1x"
                        color="blue"
                        className="mr-2"
                    />
                    Sign In With Fb
                </div>

                <p className="text-[#a0aab4] text-center py-3">
                    <span>-------</span> OR <span>-------</span>
                </p>
            </div>

            <form className="px-5 py-3">
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
                    onClick={(e) => handleSignIn(e)}
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
                    Signup
                </Link>
            </p>
        </div>
    );
};

export default SignIn;
