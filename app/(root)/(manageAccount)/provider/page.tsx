'use client';

import Alert from '@/components/items/Alert';
import useAlert from '@/hooks/useAlert';
import useLoading from '@/hooks/useLoading';
import useUser from '@/hooks/useUser';
import React from 'react';

const Provider = () => {
    const [apiName, setApiName] = React.useState<string | null>(null);
    const [shortDesc, setShortDesc] = React.useState<string | null>(null);
    const [categories, setCategories] = React.useState<string | null>(null);
    const [docsUrl, setDocsUrl] = React.useState<string | null>(null);
    const [logoUrl, setLogoUrl] = React.useState<string | null>(null);
    const [pricingUrl, setPricingUrl] = React.useState<string | null>(null);
    const [codeExamples, setCodeExamples] = React.useState<string | null>(null);
    const [loading, startLoading, stopLoading] = useLoading();
    const { alert, showAlert, hideAlert } = useAlert();
    const { data } = useUser();

    const handleBack = () => {
        setApiName(null);
        setShortDesc(null);
        setDocsUrl(null);
        setLogoUrl(null);
        setPricingUrl(null);
        setCodeExamples(null);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await handleUpApi();
    };

    const isFormValid = () => {
        if (
            !apiName ||
            !shortDesc ||
            !categories ||
            !docsUrl ||
            !logoUrl ||
            !pricingUrl ||
            !codeExamples
        ) {
            showAlert('Please fill in all required fields', 'error');
            return false;
        }
        return true;
    };

    const handleUpApi = async () => {
        if (!isFormValid()) return;

        startLoading();
        try {
            const dataApi = {
                ownerId: data?.id,
                name: apiName,
                description: shortDesc,
                category: categories,
                pricingUrl: pricingUrl || '', // Provide default empty string
                basePrice: 0,
                status: 'Active',
                overallSubscription: 0,
            };

            const res = await fetch(`https://localhost:7036/api/Api`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Add this for cookies if needed
                body: JSON.stringify(dataApi),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Failed to add API');
            }

            const responseData = await res.json();
            if (!responseData.data?.id) {
                throw new Error('Invalid API response');
            }

            const apiId = responseData.data.id;
            const dataDocs = {
                apiId: apiId,
                documentUrl: docsUrl || '',
                logoUrl: logoUrl || '',
                codeExamples: codeExamples || '',
                status: 'Active',
            };

            const resSecond = await fetch(
                `https://localhost:7036/api/Api/documentation`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify(dataDocs),
                }
            );

            if (!resSecond.ok) {
                throw new Error('Failed to add documentation');
            }

            showAlert('API added successfully', 'success');
            handleBack();
        } catch (error) {
            console.error('Error:', error);
            showAlert('An error occurred while processing', 'error');
        } finally {
            stopLoading();
        }
    };

    return (
        <div className="text-[#1e2022] mt-16 py-8">
            <Alert alert={alert} onClose={hideAlert} />
            <div className="max-w-[600px] mx-auto">
                <h1 className="border-b border-b-[#e7eaf3] text-2xl font-semibold pb-4">
                    Add Your API
                </h1>

                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="apiName"
                            className="block text-sm font-medium mb-2"
                        >
                            API Name
                        </label>
                        <input
                            id="apiName"
                            value={apiName ?? ''}
                            onChange={(e) => setApiName(e.target.value)}
                            type="text"
                            placeholder="Enter your API name"
                            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <p className="text-[#677788] text-sm font-medium mt-2">
                            Limit: 150 characters
                        </p>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="shortDesc"
                            className="block text-sm font-medium mb-2"
                        >
                            Short Description
                        </label>
                        <input
                            id="shortDesc"
                            value={shortDesc ?? ''}
                            onChange={(e) => setShortDesc(e.target.value)}
                            type="text"
                            placeholder="Provide short description of your API. Max 256 letters"
                            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <p className="text-[#677788] text-sm font-medium mt-2">
                            Limit: 400 characters
                        </p>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="categories"
                            className="block text-sm font-medium mb-2"
                        >
                            Categories
                        </label>
                        <select
                            value={categories ?? ''}
                            onChange={(e) => setCategories(e.target.value)}
                            name="categories"
                            id="categories"
                            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="Finance">Finance</option>
                            <option value="Dev Tools">Dev Tools</option>
                            <option value="E-commerce">E-commerce</option>
                            <option value="Geolocation">Geolocation</option>
                            <option value="Sports">Sports</option>
                            <option value="Web Tools APIs">
                                Web Tools APIs
                            </option>
                        </select>
                    </div>

                    <h2 className="border-b border-b-[#e7eaf3] text-xl font-semibold pb-4">
                        Documentation
                    </h2>
                    <div className="mb-6 mt-7">
                        <label
                            htmlFor="docsContent"
                            className="block text-sm font-medium mb-2"
                        >
                            Documentation URL
                        </label>
                        <input
                            type="text"
                            id="docsContent"
                            value={docsUrl ?? ''}
                            onChange={(e) => setDocsUrl(e.target.value)}
                            placeholder="Provide URL to documentation of your API"
                            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="logo"
                            className="block text-sm font-medium mb-2"
                        >
                            Logo URL
                        </label>
                        <input
                            type="text"
                            id="logo"
                            value={logoUrl ?? ''}
                            onChange={(e) => setLogoUrl(e.target.value)}
                            placeholder="Provide URL to your API logo"
                            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="pricing"
                            className="block text-sm font-medium mb-2"
                        >
                            Pricing URL
                        </label>
                        <input
                            type="text"
                            id="pricing"
                            value={pricingUrl ?? ''}
                            onChange={(e) => setPricingUrl(e.target.value)}
                            placeholder="URL to your page with Pricing plans"
                            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="codeExamples"
                            className="block text-sm font-medium mb-2"
                        >
                            Code Examples
                        </label>
                        <textarea
                            id="codeExamples"
                            value={codeExamples ?? ''}
                            onChange={(e) => setCodeExamples(e.target.value)}
                            placeholder='{"Id": 1, "Customer": "Leanne Graham", "Quantity": 1, "Price": "$10.00"}'
                            className="w-full h-32 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <p className="text-[#677788] text-sm font-medium mt-2">
                            Limit: 5000 characters. Enter a sample response in
                            JSON format. You do not need to format the text
                        </p>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                        <button
                            type="button"
                            onClick={handleBack}
                            className="border border-blue-700 transition-all duration-300 text-blue-700 py-4 px-10 rounded-md hover:bg-blue-700 hover:text-white"
                        >
                            Back
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-700 text-white py-4 px-8 rounded-md hover:shadow-md hover:shadow-blue-500"
                        >
                            {loading ? 'Loading...' : 'Add your API'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Provider;
