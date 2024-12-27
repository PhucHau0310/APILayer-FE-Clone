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



const MarketplaceFAQ = () => {
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
                    <span className="text-blue-500">FAQs</span>
                </Link>
                
                <span>/</span>
                <Link
                    href="/docs"
                    className="hover:opacity-90 flex flex-row items-center gap-2"
                >
                    <span className="text-blue-500">Article</span>
                </Link>
                <span>/</span>

                <span>Marketplace FAQ</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                

                <main id="content" role="main">
            {/* marketplace faq */}
            
            <div className="card border p-4 p-md-7 w-lg-80 mx-lg-auto" data-bis-skin-checked="1">
            <h1 className="text-[#1e2022] font-semibold text-3xl">
            Marketplace FAQ
                </h1>
                <p><br/>Search our marketplace FAQ for answers to anything you might ask. About free API services, build API, Upgrade my plane, Latest offer for API, Read more</p>
                
                <h1 className="text-[#1e2022] font-semibold text-3xl"><br/>
            Marketplace
                </h1> 

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/>Who builds the APIs?</b></span>

                  
                </a>
                <a><br/>All APIs are built by APILayer team, independent software developers and corporates. Each API clearly states the provider's name and logo at their corresonding API description page.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>Can I add/upgrade my plan at any time?</b></span>

                  
                </a>
                <a><br/>Yes, you can upgrade or downgrade anytime you want. We are not asking for any long-term commitments. You can also cancel your API subscription anytime you desire.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>I need larger rate limits from what is offered for an API. Is it possible?</b></span>

                  
                </a>
                <a><br/>The plans currently offered for any API are carefully selected to provide the best performance measures possible. If you need larger setups we can provide dedicated instances for you.

                    <br/><br/>Do not hesitate to contact us at customercare@apilayer.com.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>I wish to place my API in the marketplace.</b></span>

                  
                </a>
                <a><br/>We would be happy to review your API. <br/>Please fill in the form at https://apilayer.com/provider and we will get in touch.</a>

                <h1 className="text-[#1e2022] font-semibold text-3xl"><br/>
                Security
                </h1> 

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/>How do you store passwords?</b></span>

                  
                </a>
                <a><br/>We use industry standard non-reversable hashing algorithms in order to store passwords.

                  <br/><br/>Anybody working for APILayer as well as any third parties aren't capable of seeing your credentials.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>What about my privacy?</b></span>

                  
                </a>
                <a><br/>You can have a look at our privacy statement and terms of service anytime you desire. If you are a registered user, we'll keep you informed if there are any changes with our privacy statement. We are an established business in European Union (Austria), so regulations apply for our business. We are GDPR compliant and always respect your privacy. If you any questions or comments please fill out the form here <br/>http://communications.idera.com/ideraprivacypolicyform</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>How can I unsubscribe from newsletters?</b></span>

                  
                </a>
                <a><br/>The plans currently offered for any API are carefully selected to provide the best performance measures possible. If you need larger setups we can provide dedicated instances for you.

                    You can unsubscribe from newsletters from the unsubscribe button that is below each e-mail. Moreover, there is a subscription management feature at the Accounts section. You can update your communication preferences anytime.</a>

                   
               
                
                <h1 className="text-[#1e2022] font-semibold text-3xl"><br/>
                Account & settings
                </h1> 

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/>How do I change my password?</b></span>

                  
                </a>
                <a><br/>You can update your password anytime at the Account management section.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>How do I delete my account?</b></span>

                  
                </a>
                <a><br/>We are sad to see that you've decided to do so. Just drop us an e-mail at subscriptions@apilayer.com and we'll delete your account and all traces.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>I forgot my password. How do I reset it?</b></span>

                  
                </a>
                <a><br/>You can reset your password from our password recovery page. If you think your credentials are stolen, just drop us a support ticket.

                    </a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>What is an API key? How do I get/reset it?</b></span>

                  
                </a>
                <a><br/>API key is your unique identifier that needs to be provided each time you make a new API request. If API KEY is absent or invalid you'll get an "unauthorized" response.

Your API key is available at the Account Management page. You can reset your API key anytime you desire.</a>

                
                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>What will happen, if I exceed my plan's request limits?</b></span>

                  
                </a>
                <a><br/>Each subscription has daily and monthly rate limits associated with it. If you reach that limits the API will start returning "API rate limit exceeded" error.

                    <br/><br/>Each API request returns a ""rate limit remaining"" header value with each response. You can programmatically check if you need to subscribe to a larger plan or not accordingly.</a>




            </div>

            
            {/* marketplace faq */}

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

export default MarketplaceFAQ;
