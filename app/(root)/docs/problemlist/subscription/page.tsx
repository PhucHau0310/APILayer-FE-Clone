import '@/public/styles/theme.css';

export default function SubscriptionPage() {
    return (
        <main id="content" role="main">
            {/* Search Section */}
            <div className="bg-navy">
                <div className="bg-img-hero-center" style={{ backgroundImage: 'url(https://apilayer.com/assets/svg/components/abstract-shapes-19.svg)' }}>
                    <div className="container space-1">
                        <div className="w-lg-80 mx-lg-auto">
                            {/* Input */}
                            <form className="input-group input-group-merge input-group-borderless" action="/docs/search" method="GET">
                                <div className="input-group-prepend">
                  <span className="input-group-text" id="askQuestions">
                    <i className="fas fa-search"></i>
                  </span>
                                </div>
                                <input type="text" name="q" className="form-control" placeholder="Search for answers" aria-label="Search for answers" aria-describedby="askQuestions" />
                            </form>
                            {/* End Input */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Section */}

            {/* Breadcrumbs Section */}
            <div className="container space-1">
                <div className="w-lg-80 mx-lg-auto">
                    <nav className="d-inline-block rounded" aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-no-gutter font-size-1 mb-0"  itemType="https://schema.org/BreadcrumbList">
                            <li className="breadcrumb-item" itemProp="itemListElement"  itemType="https://schema.org/ListItem">
                                <a href="/" itemScope itemType="http://schema.org/WebPage" itemProp="itemListElement">
                                    <i className="fas fa-home pr-1"></i>
                                    <span className="d-none d-md-inline" itemProp="name">Home</span>
                                </a>
                                <meta itemProp="position" content="1" />
                            </li>
                            <li className="breadcrumb-item d-none d-md-block" itemProp="itemListElement"  itemType="https://schema.org/ListItem">
                                <a href="/docs" itemScope itemType="http://schema.org/WebPage" itemProp="itemListElement">
                                    <span itemProp="name">Docs</span>
                                </a>
                                <meta itemProp="position" content="2" />
                            </li>
                            <li className="breadcrumb-item" itemProp="itemListElement"  itemType="https://schema.org/ListItem">
                                <span itemProp="name">Subscription</span>
                                <meta itemProp="position" content="3" />
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* End Breadcrumbs Section */}

            {/* FAQ Section */}
            <div className="container space-bottom-2">
                <div className="w-lg-80 mx-lg-auto">
                    <h1 className="h2 mb-3 mb-lg-5">Subscription</h1>

                    <a className="card card-frame mb-3 mb-lg-5" href="/docs/article/cancelling-a-subscription">
                        <div className="card-body">
                            {/* Icon Block */}
                            <div className="media d-block d-sm-flex">
                                <figure className="w-100 max-w-8rem mb-2 mb-sm-0 mr-sm-4">
                                    <img className="img-fluid" src="https://apilayer.com/assets/svg/icons/icon-32.svg" alt="cancelling-a-subscription" />
                                </figure>
                                <div className="media-body">
                                    <h2 className="h3">Cancelling a subscription</h2>
                                    <p className="font-size-1 text-body">You may cancel your subscription to an API anytime. Your paid plan subscription will still be valid until the end of your subscription term.</p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                        </div>
                    </a>

                    <a className="card card-frame mb-3 mb-lg-5" href="/docs/article/upgrading-a-subscription">
                        <div className="card-body">
                            {/* Icon Block */}
                            <div className="media d-block d-sm-flex">
                                <figure className="w-100 max-w-8rem mb-2 mb-sm-0 mr-sm-4">
                                    <img className="img-fluid" src="https://apilayer.com/assets/svg/icons/icon-30.svg" alt="upgrading-a-subscription" />
                                </figure>
                                <div className="media-body">
                                    <h2 className="h3">Upgrading a subscription</h2>
                                    <p className="font-size-1 text-body">Learn how to manage your subscriptions with one click. Easy upgrade based on your need. Simply select the plan you would like to change to.</p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                        </div>
                    </a>

                    <a className="card card-frame mb-3 mb-lg-5" href="/docs/article/subscribing-to-an-api">
                        <div className="card-body">
                            {/* Icon Block */}
                            <div className="media d-block d-sm-flex">
                                <figure className="w-100 max-w-8rem mb-2 mb-sm-0 mr-sm-4">
                                    <img className="img-fluid" src="https://apilayer.com/assets/svg/icons/icon-28.svg" alt="subscribing-to-an-api" />
                                </figure>
                                <div className="media-body">
                                    <h2 className="h3">Subscribing to an API plan</h2>
                                    <p className="font-size-1 text-body">How to subscribe to a plan. Choose the best subscription plan that matches with your application needs and start using your API immediately.</p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                        </div>
                    </a>

                    <a className="card card-frame mb-3 mb-lg-5" href="/docs/article/downgrading-a-subscription">
                        <div className="card-body">
                            {/* Icon Block */}
                            <div className="media d-block d-sm-flex">
                                <figure className="w-100 max-w-8rem mb-2 mb-sm-0 mr-sm-4">
                                    <img className="img-fluid" src="https://apilayer.com/assets/svg/icons/icon-43.svg" alt="downgrading-a-subscription" />
                                </figure>
                                <div className="media-body">
                                    <h2 className="h3">Downgrading a subscription</h2>
                                    <p className="font-size-1 text-body">Learn how to manage your subscriptions with one click. Easy downgrade based on your need. Simply select the plan you would like to change to.</p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                        </div>
                    </a>

                    <a className="card card-frame mb-3 mb-lg-5" href="/docs/article/rate-limits">
                        <div className="card-body">
                            {/* Icon Block */}
                            <div className="media d-block d-sm-flex">
                                <figure className="w-100 max-w-8rem mb-2 mb-sm-0 mr-sm-4">
                                    <img className="img-fluid" src="https://apilayer.com/assets/svg/icons/icon-20.svg" alt="rate-limits" />
                                </figure>
                                <div className="media-body">
                                    <h2 className="h3">Rate Limits</h2>
                                    <p className="font-size-1 text-body">Rate limits define your allowance for the number of API requests in a given time period. Learn how to manage your rate limits on APILayer.</p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                        </div>
                    </a>

                </div>
            </div>
            {/* End FAQ Section */}
        </main>
    );
}
