'use client';

import Alert from '@/components/items/Alert';
import useAlert from '@/hooks/useAlert';
import useLoading from '@/hooks/useLoading';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const CancelPage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const resolvedParams = React.use(params);
    const { slug } = resolvedParams;
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, startLoading, hideLoading] = useLoading();
    const router = useRouter();

    const handleCancelSubsciprtion = async () => {
        startLoading();
        try {
            if (!slug) {
                showAlert('Subscription ID is required!', 'error');
                return;
            }
            const res = await fetch(
                `https://localhost:7036/api/Subscription/user/${slug}`,
                {
                    method: 'DELETE',
                }
            );

            if (!res.ok) {
                showAlert('Failed to delete subscription', 'error');
            }

            showAlert('Delete subscription successfully', 'success');
            router.push('/subscriptions');
        } catch (error) {
            console.log(error);
            showAlert('An occurred while proccessing', 'error');
        } finally {
            hideLoading();
        }
    };
    return (
        <div className="my-24">
            <Alert alert={alert} onClose={hideAlert} />
            <div className="text-center">
                {' '}
                <FontAwesomeIcon
                    icon={faQuestion}
                    size="3x"
                    color="white"
                    className="bg-blue-700 py-2 px-4 rounded-full"
                />
            </div>
            <h1 className="my-4 text-center text-black font-semibold text-3xl">
                Are you sure ?
            </h1>
            <p className="text-center text-[#667778] mb-6">
                We are sad to see that you are cancelling your subscription for
                Currency Data API.
            </p>

            <div className="text-center">
                <Link
                    href={'/support'}
                    className="mr-3 inline-block px-10 py-3 rounded-full text-white bg-blue-600 hover:shadow-md hover:shadow-blue-500 transition-all"
                >
                    Contact Support
                </Link>

                <button
                    onClick={handleCancelSubsciprtion}
                    className="px-8 py-3 rounded-full text-red-500 border border-red-500 hover:text-white hover:bg-red-500 transition-all"
                >
                    {loading ? 'Proccessing...' : 'Cancel'}
                </button>
            </div>
        </div>
    );
};

export default CancelPage;
