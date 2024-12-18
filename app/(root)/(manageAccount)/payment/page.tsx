import Link from 'next/link';

const Payment = () => {
    return (
        <div className="mt-20 text-[#1e2022]">
            <h1 className="text-4xl text-center font-semibold mb-16">
                Payment Methods
            </h1>

            <div className="rounded-md shadow-md max-w-5xl mx-auto text-center mb-32 py-4">
                <p className="">
                    You don't have any credit cards linked to this account yet.
                    Would you like to add one?
                </p>
                <Link
                    href={'/'}
                    className="bg-blue-600 text-white px-4 py-2 mt-3 rounded-md inline-block hover:shadow-md hover:shadow-blue-500 transition-all"
                >
                    Add Card
                </Link>
            </div>
        </div>
    );
};

export default Payment;
