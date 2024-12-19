import '@/public/styles/theme.css';

export default function IntroductionPage() {
    return (
        <main id="content" role="main">
            {/* Search Section */}
            <div className="bg-navy">
                <div className="bg-img-hero-center"
                     style={{backgroundImage: 'url(https://apilayer.com/assets/svg/components/abstract-shapes-19.svg)'}}>
                    <div className="container space-1">
                        <div className="w-lg-80 mx-lg-auto">
                            {/* Input */}
                            <form className="input-group input-group-merge input-group-borderless" action="/docs/search"
                                  method="GET">
                                <div className="input-group-prepend">
                  <span className="input-group-text" id="askQuestions">
                    <i className="fas fa-search"></i>
                  </span>
                                </div>
                                <input
                                    type="text"
                                    name="q"
                                    value=""
                                    className="form-control"
                                    placeholder="Search for answers"
                                    aria-label="Search for answers"
                                    aria-describedby="askQuestions"
                                />
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
                        <ol className="breadcrumb breadcrumb-no-gutter font-size-1 mb-0"
                            itemType="https://schema.org/BreadcrumbList">
                            <li className="breadcrumb-item" itemProp="itemListElement"
                                itemType="https://schema.org/ListItem">
                                <a href="/" itemScope itemType="http://schema.org/WebPage" itemProp="item">
                                    <i className="fas fa-home pr-1"></i> <span className="d-none d-md-inline"
                                                                               itemProp="name">Home</span>
                                </a>
                                <meta itemProp="position" content="1"/>
                            </li>
                            <li className="breadcrumb-item d-none d-md-block" itemProp="itemListElement"
                                itemType="https://schema.org/ListItem">
                                <a href="/docs" itemType="http://schema.org/WebPage" itemProp="item">
                                    <span itemProp="name">Docs</span>
                                </a>
                                <meta itemProp="position" content="2"/>
                            </li>
                            <li className="breadcrumb-item" itemProp="itemListElement" itemScope
                                itemType="https://schema.org/ListItem">
                                <span itemProp="name">Introduction</span>
                                <meta itemProp="position" content="3"/>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* End Breadcrumbs Section */}

            {/* FAQ Section */}
            <div className="container space-bottom-2">
                <div className="w-lg-80 mx-lg-auto">
                    <h1 className="h2 mb-3 mb-lg-5">Introduction</h1>

                    <a className="card card-frame mb-3 mb-lg-5" href="/docs/article/gdpr-compliance">
                        <div className="card-body">
                            {/* Icon Block */}
                            <div className="media d-block d-sm-flex">
                                <figure className="w-100 max-w-8rem mb-2 mb-sm-0 mr-sm-4">
                                    <img className="img-fluid" src="https://apilayer.com/assets/svg/icons/icon-21.svg"
                                         alt="gdpr-compliance"/>
                                </figure>
                                <div className="media-body">
                                    <h2 className="h3">GDPR Compliance</h2>
                                    <p className="font-size-1 text-body">
                                        Declaration of our organization to meeting and upholding the principles of the
                                        GDPR.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                        </div>
                    </a>

                    <a className="card card-frame mb-3 mb-lg-5" href="/docs/article/getting-started">
                        <div className="card-body">
                            {/* Icon Block */}
                            <div className="media d-block d-sm-flex">
                                <figure className="w-100 max-w-8rem mb-2 mb-sm-0 mr-sm-4">
                                    <img className="img-fluid" src="https://apilayer.com/assets/svg/icons/icon-23.svg"
                                         alt="getting-started"/>
                                </figure>
                                <div className="media-body">
                                    <h2 className="h3">Getting Started</h2>
                                    <p className="font-size-1 text-body">
                                        This is a step-by-step tutorial for getting you familiar with APILayer
                                        Marketplace. Learn how to use it and start integrating APIs to your apps.
                                    </p>
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
