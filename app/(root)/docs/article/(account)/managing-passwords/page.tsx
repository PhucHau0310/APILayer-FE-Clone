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



const Zulu = () => {
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

                <span>Managing Passwords</span>
            </div>

            <div className="text-[#677788] mt-10 max-w-screen-lg mx-auto">
                
            

                
        <main id="content" role="main">
            {/* man password */}
            <div className="card border p-4 p-md-7  w-lg-80 mx-lg-auto" data-bis-skin-checked="1">
                <h1 className="text-[#1e2022] font-semibold text-3xl">
                Managing Passwords
                </h1>
                <p>Security is of paramount importance in APILayer. Your passwords are stored as a SHA256 hash, which is not reversible.</p>


            <article>
                <b><h2 className="h3 mt-7 text-black">How is my password stored?</h2></b>
                <p>Security is of  paramount importance in APILayer. Your passwords are stored as a SHA256 hash, which is not reversible.</p>

                <b><h2 className="h3 mt-7 text-black">What if my password is stolen</h2></b>
                <p>If your password is stolen, you must immediately change your password and API keys. You can find how to revoke and generate new API keys <a href=" https://apilayer.com/docs/article/managing-api-keys">here</a>.</p>
                <p>Your credit card details are only shown partially, so those details can not be extracted by malicious parties that had your password.</p>

                <b><h2 className="h3 mt-7 text-black">Changing your password</h2></b>
                <p>Password management is under the <a href="https://apilayer.com/account">Account Page</a> under the "Change Password" section.</p>
                <p>Type your old password, new password, and password confirmation and click the "Change Password" button.</p>
                <img src="https://assets.apilayer.com/docs/change-password-section-abecof982.png"  alt="Change Password Section" className="w-100"/>

                <h2 className="h3 mt-7">Forgot your password?</h2>
                <p>To reset your password click the "Get Started" button and then click the "Forgot Password?" button.</p>
                <img src="https://assets.apilayer.com/docs/sign-in-mod-enzimjses836.png" alt="Sign In" className="w-100"/>
                <p>&nbsp;</p>
                <p>Type your email address and click the "Recover Password" button. Instructions on resetting your password will be sent to your email address.</p>
                <img src="https://assets.apilayer.com/docs/forgot-your-password-keijf83hju.png"  alt="Recover Your Password" className="w-100"/>
                <p>&nbsp;</p>

            </article>

            </div>
        
            
            {/* End man password  */}

            <div className="text-center border-top border-bottom my-6 py-6" id="feedback-block" data-bis_skin_checked="1">
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

export default Zulu;
