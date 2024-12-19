import '@/public/styles/theme.css';
import React from 'react';
export default function AccountPage() {
    return (
        <main id="content" role="main">
            {/* Search Section */}
            <div className="bg-navy">
                <div
                    className="bg-img-hero-center"
                    style={{ backgroundImage: "url(https://apilayer.com/assets/svg/components/abstract-shapes-19.svg)" }}
                >
                    <div className="container space-1">
                        <div className="w-lg-80 mx-lg-auto">
                            {/* Input */}
                            <form className="input-group input-group-merge input-group-borderless" action="/docs/search" method="GET">
                                <div className="input-group-prepend">
                  <span className="input-group-text" id="askQuestions">
                    <i className="fas fa-search"></i>
                  </span>
                                </div>
                                <input
                                    type="text"
                                    name="q"
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
                        <ol
                            className="breadcrumb breadcrumb-no-gutter font-size-1 mb-0"

                            itemType="https://schema.org/BreadcrumbList"
                        >
                            <li
                                className="breadcrumb-item"
                                itemProp="itemListElement"

                                itemType="https://schema.org/ListItem"
                            >
                                <a
                                    href="/"

                                    itemType="http://schema.org/WebPage"
                                    itemProp="item"
                                >
                                    <i className="fas fa-home pr-1"></i> <span className="d-none d-md-inline" itemProp="name">Home</span>
                                </a>
                                <meta itemProp="position" content="1" />
                            </li>
                            <li
                                className="breadcrumb-item d-none d-md-block"
                                itemProp="itemListElement"

                                itemType="https://schema.org/ListItem"
                            >
                                <a
                                    href="/docs"

                                    itemType="http://schema.org/WebPage"
                                    itemProp="item"
                                >
                                    <span itemProp="name">Docs</span>
                                </a>
                                <meta itemProp="position" content="2" />
                            </li>
                            <li
                                className="breadcrumb-item"
                                itemProp="itemListElement"

                                itemType="https://schema.org/ListItem"
                            >
                                <span itemProp="name">Account</span>
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
                    <h1 className="h2 mb-3 mb-lg-5">Account</h1>

                    {/* Card 1 */}
                    <a className="card card-frame mb-3 mb-lg-5" href="/docs/article/purchase-history">
                        <div className="card-body">
                            <div className="media d-block d-sm-flex">
                                <figure className="w-100 max-w-8rem mb-2 mb-sm-0 mr-sm-4">
                                    <img
                                        className="img-fluid"
                                        src="https://apilayer.com/assets/svg/icons/icon-39.svg"
                                        alt="purchase-history"
                                    />
                                </figure>
                                <div className="media-body">
                                    <h2 className="h3">Purchase history</h2>
                                    <p className="font-size-1 text-body">
                                        Here you can download your invoices and see your purchase history
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Card 2 */}
                    <a className="card card-frame mb-3 mb-lg-5" href="/docs/article/managing-passwords">
                        <div className="card-body">
                            <div className="media d-block d-sm-flex">
                                <figure className="w-100 max-w-8rem mb-2 mb-sm-0 mr-sm-4">
                                    <img
                                        className="img-fluid"
                                        src="https://apilayer.com/assets/svg/icons/icon-46.svg"
                                        alt="managing-passwords"
                                    />
                                </figure>
                                <div className="media-body">
                                    <h2 className="h3">Managing Passwords</h2>
                                    <p className="font-size-1 text-body">
                                        Security is of paramount importance in APILayer. Your passwords are stored as a SHA256 hash,
                                        which is not reversible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Card 3 */}
                    <a className="card card-frame mb-3 mb-lg-5" href="/docs/article/communication-preferences">
                        <div className="card-body">
                            <div className="media d-block d-sm-flex">
                                <figure className="w-100 max-w-8rem mb-2 mb-sm-0 mr-sm-4">
                                    <img
                                        className="img-fluid"
                                        src="https://apilayer.com/assets/svg/icons/icon-15.svg"
                                        alt="communication-preferences"
                                    />
                                </figure>
                                <div className="media-body">
                                    <h2 className="h3">Communication Preferences</h2>
                                    <p className="font-size-1 text-body">
                                        We respect your privacy and personal preferences. Tell us how you wish to be contacted.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Card 4 */}
                    <a className="card card-frame mb-3 mb-lg-5" href="/docs/article/managing-api-keys">
                        <div className="card-body">
                            <div className="media d-block d-sm-flex">
                                <figure className="w-100 max-w-8rem mb-2 mb-sm-0 mr-sm-4">
                                    <img
                                        className="img-fluid"
                                        src="https://apilayer.com/assets/svg/icons/icon-47.svg"
                                        alt="managing-api-keys"
                                    />
                                </figure>
                                <div className="media-body">
                                    <h2 className="h3">Managing API Keys</h2>
                                    <p className="font-size-1 text-body">
                                        API key is used to authenticate requests and essential to use APIs through APILayer. Learn how to
                                        manage your API keys and authentication.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Card 5 */}
                    <a className="card card-frame mb-3 mb-lg-5" href="/docs/article/managing-payment-methods">
                        <div className="card-body">
                            <div className="media d-block d-sm-flex">
                                <figure className="w-100 max-w-8rem mb-2 mb-sm-0 mr-sm-4">
                                    <img
                                        className="img-fluid"
                                        src="https://apilayer.com/assets/svg/icons/icon-31.svg"
                                        alt="managing-payment-methods"
                                    />
                                </figure>
                                <div className="media-body">
                                    <h2 className="h3">Managing payment methods</h2>
                                    <p className="font-size-1 text-body">
                                        Manage your payment methods. You can add/remove credit cards easily from this screen. You can also
                                        view your existing invoices here.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            {/* End FAQ Section */}
        </main>
    );
};

