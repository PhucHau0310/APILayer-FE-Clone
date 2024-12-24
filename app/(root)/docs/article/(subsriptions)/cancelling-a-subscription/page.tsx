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

                <span>Cancelling a subscription</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                

                <main id="content" role="main">
            {/* Cancel */}
            
            <div className="card border p-4 p-md-7 w-lg-80 mx-lg-auto" data-bis-skin-checked="1">
            <h1 className="text-[#1e2022] font-semibold text-3xl">
            Cancelling a subscription
                </h1>

                <article>
                    <p><br/>Once you cancel your subscription one of two things happen:</p>
                    <ul>
                        <li><br/>‣ If your subscription is on a free plan, unsubscription will take place immediately.</li>
                        <li>‣ If your subscription is on a paid plan, the subscription would still be usable until the "valid until" date, which is calculated automatically.</li>
                    </ul>

                    <p><br/>To cancel a subscription, navigate to the settings menu -hover to the logo on the upper right-hand side- and click the "Subscriptions" button.</p>
                    <h2 className="h3 mt-7"><br/>Subscription List</h2>
                    <p><br/>The following screen will list all of your subscriptions.</p>
                    <p><img src="https://assets.apilayer.com/docs/subscriptions-page-mi983mfke9jend3.png"  alt="Subscriptions Page" className="w-100"/></p>

                    <h2><br/>Pause subscription</h2>
                    <p><br/>Click the "Cancel" button next to the subscription you would like to cancel and you will see the following message:</p>
                    <p><img src="https://assets.apilayer.com/docs/subscription-cancel-prompt.png"  alt="Cancel Subscription" className="w-100"/></p>
                    <p><br/>If you click on ‘Pause’, you have the opportunity to pause your subscription instead of canceling it straight away. You can pause it until your next billing date and you will be automatically reminded when it gets close to your renewal date.</p>
                    <p><img src="https://assets.apilayer.com/docs/subscription-paused.png"  alt="Pause Subscription" className="w-100"/></p>

                    <h2><br/>Cancel subscription</h2>
                    <p><br/>Click the "Cancel" button next to the subscription you would like to cancel and you will see the following message:</p>
                    <p><img src="https://assets.apilayer.com/docs/subscription-cancel-prompt.png"  alt="Cancel Subscription" className="w-100"/></p>
                    <p><br/>When successfully canceled, you will be redirected to this screen:</p>
                    <p><img src="https://assets.apilayer.com/docs/subscription-cancelled.png"  alt="Subscription Canceled" className="w-100"/></p>
                    <p><br/>If you go back to your subscriptions, you can see how long you have to use the API until the actual cancelation (valid until):</p>
                    <p><img src="https://assets.apilayer.com/docs/subscription-cancelled-valid-until.png"  alt="Subscription List (Canceled Subscription)" className="w-100"/></p>
                </article>
                        
                

                

            </div>

            
            {/* End cancel */}

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
