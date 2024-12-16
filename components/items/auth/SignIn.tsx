'use client';

import { useClickOutside } from '@/hooks/useClickOutSide';
import {
    faFacebook,
    faGithub,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

interface SignInProps {
    isVisible: boolean;
    onClose: () => void;
}

const SignIn: React.FC<SignInProps> = ({ isVisible, onClose }) => {
    const signInRef = React.useRef<HTMLDivElement>(null);

    useClickOutside(signInRef, () => {
        if (isVisible) {
            onClose();
        }
    });

    return (
        <div
            ref={signInRef}
            className={`fixed top-0 right-0 h-full max-w-sm w-full bg-white shadow-lg z-[100] transition-transform duration-1000 ease-in-out transform ${
                isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
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
                <Link
                    href={'/sign-in'}
                    className="border w-2/3 mx-auto text-center py-1.5 rounded-md hover:bg-blue-100"
                >
                    <FontAwesomeIcon
                        icon={faGoogle}
                        size="1x"
                        color="green"
                        className="mr-2"
                    />
                    Sign In With Google
                </Link>
                <Link
                    href={'/sign-in'}
                    className="border w-2/3 mx-auto text-center py-1.5 rounded-md hover:bg-blue-100"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="1x"
                        color="black"
                        className="mr-2"
                    />
                    Sign In With Github
                </Link>
                <Link
                    href={'/sign-in'}
                    className="border w-2/3 mx-auto text-center py-1.5 rounded-md hover:bg-blue-100"
                >
                    <FontAwesomeIcon
                        icon={faFacebook}
                        size="1x"
                        color="blue"
                        className="mr-2"
                    />
                    Sign In With Fb
                </Link>

                <p className="text-[#a0aab4] text-center py-3">
                    <span>-------</span> OR <span>-------</span>
                </p>
            </div>

            <form className="px-5 py-3">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email address"
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
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="********"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Sign In
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
