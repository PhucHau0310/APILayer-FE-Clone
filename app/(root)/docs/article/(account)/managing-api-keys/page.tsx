import {
    faEnvelope,
    faHome,
    faMoneyCheck,
    faSearch,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import SvgAccount from '@/public/img/abstract-shapes.svg';
import Link from 'next/link';



const ManagingApiKeys = () => {
    return (
        <div className="mt-10 mb-20">
            <div className="text-[#677788] flex flex-row items-center gap-2 mt-10 max-w-screen-lg mx-auto">
                <Link
                    href="/"
                    className="hover:opacity-90 flex flex-row items-center gap-2"
                >
                    <FontAwesomeIcon icon={faHome} size="1x" color="blue" />
                    <span className="text-blue-500">Home</span>
                </Link>

                <span>/</span>
                <Link
                    href="/docs"
                    className="hover:opacity-90 flex flex-row items-center gap-2"
                >
                    <span className="text-blue-500">Docs</span>
                </Link>
                
                <span>/</span>

                <Link
                    href="/docs"
                    className="hover:opacity-90 flex flex-row items-center gap-2"
                >
                    <span className="text-blue-500">Account</span>
                </Link>
                
                <span>/</span>
                <Link
                    href="/docs"
                    className="hover:opacity-90 flex flex-row items-center gap-2"
                >
                    <span className="text-blue-500">Article</span>
                </Link>
                <span>/</span>

                <span>Managing API Keys</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                

                <main id="content" role="main">
            {/* API Keys */}
            
            <div className="card border p-4 p-md-7 w-lg-80 mx-lg-auto" data-bis-skin-checked="1">
            <h1 className="text-[#1e2022] font-semibold text-3xl">
           Managing API Keys
                </h1>

                <article>
                    <p>API keys are the essential authentication mechanism to use an API in APILayer. The API key should be sent as a header called <code>apikey</code>.</p>
                    <p>You can manage your API key on <a href="https://apilayer.com/account">Account Page</a>.</p>

                    <b><h2 className="h3 mt-7 text-black">Getting your API key</h2></b>
                    <p>API key can be found in <a href="https://apilayer.com/account">Account Page</a> under the "Your API Key" section.</p>
                    <img src="https://assets.apilayer.com/docs/api_key_prompt-api-account-page-mod.png" className="w-100"  alt="prompt-api-account-page"/>

                    <b><h2 className="h3 mt-7 text-black">Generating a new API key</h2></b>
                    <p>From the same page you can generate a new API key, please note that this action will revoke the previous API key.</p>

                    <b><h2 className="h3 mt-7 text-black">Revoking an API key</h2></b>
                    <p>To revoke an API key by clicking the "Generate New API Key" button.</p>
                </article>
                
                

                

            </div>

            
            {/* End API Keys */}

            <div className="text-center border-top border-bottom my-6 py-6" id="feedback-block" data-bis-skin-checked="1">
                
                <b><h4 className="mb-4 text-black">
                
                Was this article helpful?
                </h4></b>

                <button type="button" id="feedback" className="btn btn-sm btn-primary btn-wide mb-2 mx-1" >Yes, thanks!</button>
                <button type="button" id="feedback" className="btn btn-sm btn-soft-primary btn-wide mb-2 mx-1" >Not really</button>
            </div>

            

            
        </main>

                
            </div>
        </div>
    );
};

export default ManagingApiKeys;
