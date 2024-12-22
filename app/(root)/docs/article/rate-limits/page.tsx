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

                <span>Rate Limits</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                

                <main id="content" role="main">
            {/* Rate Limits */}
            
            <div className="card border p-4 p-md-7 w-lg-80 mx-lg-auto" data-bis-skin-checked="1">
            <h1 className="text-[#1e2022] font-semibold text-3xl">
            Rate Limits
                </h1>

                <article>
                    <p><br/>Rate limits define your allowance for the number of API requests in a given time period. Learn how to manage your rate limits on APILayer.</p>
                    <p><br/>Unless otherwise stated, all APIs in the APILayer ecosystem have rate-limiting enabled.</p>
                    <p><br/>The following headers are sent every time a request is made, showing you the number of requests left in your subscribed plan. </p>
                    <pre><code className="language-http" lang="http"><br/><b>X-RateLimit-Limit-Day: 1000</b>
                    <br/><b>X-RateLimit-Limit-Month: 30000</b>
                    <br/><b>X-RateLimit-Remaining-Day: 997</b>
                    <br/><b>X-RateLimit-Remaining-Month: 29873</b>
                    </code></pre>
                    <p><br/>If you require more/less requests, you can upgrade/downgrade your plan at any time from the <a href="https://apilayer.com/subscriptions">"Subscriptions"</a> page.</p>
                    <p><br/>Once you reach the limit, the API server sends a response with HTTP code 429.</p>
                    <p><br/>You can see the usage in the "API Detail" page as well.</p>
                    <p><img src="https://assets.apilayer.com/docs/api-detail-subscribed-akmsdas8dasnd4522.png"  alt="API Detail Page" className="w-100"/></p>

          </article>
                        
                

                

            </div>

            
            {/* End Rate Limits */}

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
