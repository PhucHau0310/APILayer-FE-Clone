'use client'
import notfound from '@/public/img/jpg/not-found.jpg'
import Link from 'next/link';
const NotFoundPage = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
            <div className="max-w-lg">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 text-lg mb-6">
                    Oops! The page you are looking for doesn’t exist or might have been moved.
                </p>
                <img
                    src={notfound.src}
                    alt="Not Found Illustration"
                    className="my-10 w-full max-w-md mx-auto"
                />
                <Link href="/">
                    <h1 className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg shadow hover:bg-blue-700 transition duration-200">
                        Go Back to Home
                    </h1>
                </Link>
            </div>
        </main>
    );
};

export default NotFoundPage;
