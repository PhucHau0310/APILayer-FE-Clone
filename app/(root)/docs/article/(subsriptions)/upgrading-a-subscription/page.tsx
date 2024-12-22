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

                <span>Upgrading a subscription</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                

                <main id="content" role="main">
            {/* upgrade */}
            
            <div className="card border p-4 p-md-7 w-lg-80 mx-lg-auto" data-bis-skin-checked="1">
            <h1 className="text-[#1e2022] font-semibold text-3xl">
            Upgrading a subscription
                </h1>

                <article>
                    <p><br/>You can easily upgrade your subscription from the "API Detail" page by clicking the "Manage Subscription" button.</p>
                    <p><img src="https://assets.apilayer.com/docs/api-detail-free-plan-9dsnsd7nini.png"  alt="API Detail Page" className="w-100"/></p>
                    <p>&nbsp;</p>
                    <p><br/>Once you click that, you will be brought to the "Plans" page. From here, you can select your desired new plan.</p>
                    <p><img src="https://assets.apilayer.com/docs/plans-ki7dnu3njn3kmklf3.png"  alt="Plans Page" className="w-100"/></p>
                    <p>&nbsp;</p>
                    <p><br/>Once you select your new plan, you will be brought to the "Billing" page. You can enter your billing information here.</p>
                    <p><img src="https://assets.apilayer.com/docs/api-checkout-wef8323jmww.png"  alt="Billing Page" className="w-100"/></p>
                    <p><br/>After clicking the "Complete Order," the subscription will be activated, and you will see the "Subscription successful" page.</p>
                    <p><img src="https://assets.apilayer.com/docs/api-success-82jafedereeivbn.png"  alt="Subscription Successful" className="w-100"/></p>
                    <p><br/>You can view your subscription status.</p>
                    <p><img src="https://assets.apilayer.com/docs/api-detail-subscribed-akmsdas8dasnd4522.png"  alt="API Detail Page" className="w-100"/></p>
                    <p><br/>You can view and manage your subscriptions on the "Subscriptions" page.</p>
                    <p><img src="https://assets.apilayer.com/docs/subscriptions-page-mi983mfke9jend3.png"  alt="Subscriptions Page" className="w-100"/></p>

                </article>        
                

                

            </div>

            
            {/* End upgrade */}

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
