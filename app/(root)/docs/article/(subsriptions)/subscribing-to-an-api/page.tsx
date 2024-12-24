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
                    <span className="text-blue-500">Subscription</span>
                </Link>
                
                <span>/</span>
                <Link
                    href="/docs"
                    className="hover:opacity-90 flex flex-row items-center gap-2"
                >
                    <span className="text-blue-500">Article</span>
                </Link>
                <span>/</span>

                <span>Subscribing to an API plan</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                

                <main id="content" role="main">
            {/* subscribing-to-an-api */}
            
            <div className="card border p-4 p-md-7 w-lg-80 mx-lg-auto" data-bis-skin-checked="1">
            <h1 className="text-[#1e2022] font-semibold text-3xl">
            Subscribing to an API plan
                </h1>

                <article>
                    <p><br/>First of all, go to <a href="https://apilayer.com/marketplace">API Marketplace</a> and search for the API you would like to use/test. </p>
                    <p><br/>Before starting to use any API, you need to subscribe to it first.</p>
                    <p><img src="https://assets.apilayer.com/docs/api-subscribe-mod.png"  alt="API Detail Page" className="w-100"/></p>
                    <p>&nbsp;</p>
                    <p><br/>Once you clicked the "Subscribe" button, you will see the API's plan page. All our APIs have a free plan -unless otherwise stated- so that you can test the waters as you like.</p>
                    <p><img src="https://assets.apilayer.com/docs/api-subcription-ikse93kf7sas.png" alt="API Subscription Plans" className="w-100"/></p>
                    <p><br/>When you choose your plan, you will come to the "Billing Page."</p>
                    <p><img src="https://assets.apilayer.com/docs/api-checkout-wef8323jmww.png" alt="api-checkout-wef8323jmww" className="w-100"/></p>
                    <p>&nbsp;</p>
                    <p><br/>Once you reviewed  the <a href="https://www.ideracorp.com/Legal/Terms-of-Use">Terms of Use</a>,  click the "I accept the APILayer Terms of Use" and fill in the billing information and the "Complete Order" button.</p>
                    <p><img src="https://assets.apilayer.com/docs/api-success-82jafedereeivbn.png" alt="nlp-api-success-82jafedereeivbn" className="w-100"/></p>
                    <p><br/>All is good, now click to the "See API Documentation" and return to the API page. From there, you can use the "Live Demo" feature, where you can use the API from your browser.</p>

          </article>
                        
                

                

            </div>

            
            {/* End subscribing-to-an-api */}

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
