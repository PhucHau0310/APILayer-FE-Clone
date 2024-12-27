'use client';

import Alert from '@/components/items/Alert';
import useAlert from '@/hooks/useAlert';
import useLoading from '@/hooks/useLoading';
import useUser from '@/hooks/useUser';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Support = () => {
    const { data } = useUser();
    const [subject, setSubject] = React.useState<string | null>(null);
    const [question, setQuestion] = React.useState<string | null>(null);
    const [loading, startLoading, stopLoading] = useLoading();
    const { alert, showAlert, hideAlert } = useAlert();

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        startLoading();
        let userId = data?.id;

        try {
            if (!subject || !question) {
                showAlert('Please fill in all fields', 'error');
                return;
            }

            if (!userId) {
                showAlert('UserID is required', 'error');
                return;
            }

            const dataReq = {
                question: question,
                category: subject,
                userId: userId,
            };

            const res = await fetch(
                `https://localhost:7036/api/FAQ/create-faq`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataReq),
                }
            );

            const { message, data } = await res.json();

            if (res.ok) {
                showAlert(message, 'success');

                setSubject(null);
                setQuestion(null);
            } else {
                showAlert(message, 'error');
            }
        } catch (error) {
            showAlert(
                'An error occurred during submit question support',
                'error'
            );
        } finally {
            stopLoading();
        }
    };

    return (
        <div className="mt-20 mb-12 text-[#1e2022]">
            <Alert alert={alert} onClose={hideAlert} />
            <h1 className="text-4xl text-center font-semibold mb-8">
                Contact Sales & Customer Support
            </h1>
            <p className="text-center mb-28 w-[43%] mx-auto">
                Our team is great and giving you the support you need, just when
                you need it. We look forward to hearing from you.
            </p>

            <div className="max-w-screen-md mx-auto">
                <div className="mb-10 flex flex-row items-center transition-all duration-300 gap-3 p-4 rounded-md bg-[#f5f8fd] border border-[#8c98a4] cursor-pointer hover:shadow-md hover:shadow-blue-500">
                    {data?.avatar ? (
                        <img
                            src={data.avatar}
                            alt="avatar"
                            className="w-16 h-16 rounded-full"
                        />
                    ) : (
                        <FontAwesomeIcon icon={faCircleUser} size="3x" />
                    )}

                    <div className="flex flex-col gap-1]">
                        <h2 className="text-[#0052CC] font-medium text-lg">
                            {data?.username}
                        </h2>
                        <h3 className="text-[#8c98a4] font-normal text-base">
                            {data?.email}
                        </h3>
                    </div>
                </div>

                <form className="px-5 py-3 text-black">
                    <div className="mb-4">
                        <label
                            htmlFor="subject"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Subject (Required)
                        </label>
                        <select
                            value={subject ?? ''}
                            onChange={(e) => setSubject(e.target.value)}
                            name="subject"
                            id="subject"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option disabled>Select Subject</option>
                            <option value="General Inquiry">
                                General Inquiry
                            </option>
                            <option value="Billing Inquiry">
                                Billing Inquiry
                            </option>
                            <option value="Technical Question">
                                Technical Question
                            </option>
                            <option value="Legal Inquiry">Legal Inquiry</option>
                            <option value="Bug Report">Bug Report</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="question"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Support Question (Required)
                        </label>
                        <textarea
                            id="question"
                            value={question ?? ''}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="w-full h-36 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                        className="bg-[#0052CC] text-white mx-auto block rounded-md px-6 py-4 mt-8 font-semibold shadow-md hover:shadow-lg hover:shadow-blue-600 transform transition duration-300 hover:-translate-y-2"
                    >
                        {loading ? 'Loading...' : 'Submit'}
                    </button>

                    <p className="text-[#8c98a4] text-center mt-4">
                        We'll get back to you in 1-2 business days.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Support;
