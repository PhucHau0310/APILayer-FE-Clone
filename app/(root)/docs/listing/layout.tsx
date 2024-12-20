import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import SvgAccount from '@/public/img/abstract-shapes.svg';

const ListingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="bg-blue-900 mt-10 h-32 flex items-center justify-center relative">
                <div className="relative mt-8 mb-4 w-[480px] z-10">
                    <FontAwesomeIcon
                        icon={faSearch}
                        size="1x"
                        color="#677788"
                        className="absolute top-1/2 left-3 transform -translate-y-1/2"
                    />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search for answers"
                        className="w-full rounded-md text-black placeholder:text-[#677788] bg-white shadow-md px-9 py-2 active:outline-none focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                    />
                </div>

                <Image
                    src={SvgAccount}
                    alt="img"
                    className="absolute left-0 right-0 top-0 bottom-0 h-[130px] "
                />
            </div>
            <div>{children}</div>
        </>
    );
};

export default ListingLayout;
