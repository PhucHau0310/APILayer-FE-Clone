import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedinIn,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className=" bg-[#000e26]">
            <div className="w-[97%] mx-auto py-6">
                <div className="flex flex-row justify-between items-center border-b border-b-[#374151] pb-8">
                    <Link
                        href="/"
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <FontAwesomeIcon
                            icon={faLayerGroup}
                            size="2x"
                            color="#0052cc"
                            className="rotate-[30deg]"
                        />
                        <h1 className="text-2xl text-[#0052cc] font-semibold">
                            API <span className="text-[#27344a]">Layer</span>
                        </h1>
                    </Link>

                    <Link
                        href={'/marketplace'}
                        className="px-4 py-1 bg-white text-[#27344a] rounded-md hover:bg-[#0052cc] hover:text-white transition-all"
                    >
                        Browse all APIs{' '}
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            size="1x"
                            className="ml-2 hover:text-white"
                            color="#0052cc"
                        />
                    </Link>
                </div>

                <div className="flex flex-row justify-between gap-4 mt-8 pb-36 border-b border-b-[#374151]">
                    <div className="w-[20%]  text-[#97a1af]">
                        <h1 className="text-white text-base font-semibold">
                            Sitemap
                        </h1>
                        <p>Marketplace</p>
                        <p>About</p>
                        <p>API Glossary</p>
                        <p>Documentation</p>
                    </div>

                    <div className="w-[20%]  text-[#97a1af]">
                        <p className="mt-6">Contact Sales</p>
                        <p>Helpdesk</p>
                    </div>

                    <div className="w-[20%]  text-[#97a1af]">
                        <h1 className="text-white text-base font-semibold">
                            Connect
                        </h1>
                        <div className="flex flex-row items-center gap-4 mt-3">
                            <Link href={'/'}>
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    size="1x"
                                    color="white"
                                />
                            </Link>
                            <Link href={'/'}>
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    size="1x"
                                    color="white"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href={'/'}>
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    size="1x"
                                    color="white"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href={'/'}>
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    size="1x"
                                    color="white"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href={'/'}>
                                <FontAwesomeIcon
                                    icon={faYoutube}
                                    size="1x"
                                    color="white"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href={'/'}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    size="1x"
                                    color="white"
                                    className="cursor-pointer"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="w-[40%]">
                        <h1 className="text-white text-base font-semibold">
                            Newsletter
                        </h1>
                        <p className="text-[#97a1af] mt-3">
                            Join our newsletter to receive the latest API
                            insights, tips, and updates straight to your inbox.
                        </p>

                        <div className="relative">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                required
                                className="mt-4 w-[97%] bg-transparent border border-[#374151] px-4 py-2 rounded-md"
                                placeholder="Email"
                            />
                            <button className="absolute right-6 top-1/3 translate(-50%, 50%) bg-[#2563eb] px-5 py-1 rounded-md hover:bg-white hover:text-[#2563eb] transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-9 flex flex-row justify-between">
                    <p>© 2024 All rights reserved</p>

                    <div className="flex flex-row gap-10">
                        <span>Privacy Policy</span>
                        <span>Imprint</span>
                        <span>Terms</span>
                        <span>Cookie Preferences</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
