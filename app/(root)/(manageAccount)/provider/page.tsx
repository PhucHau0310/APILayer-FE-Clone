'use client';

import React from 'react';

const Provider = () => {
    const [apiName, setApiName] = React.useState<string | null>(null);
    const [shortDesc, setShortDesc] = React.useState<string | null>(null);
    const [categories, setCategories] = React.useState<string | null>(null);
    const [docsContent, setDocsContent] = React.useState<string | null>(null);
    const [intergrationGuide, setIntergationGuide] = React.useState<
        string | null
    >(null);
    const [codeExamples, setCodeExamples] = React.useState<string | null>(null);
    return (
        <div className="text-[#1e2022] mt-16 py-8">
            <div className="max-w-[600px] mx-auto">
                <h1 className="border-b border-b-[#e7eaf3] text-2xl font-semibold pb-4">
                    Add Your API
                </h1>

                <form className="mt-6">
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
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                            name="categories"
                            id="categories"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">AI/ML</option>
                            <option value="">Blockchain</option>
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
                            Docs Content
                        </label>
                        <textarea
                            id="docsContent"
                            value={docsContent ?? ''}
                            onChange={(e) => setDocsContent(e.target.value)}
                            placeholder="<h2>How this API Works</h2>
                            <p>Here is the information about how the API works...</p>
                            <h3>Sending a request</h3>
                            <p>To send a request please use examples below</p>"
                            className="w-full h-32 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <p className="text-[#677788] text-sm font-medium mt-2">
                            Limit: 5000 characters
                        </p>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="IntegrationGuide"
                            className="block text-sm font-medium mb-2"
                        >
                            Integration Guide
                        </label>
                        <textarea
                            id="IntegrationGuide"
                            value={intergrationGuide ?? ''}
                            onChange={(e) =>
                                setIntergationGuide(e.target.value)
                            }
                            placeholder="Provide intergration guide"
                            className="w-full h-32 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <p className="text-[#677788] text-sm font-medium mt-2">
                            Limit: 1000 characters
                        </p>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="shortDesc"
                            className="block text-sm font-medium mb-2"
                        >
                            Code Examples
                        </label>
                        <textarea
                            id="shortDesc"
                            value={codeExamples ?? ''}
                            onChange={(e) => setCodeExamples(e.target.value)}
                            placeholder="Provide short description of your API. Max 256 letters"
                            className="w-full h-32 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <p className="text-[#677788] text-sm font-medium mt-2">
                            Limit: 5000 characters. Enter a sample response in
                            JSON format. You do not need to format the text
                        </p>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                        <button
                            // onClick={(e) => handlerSignIn(e)}
                            className="border border-blue-700 transition-all duration-300 text-blue-700 py-4 px-10 rounded-md hover:bg-blue-700 hover:text-white"
                        >
                            {/* {loading ? 'Loading...' : ' Sign In'} */}
                            Back
                        </button>

                        <button
                            type="submit"
                            // onClick={(e) => handlerSignIn(e)}
                            className="bg-blue-700 text-white py-4 px-8 rounded-md hover:shadow-md hover:shadow-blue-500"
                        >
                            {/* {loading ? 'Loading...' : ' Sign In'} */}
                            Add your API
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Provider;
