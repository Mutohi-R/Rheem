import './footer.scss';
import Logo from "../icons/Logo.jsx";
import Button from "../ui/Button/Button.jsx";

const Footer = () => {
    return (
        <footer className="primary-footer">
            <div className="wrapper">
                <div className="footer-container">
                    <div className="footer-section-one | flow">
                        <Logo />
                        <p>Join our newsletter to stay up to date </p>
                        <div className="subscribe-form | flex gap-2">
                            <input type="text" id="subscribe" name="subscribe" placeholder="Enter your email"/>
                            <Button type={"primary"} icon={true} label={"Subscribe"} />
                        </div>
                        <p className="consent">By subscribing, you agree to our <span>Privacy Policy</span> and consent to recieve updates from our company.</p>
                    </div>

                    <div className="footer-section-two">
                        <div className="quick-links | flow">
                            <h6>Quick links</h6>
                            <div className="grid gap-0">
                                <p>Home</p>
                                <p>About us</p>
                                <p>Contact us</p>
                                <p>Split AC</p>
                                <p>Window AC</p>
                                <p>Cassette AC</p>
                                <p>Top selling ACs</p>
                            </div>
                        </div>
                        <div className="additional | flow">
                            <h6>Additional</h6>
                            <div  className="grid gap-0">
                                <p>Store Locator</p>
                                <p>FAQ</p>
                                <p>Sitemap</p>
                            </div>
                        </div>
                        <div className="follow | flow">
                            <h6>Follow us</h6>
                            <div className="grid gap-0">
                                <p>Facebook</p>
                                <p>Instagram</p>
                                <p>X</p>
                                <p>LinkedIn</p>
                                <p>Youtube</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer-section-three">
                        <p>&copy; 2024 Rheem Cooling. All rights reserved.</p>
                    </div>

                    <div className="footer-section-four">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies Settings</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;