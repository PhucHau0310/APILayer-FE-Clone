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



const Zulu = () => {
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
                    <span className="text-blue-500">Introduction</span>
                </Link>
                
                <span>/</span>
                <Link
                    href="/docs"
                    className="hover:opacity-90 flex flex-row items-center gap-2"
                >
                    <span className="text-blue-500">Article</span>
                </Link>
                <span>/</span>

                <span>Getting Started</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                

                <main id="content" role="main">
            {/* Started */}
            
            <div className="card border p-4 p-md-7 w-lg-80 mx-lg-auto" data-bis-skin-checked="1">
            <h1 className="text-[#1e2022] font-semibold text-3xl">
            Getting Started
                </h1>

                <article>
                    <p><br/>In this guide, you will get familiarized with the APILayer  ecosystem, and find your way into the <a href="https://apilayer.com/marketplace">APILayer Marketplace</a> to find your API and use it.</p>

                    <h2 className="h3 mt-7 text-black"><b>Discover your API</b></h2>

                    <p><br/>Hundreds of APIs are at your fingertips at <a href="https://apilayer.com/marketplace">APILayer  Marketplace</a>. Here you can search for keywords to find your desired API.</p>

                    <p>Once you have found an API you are interested, the details page includes info, documentation and also pricing information as well.</p>

                    <figure>
                        <img src="https://assets.apilayer.com/docs/api-detail-mod.png"  className="w-100"/>
                        
                    </figure>

                    <h2 className="h3 mt-7 text-black"><b>Subscription</b></h2>

                    <p><br/>To be able to use an API, you must first subscribe to it. Almost all of our API's has a free plan that you can subscribe to.</p>

                    <figure>
                        <img src="https://assets.apilayer.com/docs/api-subscribe-mod.png"  className="w-100"/>
                        
                    </figure>

                    <h2 className="h3 mt-7 text-black"><b>Live Demo</b></h2>

                    <p><br/>Live Demo feature allows you to test the API within your browser—no need to install or code anything. You can modify all the parameters as you like.
                    Also, your API key is automatically populated and ready to use.</p>

                    <p><br/>Live Demo feature includes code to interact with the API from many languages; you can start your project by copying the code on your preferred language.</p>

                    <figure>
                    <img src="https://assets.apilayer.com/docs/live-demo-mod.png"  className="w-100"/>
                    
                    </figure>

                    <h2 className="h3 mt-7 text-black"><b>Getting your API key</b></h2>

                    <p><br/>Your API Key can be found on your <a href="https://apilayer.com/account">Account Page</a>.</p>

                    <figure>
                    <img src="https://assets.apilayer.com/docs/api_key_prompt-api-account-page-mod.png" alt="prompt-api-account-page" className="w-100"/>
                    
                    </figure>

                    <h2 className="h3 mt-7 text-black"><b>Start integrating</b></h2>

                    <p><br/>Now you have found your API, your API key, your sample codes for many languages, you are ready to get to integrating!</p>

                    <p><br/>If you require assistance please contact us on our <a href="/support" className="hover-link">support page</a>.</p>

                    

  </article>
                
                

                

            </div>

            
            {/* End Started */}

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

export default Zulu;
