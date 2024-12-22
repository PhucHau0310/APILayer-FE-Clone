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

                <span>Managing Payment Methods</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                

                <main id="content" role="main">
            {/* M-Payment */}
            
            <div className="card border p-4 p-md-7 w-lg-80 mx-lg-auto" data-bis-skin-checked="1">
            <h1 className="text-[#1e2022] font-semibold text-3xl">
            Managing Payment Methods
                </h1>
                
                <article>
                    <p>Adding / removing payment methods are quickly found under "Payment Methods" link under the Settings Menu."</p>
                    <img src="https://assets.apilayer.com/docs/settings-menu-93mf83mfu3fr.png"  alt="Settings Menu" className="w-100"/>
                    <p>You can new cards via the "Add Card" button on the "Payment Methods" page.</p>
                    <img src="https://assets.apilayer.com/docs/add-card-52552kjkjhgd8ij3.png"  alt="Add Card" className="w-100"/>
                    <p>Just enter the details of your new card and click "Save Card" button.</p>
                    <img src="https://assets.apilayer.com/docs/add-card-form-mkwfe83mfo3mj9j.png"  alt="Add Card Form" className="w-100"/>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>You can also delete your saved card from the menu next to card details. Click to "..." and from there select "Delete."</p>
                    <img src="https://assets.apilayer.com/docs/delete-card-mkd89d74jij9k9dnu4.png" alt="Delete Card Option" className="w-100"/>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>

                </article>

                

            </div>

            
            {/* End M-Payment */}

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
