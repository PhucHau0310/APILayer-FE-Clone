'use client';

import Alert from '@/components/items/Alert';
import useAlert from '@/hooks/useAlert';
import useLoading from '@/hooks/useLoading';
import {
    faFacebook,
    faGithub,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const SignUp = () => {
    const [username, setUsername] = React.useState<string | null>(null);
    const [email, setEmail] = React.useState<string | null>(null);
    const [password, setPassword] = React.useState<string | null>(null);
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, startLoading, stopLoading] = useLoading();
    const router = useRouter();

    const handlerRegister = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        startLoading();
        try {
            e.preventDefault();
            // console.log({ username, email, password });

            if (!username || !email || !password) {
                showAlert('Please fill in all fields', 'error');
                return;
            }

            const dataReq = {
                username,
                email,
                password,
            };

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_BE}/api/Auth/register`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataReq),
                }
            );

            const { message } = await res.json();

            if (res.ok) {
                showAlert(message, 'success');
                setEmail(null);
                setPassword(null);
                setUsername(null);

                setTimeout(() => {
                    router.push('/sign-in');
                }, 3000);
            } else {
                showAlert(message, 'error');
            }
        } catch (error) {
            console.log(error);
            showAlert('An error occurred during registration', 'error');
        } finally {
            stopLoading();
        }
    };

    const handleClickOAuth = () => {
        showAlert('This feature is not available yet', 'info');
    };

    return (
        <div className="max-w-md mx-auto pt-8 pb-32">
            <Alert alert={alert} onClose={hideAlert} />

            <div className="p-5">
                <h2 className="text-3xl font-bold text-black text-center">
                    Welcome to APILayer
                </h2>
                <p className="text-[#9aa3b4] text-center text-lg">
                    Register now and start using the API marketplace!
                </p>
            </div>

            <div className="flex flex-col gap-4 text-black">
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
                    Sign Up With Google
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
                    Sign Up With Github
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
                    Sign Up With Fb
                </div>

                <p className="text-[#a0aab4] text-center py-3">
                    <span>-------</span> OR <span>-------</span>
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

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        value={email ?? ''}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email address"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

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
                    onClick={(e) => handlerRegister(e)}
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    {loading ? 'Loading...' : 'Sign Up For Free'}
                </button>
            </form>

            <p className="text-[#a0aab4] text-center py-3">
                <span>-------</span> OR <span>-------</span>
            </p>

            <p className="text-center text-[#a0aab4]">
                Already have an account?{' '}
                <Link href={'/sign-in'} className="text-blue-700 font-semibold">
                    Sign In
                </Link>
            </p>
        </div>
    );
};

export default SignUp;
