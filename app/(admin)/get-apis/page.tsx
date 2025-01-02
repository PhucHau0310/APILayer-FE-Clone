'use client';

import useApis from '@/hooks/useApis';
import React from 'react';

const APIs = () => {
    const { data, loading, error } = useApis();
    const [isHoveredApi, setHoverdApi] = React.useState(-1);

    console.log(data);
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">List APIs</h1>

            <div className="grid grid-cols-3 gap-4">
                {data?.map((api) => (
                    <div
                        key={api.id}
                        className="bg-[#111C44] p-4 rounded-lg shadow-md relative"
                        onMouseEnter={() => setHoverdApi(api.id)}
                        onMouseLeave={() => setHoverdApi(-1)}
                    >
                        {isHoveredApi === api.id && (
                            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                                <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                                    Edit
                                </button>
                                <button className="bg-[#FF4C61] text-white px-4 py-2 rounded-lg ml-3">
                                    Delete
                                </button>
                            </div>
                        )}

                        <span className="absolute top-2 right-2 bg-[#FF4C61] text-white px-2 py-1 rounded-full">
                            {api.status}
                        </span>

                        <span className="absolute top-12 right-2 bg-green-600 text-white px-2 py-1 rounded-full">
                            {api.basePrice === 0 ? 'Free' : 'Premium'}
                        </span>

                        <img
                            src={api.documentations[0].logoUrl}
                            alt="img"
                            className="w-20 h-20 rounded-full mx-auto"
                        />
                        <h2 className="text-lg font-bold my-2">{api.name}</h2>
                        <h3 className="mb-3 font-semibold">
                            Category:{' '}
                            <span className="text-[#A3AED0]">
                                {api.category}
                            </span>
                        </h3>
                        <p className="text-[#A3AED0]">{api.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default APIs;
