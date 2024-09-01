import { Link } from "react-router-dom";

import "./footer.scss";
import Location from "../Location/Location.jsx";
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
              <input
                type="text"
                id="subscribe"
                name="subscribe"
                placeholder="Enter your email"
              />
              <Button type={"primary"} icon={true} label={"Subscribe"} />
            </div>
            <p className="consent">
              By subscribing, you agree to our <span>Privacy Policy</span> and
              consent to recieve updates from our company.
            </p>
          </div>

          <div className="footer-section-two">
            <div className="quick-links | flow">
              <h6>Quick links</h6>
              <div className="grid gap-0">
                <Link to="/">
                  <p>Home</p>
                </Link>
                <Link to="/shop">
                  <p>Shop</p>
                </Link>
                <Link to="/services">
                  <p>Services</p>
                </Link>
                <Link to="/contact">
                  <p>Contact us</p>
                </Link>
                <Link to="/">
                  <p>Split AC</p>
                </Link>
                <Link to="/">
                  <p>Window AC</p>
                </Link>
                <Link to="/">
                  <p>Cassette AC</p>
                </Link>
              </div>
            </div>
            <div className="additional | flow">
              <h6>Additional</h6>
              <div className="grid gap-0">
                <Link to="/">
                  <p>Store Locator</p>
                </Link>
                <Link to="/">
                  <p>FAQ</p>
                </Link>
                <Link to="/">
                  <p>Sitemap</p>
                </Link>
              </div>
            </div>
            <div className="follow | flow">
              <h6>Follow us</h6>
              <div className="grid gap-0">
                <Link to="/">
                  <p>Facebook</p>
                </Link>
                <Link to="/">
                  <p>Instagram</p>
                </Link>
                <Link to="/">
                  <p>X</p>
                </Link>
                <Link to="/">
                  <p>LinkedIn</p>
                </Link>
                <Link to="/">
                  <p>YouTube</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-section-three">
            <p>&copy; 2024 Rheem Cooling. All rights reserved.</p>
          </div>

          <div className="footer-section-four">
            <Link>
              <p>Privacy Policy</p>
            </Link>
            <Link>
              <p>Terms of Service</p>
            </Link>
            <Link>
              <p>Cookies Settings</p>
            </Link>
          </div>

          <div className="footer-section-five">
            <Location />
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
