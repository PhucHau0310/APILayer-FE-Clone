import {
    faFacebook,
    faGithub,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const SignIn = () => {
    return (
        <div className="max-w-md mx-auto pt-8 pb-32">
            <div className="p-5">
                <h2 className="text-3xl font-bold text-black text-center">
                    Welcome back
                </h2>
                <p className="text-[#9aa3b4] text-center text-lg">
                    Login to manage your account.
                </p>
            </div>

            <form className="px-5 py-3 text-black">
                {/* <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div> */}

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
                    Sign Up
                </Link>
            </p>
        </div>
    );
};

export default SignIn;
