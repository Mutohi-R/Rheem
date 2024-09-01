import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactSection from "../../components/Contact/Contact";
import FaqAccordion from "../../components/Faq/FaqAccordion";
import Bullet from "../../components/icons/Bullet";

const Contact = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="contact">
                    <div className="wrapper">
                        <div className="grid gap-6">
                            <h1>Contact Us</h1>
                            <ContactSection />
                        </div>
                    </div>
                </section>

                <section className="faq">
                    <div className="wrapper">
                        <div className="grid gap-4">
                            <div className="flex align-items-center gap-3">
                                <Bullet />
                                <h2>FAQs</h2>
                            </div>
                            <FaqAccordion />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Contact;
