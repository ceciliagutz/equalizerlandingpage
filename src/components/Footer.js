import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-left'>
                <p className='logo-footer'>equalizer</p>
            </div>
            <div className='info-footer'>
                <p className='derechos'>All rights reserved © Equalizer 2021</p>
                <p className='contactus'>Have any problem? Contact us via social media or email us at</p>
                <p className='correo'>equalizer@example.com</p>
            </div>
            <div className='footer-right'>
                <div className='social-links'>
                    <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="social-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

