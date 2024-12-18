import '@/public/styles/theme.css';

export default function WhyChooseApiLayer() {
    return (
        <main id="content" role="main">
            {/* Hero Section */}
            <div
                className="bg-img-hero"
                style={{ backgroundImage: 'url(https://apilayer.com/assets/svg/components/abstract-shapes-12.svg)' }}
            >
                <div className="container space-top-3 space-top-lg-4 space-bottom-2 position-relative z-index-2">
                    <div className="w-md-80 w-lg-60 text-center mx-md-auto">
                        <h1>Why choose APILayer?</h1>
                        <p>APILayer vs other API marketplaces.</p>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}

            {/* Features Section */}
            <div className="container space-2">
                <div className="row justify-content-lg-between">
                    <div className="col-lg-5 order-lg-2 pl-lg-0">
                        <div
                            className="bg-img-hero h-100 min-h-450rem rounded"
                            style={{ backgroundImage: 'url(https://apilayer.com/assets/img/900x900/img6.jpg)' }}
                        ></div>
                    </div>

                    <div className="col-lg-6 order-lg-1">
                        <div className="pt-8 pb-lg-8">
                            <div className="row">
                                <div className="col-12 mb-3 mb-md-5">
                                    <div className="pr-lg-4">
                                        <span className="h2 text-primary">Curated</span>
                                        <p>All APIs are thoroughly reviewed before they are listed.</p>
                                    </div>
                                </div>

                                <div className="col-12 mb-3 mb-md-5">
                                    <div className="pr-lg-4">
                                        <span className="h2 text-primary">Start Free</span>
                                        <p>Free plans with no credit card required.</p>
                                    </div>
                                </div>

                                <div className="col-12 mb-3 mb-md-5">
                                    <div className="pr-lg-4">
                                        <span className="h2 text-primary">Strict Uptime</span>
                                        <p>On-demand SLA available.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Features Section */}

            {/* API Catalog Section */}
            <div className="container space-bottom-2">
                <div
                    className="text-center py-6"
                    style={{ background: 'url(https://apilayer.com/assets/svg/components/abstract-shapes-19.svg) center no-repeat' }}
                >
                    <h2>Why not take a look at our API catalog?</h2>
                    <p>Maybe you'll find an API you like ;)</p>
                    <span className="d-block mt-5">
            <a className="btn btn-primary transition-3d-hover" href="/">
              Explore
            </a>
          </span>
                </div>
            </div>
            {/* End API Catalog Section */}
        </main>
    );
}
