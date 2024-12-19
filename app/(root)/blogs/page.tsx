import Image from 'next/image';
import '@/public/styles/theme.css';
export default function FAQPage() {
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
                                <input
                                    type="text"
                                    name="q"
                                    value=""
                                    className="form-control"
                                    placeholder="Search for blogs"
                                    aria-label="Search for blogs"
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
                        <ol className="breadcrumb breadcrumb-no-gutter font-size-1 mb-0" itemType="https://schema.org/BreadcrumbList">
                            <li className="breadcrumb-item" itemProp="itemListElement" itemType="https://schema.org/ListItem">
                                <a href="/" itemScope itemType="http://schema.org/WebPage" itemProp="item">
                                    <i className="fas fa-home pr-1"></i> <span className="d-none d-md-inline" itemProp="name">Home</span>
                                </a>
                                <meta itemProp="position" content="1" />
                            </li>
                            
                            <li className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                <span itemProp="name">Blogs</span>
                                <meta itemProp="position" content="3" />
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
           

           
            <div className="container space-bottom-2">
                <div className="w-lg-80 mx-lg-auto">
                    <h1 className="h2 mb-3 mb-lg-5">Blogs</h1>



                   
                </div>
            </div>
            
        </main>
    );
};
