import '@/public/styles/theme.css';
export default function DocsPage() {
    return (
        <main id="content" role="main">
            {/* Hero Section */}
            <div className="bg-light">
                <div className="container">
                    <div className="row justify-content-md-between">
                        <div className="col-md-6 space-2 space-top-lg-2 space-bottom-lg-3">
                            <div className="mb-5">
                                <h1>How can we help?</h1>
                            </div>

                            {/* Input */}
                            <form className="input-group input-group-merge mb-3" action="/docs/problemlist/search" method="GET">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="askQuestions">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    name="q"
                                    className="form-control"
                                    placeholder="Search the knowledge base..."
                                    aria-label="Search the knowledge base..."
                                    aria-describedby="askQuestions"
                                />
                            </form>
                            {/* End Input */}

                            {/* Text/Links */}
                            <p className="font-size-1 text-dark">
                                Popular help topics:
                                <a className="font-weight-bold" href="/docs/search?q=upgrade">
                                    upgrade,
                                </a>
                                <a className="font-weight-bold ml-1" href="/docs/search?q=subscription">
                                    subscription,
                                </a>
                                <a className="font-weight-bold ml-1" href="/docs/search?q=api+key">
                                    api key,
                                </a>
                                <a className="font-weight-bold ml-1" href="/docs/search?q=limit">
                                    limit
                                </a>
                            </p>
                            {/* End Text/Links */}
                        </div>

                        <div className="col-md-5 align-self-md-end d-none d-md-inline-block">
                            {/* SVG Icon */}
                            <figure className="mb-n3">
                                <img className="img-fluid" src="https://apilayer.com/assets/svg/illustrations/reading.svg" alt="APILayer Documentation" />
                            </figure>
                            {/* End SVG Icon */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}

            {/* FAQ Section */}
            <div className="container">
                <div className="border-bottom space-2 space-lg-3">
                    <div className="row">
                        {[
                            {
                                href: '/docs/problemlist/account',
                                icon: 'https://apilayer.com/assets/svg/icons/icon-46.svg',
                                title: 'Account',
                                description: 'Manage passwords, communication preferences, API keys and payment methods.',
                                articles: '5 articles in this collection',
                            },
                            {
                                href: '/docs/problemlist/faq',
                                icon: 'https://apilayer.com/assets/svg/icons/icon-12.svg',
                                title: 'FAQs',
                                description: 'Frequently Asked Questions',
                                articles: '2 articles in this collection',
                            },
                            {
                                href: '/docs/problemlist/getting-started',
                                icon: 'https://apilayer.com/assets/svg/icons/icon-1.svg',
                                title: 'Introduction',
                                description: 'Everything you need to know to start engaging with APILayer Marketplace.',
                                articles: '2 articles in this collection',
                            },
                            {
                                href: '/docs/problemlist/subscription',
                                icon: 'https://apilayer.com/assets/svg/icons/icon-39.svg',
                                title: 'Subscription',
                                description: 'Learn how to subscribe to an API, manage your subscription plans, monitor your rate limits.',
                                articles: '5 articles in this collection',
                            },
                            {
                                href: '/docs/problemlist/tips-tricks',
                                icon: 'https://apilayer.com/assets/svg/icons/icon-24.svg',
                                title: 'Tips and Tricks',
                                description: 'Useful tips and tricks in order to excel our services',
                                articles: '2 articles in this collection',
                            },
                        ].map(({ href, icon, title, description, articles }, index) => (
                            <div className="col-lg-6 mb-3 mb-lg-5" key={index}>
                                <a className="card card-frame h-100" href={href}>
                                    <div className="card-body">
                                        <div className="media d-block d-sm-flex">
                                            <figure className="w-100 max-w-8rem mb-2 mb-sm-0 mr-sm-4">
                                                <img className="img-fluid" src={icon} alt={title} />
                                            </figure>
                                            <div className="media-body">
                                                <h2 className="h3">{title}</h2>
                                                <p className="font-size-1 text-body">{description}</p>
                                                <div className="media">
                                                    <div className="media-body">
                                                        <small className="d-block text-dark">{articles}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* End FAQ Section */}

            {/* Featured Articles Section */}
            <div className="container space-2 space-lg-3">
                <div className="row">
                    {[
                        {
                            icon: 'https://apilayer.com/assets/svg/icons/icon-21.svg',
                            title: 'Featured articles',
                            articles: [
                                { href: '/docs/article/gdpr-compliance', text: 'GDPR Compliance' },
                                { href: '/docs/article/provider-faq', text: 'Provider FAQ' },
                                { href: '/docs/article/upgrading-a-subscription', text: 'Upgrading a subscription' },
                                { href: '/docs/article/managing-api-keys', text: 'Managing API Keys' },
                            ],
                        },
                        {
                            icon: 'https://apilayer.com/assets/svg/icons/icon-2.svg',
                            title: 'Most helpful articles',
                            articles: [
                                { href: '/docs/article/getting-started', text: 'Getting Started' },
                                { href: '/docs/article/managing-api-keys', text: 'Managing API Keys' },
                                { href: '/docs/article/marketplace-faq', text: 'Marketplace FAQ' },
                            ],
                        },
                        {
                            icon: 'https://apilayer.com/assets/svg/icons/icon-4.svg',
                            title: 'Popular topics',
                            articles: [
                                { href: '/docs/problemlist/account', text: 'Account' },
                                { href: '/docs/problemlist/faq', text: 'FAQs' },
                            ],
                        },
                    ].map(({ icon, title, articles }, index) => (
                        <div className="col-md-4 mb-5 mb-md-0" key={index}>
                            <figure className="w-100 max-w-8rem mb-4">
                                <img className="img-fluid" src={icon} alt={title} />
                            </figure>
                            <div className="mb-4">
                                <h3>{title}</h3>
                            </div>
                            <ul className="list-unstyled list-article">
                                {articles.map(({ href, text }, subIndex) => (
                                    <li key={`${index}-${subIndex}`}>
                                        <a className="link-underline" href={href}>
                                            {text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            {/* End Featured Articles Section */}
        </main>
    );
}
