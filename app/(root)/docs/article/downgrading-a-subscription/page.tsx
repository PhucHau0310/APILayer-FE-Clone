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



const Account = () => {
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

                <span>Downgrading a subscription</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                

                <main id="content" role="main">
            {/* Downgrading a subscription */}
            
            <div className="card border p-4 p-md-7 w-lg-80 mx-lg-auto" data-bis-skin-checked="1">
            <h1 className="text-[#1e2022] font-semibold text-3xl">
            Downgrading a subscription
                </h1>

                <article>
                    <p><br/>You can easily upgrade/downgrade your subscription at any time from the "Subscriptions" page by clicking the "Manage" button for relevant API.</p>
                    <p><img src="https://assets.apilayer.com/docs/subscriptions-page-mi983mfke9jend3.png"  alt="Subscriptions Page" className="w-100"/></p>
                    <p><br/>Once you clicked the "Manage" button, you will be shown the "Plans" page. Select the plan you want to downgrade to.</p>
                    <p><img src="https://assets.apilayer.com/docs/plans-page-93jmd8i4j.png"  alt="Plans Page" className="w-100"/></p>
                    <p><br/>Enter any billing details if they are missing.</p>
                    <p><img src="https://assets.apilayer.com/docs/api-checkout-wef8323jmww.png"  alt="Billing Page" className="w-100"/></p>
                    <p>&nbsp;</p>
                    <p><br/>Click to the "Complete Order" button, and your subscription will be changed.</p>
                    <p><img src="https://assets.apilayer.com/docs/api-success-82jafedereeivbn.png"  alt="Subscription Successful" className="w-100"/></p>
                    <p>&nbsp;</p>
                    <p><br/>As you can see in the "API Detail" page, you are now subscribed to "Free Plan,"</p>
                    <p><img src="https://assets.apilayer.com/docs/api-detail-page-mf94miwnekr4f.png"  alt="API Detail Page" className="w-100"/></p>

                </article>
                        
                

                

            </div>

            
            {/* Downgrading a subscription */}

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

export default Account;
