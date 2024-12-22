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

                <span>Communication Preferences</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                

                <main id="content" role="main">
            {/* Comunication */}
            
            <div className="card border p-4 p-md-7 w-lg-80 mx-lg-auto" data-bis-skin-checked="1">
            <h1 className="text-[#1e2022] font-semibold text-3xl">
            Communication Preferences
                </h1>
                
                <p>We respect your privacy and personal preferences. Tell us how you wish to be contacted.</p>
                <article>
                    <b><h2 className="h3 mt-7 text-black">Privacy</h2></b>
                    <p>Your privacy and security are of paramount importance to APILayer. As detailed in our <a href="https://www.ideracorp.com/Legal/gdpr">GDPR Compliance</a> document, we are fully compliant and upholding the principles of the GDPR. We always respect and uphold your privacy; by default, all communication subjects are enabled; however, once you decide which ones you want to keep, you can quickly and permanently change your subscription to the topics we send. Some communications are not affected by this as they are required for the essential operation of the services such as "Forgot Password" emails.</p>
                    <b><h2 className="h3 mt-7 text-black">Mailing preferences</h2></b>
                    <p>Mailing preferences can be set from the <a href="https://apilayer.com/account">Account Page</a>, the "Communication Preferences" section. These settings are directly connected to our emailing platform, and they are activated almost immediately.</p>
                    <p>"Announcements" can include the product or feature updates, company updates as well as new documentation announcements.</p>
                    <p>"New APIs added" is sent out when a new API is available on APILayer.</p>
                    <p>"Billing &amp; Invoices" includes new invoices and other billing-related communication--an important one to keep.</p>
                    <p>"Scheduled maintenance notifications," are notifications of maintenance. From time to time, we might perform scheduled infrastructure maintenance--another important one to keep.</p>
                    <img src="https://assets.apilayer.com/docs/communication-preferences-ikjamsd7as5djalsdklas.png" alt="communication-preferences" className="w-100"/>

                </article>

                

            </div>

            
            {/* End Comunication */}

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
