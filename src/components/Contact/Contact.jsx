import './contact.scss';
import Button from "../ui/Button/Button.jsx";
import MailIcon from "../icons/MailIcon.jsx";
import LocationIcon from "../icons/LocationIcon.jsx";
import PhoneIcon from "../icons/PhoneIcon.jsx";

const Contact = () => {
    return (
        <article className="contact-container">
            <form action="" className="contact-form">
                <div className="grid gap-3">
                    <div className="form-group">
                        <p className="form-label">
                            <label htmlFor="name">Name</label>
                        </p>
                        <input type="text" id="name" name="name"/>
                    </div>
                </div>
                <div className="grid gap-3">
                    <div className="form-group">
                        <p className="form-label">
                            <label htmlFor="email">Email</label>
                        </p>
                        <input type="email" id="email" name="email"/>
                    </div>
                </div>
                <div className="grid gap-3">
                    <div className="form-group">
                        <p className="form-label">
                            <label htmlFor="request">Message</label>
                        </p>
                        <textarea name="request" id="request" rows="4"></textarea>
                    </div>
                </div>
                <div className="flex gap-3">
                    <input type="checkbox" id="terms" name="terms"/>
                    <p className="form-label">
                        <label htmlFor="terms">I accept the terms and conditions</label>
                    </p>
                </div>
                <div>
                    <Button label={"Submit"} type={"primary"} icon={true}/>
                </div>
            </form>

            <div className="contact-info">
                <div>
                    <MailIcon/>
                    <h6>Email</h6>
                    <p className="text-neutral-600">support@rheemcooling.com</p>
                </div>
                <div>
                    <LocationIcon/>
                    <h6>Office</h6>
                    <p className="text-neutral-600">123 Cooling Avenue, Suite 100, Cool City, CC 12345</p>
                </div>
                <div>
                    <PhoneIcon/>
                    <h6>Phone</h6>
                    <p className="text-neutral-600">1-800-123-4567</p>
                </div>
            </div>
        </article>
    );
};

export default Contact;