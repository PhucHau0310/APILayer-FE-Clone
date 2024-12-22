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

                <span>Provider FAQ</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                

                <main id="content" role="main">
            {/* marketplace faq */}
            
            <div className="card border p-4 p-md-7 w-lg-80 mx-lg-auto" data-bis-skin-checked="1">
            <h1 className="text-[#1e2022] font-semibold text-3xl">
            Provider FAQ
                </h1>
                <p><br/>Search our Provider FAQ for answers or queries to anything you might ask. About free API services, build API, Upgrade my plane, Latest offer for API, Read more</p>
                


                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/>Who can be an API provider? (Eligibility &amp; Requirements)</b></span>

                  
                </a>
                <a><br/>Anyone who can code and deploy an API can be a provider regardless of the legal status of the entity. So you can be a provider as a person or as a company. API applications will be reviewed and be accepted only if they meet our requirements.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>How can I be an API provider?</b></span>

                  
                </a>
                <a><br/>You can submit your application for review from this page.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>What kind of APIs can be listed on APILayer?</b></span>

                  
                </a>
                <a><br/>APILayer is an open API marketplace but a carefully curated one. We accept all kinds of APIs. Currently, there are machine learning APIs, financial data APIs, URL shorteners, and many others. We try to handpick the best API available for a single purpose and market and eliminate duplicate projects. We also accept APIs similar to the ones already listed if several features are different and fundamentally better or marketed to different target segments.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>How are the subscription fees (monthly price of your API) calculated?</b></span>

                  
                </a>
                <a><br/>Subscription fees are totally up to you. The provider decides on pricing; however, APILayer might suggest changes to increase sales and adjust prices according to market conditions.</a>

              

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>What should the description of the API include (aka description guideline)?</b></span>

                  
                </a>
                <a><br/>•The description should preferably be under 250 words for better readability.
                <br/>•The description should briefly explain how the API works. You may include the operating logic, queried libraries or algorithms used.
                <br/>•The description should mention any official sources or certifications regarding the data in the responses.
                <br/>•A sample request and response should be provided in text or image format.
                <br/>•Use cases should be listed to show subscribers how they can make good use of your API.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>How much will I earn as the API provider?</b></span>

                  
                </a>
                <a><br/>This depends on how you position your API in the market. If you provide a solution to a critical need and are the only developer to provide that solution: we bet revenue will skyrocket.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>Who will host the API?</b></span>

                  
                </a>
                <a><br/>The API Provider hosts the API.</a>

                   
               
                
            

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>How is the payout handled? What is the period?</b></span>

                  
                </a>
                <a><br/>The payout is handled on a monthly basis. If the provider is a company, an invoice must be created for APILayer for the amount distributed to the provider. If the provider is a person, they don't need to provide an invoice and the payments are sent directly to the given bank account.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>How are taxes handled for the payouts?</b></span>

                  
                </a>
                <a><br/>Taxes are handled according to the country in which the provider resides.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>Can I be an API provider as an individual (with no company)?</b></span>

                  
                </a>
                <a><br/>Yes! You can submit your application on this page. If accepted, you can list your API and start earning. The payout will be handled without an invoice and the money will be transferred directly to your bank account.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>Do I need to create an invoice to receive payout?</b></span>

                  
                </a>
                <a><br/>If you are a company, yes. If you are an individual, no.</a>

                
                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>Do I lose intellectual property if I list my API on APILayer?</b></span>

                  
                </a>
                <a><br/>Absolutely not. All intellectual property regarding your API is protected by our provider agreement and none is transferred to APILayer. We also provide non exclusivity for the providers so they can monetize their work in whichever environment they like.</a>


                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>Which cloud hosting providers can I host my API with?</b></span>

                  
                </a>
                <a><br/>Amazon Web Services, Google Cloud Platform, Microsoft Azure, Digital Ocean, Scaleway, and Hetzner Cloud. Moreover, you should get a load balancer service from the cloud service provider. Thanks to this, when it is needed, you can set multiple API nodes and connect them via a single endpoint.</a>

                
                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>What are the container requirements?</b></span>

                  
                </a>
                <a><br/>We don’t need to see the code inside your container. You can encrypt it. You should maintain main and development branches for your codebase. You can use the Docker Hub for the container registry. However, if you have a private container registry, you should share an authenticated user for this registry.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>How do I release new versions?</b></span>

                  
                </a>
                <a><br/>We’ll test and verify your new releases. Before any changes to the live project, you should be able to share a development or test environment that includes the new endpoint addresses and updated documentation for QA purposes. Adding the version information on your API address will make everything easier for us to check and verify. For example if your live API address is api.developer.com/v10/ you can submit your updated address as test.api.developer.com/v21/ for the new release.</a>


                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>Where can I get training?</b></span>

                  
                </a>
                <a><br/>We are continuously generating new content for API developers. You can always check our blog for articles on API development, hosting and other technical topics. You should also subscribe to our newsletter to get the latest news about our webinars and technology trends.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>What are the performance requirements?</b></span>

                  
                </a>
                <a><br/>We vigilantly monitor the performance and uptime information for all the APIs listed on our platform regardless of the hosting option. Giving a fast response is as important as maintaining 100% uptime. We can scale in seconds to meet increasing demand thanks to our cloud based container architecture.</a>

                <a className="btn btn-link btn-block d-flex justify-content-between card-btn bg-white px-0"  role="button" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                  <span className="text-black"><b><br/><br/>Who will give support to customers?</b></span>

                  
                </a>
                <a><br/>API Providers are responsible for providing support for their API.</a>

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

export default Account;
