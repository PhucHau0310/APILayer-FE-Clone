'use client';

import useApis from '@/hooks/useApis';
import useUser from '@/hooks/useUser';
import {
    faChevronRight,
    faCode,
    faListCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const Subscriptions = () => {
    const { data: user, loading } = useUser();
    const { data: apis } = useApis();

    const [open, setOpen] = React.useState(false);
    const [apiIdCancel, setApiIdCancel] = React.useState(-1);
    const router = useRouter();

    const handleClickOpen = (id: number) => {
        setApiIdCancel(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        router.push(`/subscriptions/cancel/${apiIdCancel}`);
    };

    const subscriptions = user?.userSubscriptions?.$values || [];
    return (
        <div className="text-[#1e2022] mt-16 pt-8 mb-96 bg-blue-900 h-56">
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{'Cancel Subscription'}</DialogTitle>
                <DialogContent>
                    <div id="alert-dialog-slide-description">
                        Are you sure you want to cancel this subscription?
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className="text-gray-600">
                        Close
                    </Button>
                    <Button onClick={handleCancel} className="text-red-500">
                        Cancel Subscription
                    </Button>
                </DialogActions>
            </Dialog>

            <div className="max-w-5xl mx-auto h-44">
                <h1 className="text-white font-semibold text-3xl">
                    API Dashboard
                </h1>
                <p className="text-[#677788] mt-2">
                    API Dashboard <span className="text-white">/</span>{' '}
                    Subscriptions
                </p>

                <div className="mt-12 flex flex-row items-start justify-between gap-4 w-full text-[#677788]">
                    <div className="bg-white w-[27%] px-8 pt-6 pb-11 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold text-[#1e2022]">
                            {user?.username}
                        </h2>
                        <h3 className="mb-7">{user?.email}</h3>

                        <p className="mb-3">ACCOUNT</p>

                        <div className="flex flex-col gap-3">
                            <Link
                                href={'/provider'}
                                className="flex flex-row items-center gap-2.5 cursor-pointer hover:text-[#0052CC]"
                            >
                                <FontAwesomeIcon icon={faCode} size="1x" />
                                <span>My APIs</span>
                            </Link>
                            <div className="flex flex-row items-center gap-2.5 cursor-pointer text-[#0052CC]">
                                <FontAwesomeIcon icon={faListCheck} size="1x" />
                                <span>Subscriptions</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[73%] bg-white rounded-md shadow-md">
                        <h2 className="px-8 pt-6 pb-5 text-lg font-semibold text-[#1e2022] border-b border-b-[#e7eaf3]">
                            Subscriptions
                        </h2>

                        <div className="px-8 py-6">
                            {subscriptions.length > 0 ? (
                                subscriptions.map((subscription) => {
                                    const api = apis?.find(
                                        (api) => api.id === subscription.apiId
                                    );

                                    return (
                                        <div
                                            key={subscription.id}
                                            className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md "
                                        >
                                            {api ? (
                                                <div className="flex flex-row items-center justify-between">
                                                    <div className="flex flex-row items-center gap-8">
                                                        <div className="flex flex-row items-center gap-2">
                                                            <Link
                                                                href={`/marketplace/${api.name}`}
                                                                className="flex flex-row items-center gap-1 hover:opacity-80"
                                                            >
                                                                <h3 className="text-xl font-semibold text-[#1e2022]">
                                                                    {api.name}
                                                                </h3>

                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faChevronRight
                                                                    }
                                                                    size="sm"
                                                                    color="#1e2022"
                                                                />
                                                            </Link>
                                                        </div>
                                                        <p className="text-sm text-[#677788]">
                                                            {api.basePrice === 0
                                                                ? 'Free Plan'
                                                                : 'Premium'}
                                                        </p>
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            handleClickOpen(
                                                                subscription.id
                                                            )
                                                        }
                                                        className="border border-red-500 text-red-500 rounded-md px-2 py-1 hover:bg-red-600 hover:text-white transition-all duration-300"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : (
                                                <p className="text-red-500">
                                                    API not found for ID:{' '}
                                                    {subscription.apiId}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="text-center pt-4">
                                    <h3 className="text-[#1e2022] text-4xl">
                                        Your API collection is empty
                                    </h3>
                                    <h4 className="mt-2 mb-16">
                                        Let's subscribe to your first API
                                    </h4>

                                    <Link
                                        href={'/'}
                                        className="bg-[#37C625] text-white px-4 py-3 rounded-md hover:shadow-md transition-all"
                                    >
                                        Browse API marketplace
                                    </Link>
                                    <Link
                                        href={'/provider'}
                                        className="text-[#0052CC] block mt-4 hover:text-black transition-all cursor-pointer"
                                    >
                                        or add your API
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscriptions;
