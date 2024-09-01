import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import FaqAccordion from "../../components/Faq/FaqAccordion";
import "./services.scss";
import ConsultIcon from "../../components/icons/ConsultIcon";
import SpannerIcon from "../../components/icons/SpannerIcon";
import MoneyIcon from "../../components/icons/MoneyIcon";
import GearIcon from "../../components/icons/GearIcon";
import Bullet from "../../components/icons/Bullet";

const Services = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="services-hero">
                    <div className="wrapper">
                        <div className="services-hero-container">
                            <div className="services-hero-heading">
                                <h1>
                                    Expert Care for Every Step of Your Cooling
                                    Journey
                                </h1>
                                <p>
                                    Ensuring Comfort, Efficiency, and Peace of
                                    Mind with Our Full Range of Services
                                </p>
                            </div>
                            <div className="services-hero-image">
                                <img
                                    src="src/assets/services-hero-img.jpg"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="services-hero-text">
                            <h2>Comprehensive Air Conditioning Services.</h2>
                            <p>
                                Whether you&apos;re looking for expert advice on
                                selecting the perfect air conditioning system or
                                need reliable maintenance and repair services,
                                Rheem Cooling is here to help. Explore our wide
                                range of services designed to meet all your
                                cooling needs.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="wrapper my-6">
                    <div className="horizontal-rule"></div>
                </div>

                <section className="services-offerings">
                    <div className="wrapper">
                        <div className="services-offerings-container">
                            <ul
                                className="services-offerings-list"
                                role={"list"}
                            >
                                <li className="services-offerings-card">
                                    <div>
                                        <ConsultIcon />
                                    </div>
                                    <h4>Consultation Services</h4>
                                    <div className="horizontal-rule"></div>
                                    <p>
                                        Our experienced consultants help you
                                        navigate the wide range of air
                                        conditioning options to find the perfect
                                        fit for your home or business. We
                                        consider factors like room size, budget,
                                        and energy efficiency to recommend the
                                        best system for you
                                    </p>
                                </li>
                                <li className="services-offerings-card">
                                    <div>
                                        <SpannerIcon />
                                    </div>
                                    <h4>Installation & Setup</h4>
                                    <div className="horizontal-rule"></div>
                                    <p>
                                        Rheem Cooling provides professional
                                        installation services, ensuring your air
                                        conditioner is installed correctly and
                                        efficiently. Our technicians are trained
                                        to handle all types of units, so you can
                                        rest assured your system will be up and
                                        running in no time.
                                    </p>
                                </li>
                                <li className="services-offerings-card">
                                    <div>
                                        <GearIcon />
                                    </div>
                                    <h4>Maintenance & Repairs</h4>
                                    <div className="horizontal-rule"></div>
                                    <p>
                                        Keep your air conditioner in top shape
                                        with Rheem Cooling’s maintenance and
                                        repair services. Regular tune-ups and
                                        prompt repairs can extend the life of
                                        your unit and improve its efficiency.
                                    </p>
                                </li>
                                <li className="services-offerings-card">
                                    <div>
                                        <MoneyIcon />
                                    </div>
                                    <h4>Financing Options</h4>
                                    <div className="horizontal-rule"></div>
                                    <p>
                                        Get the air conditioning system you need
                                        without the financial stress. Rheem
                                        Cooling offers flexible financing
                                        options that make it easier to afford
                                        your new AC unit.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="reasons">
                    <div className="wrapper">
                        <div className="reasons-container">
                            <div className="grid gap-5">
                                <h2>Why Choose Us?</h2>
                                <ul className="grid gap-3" role={"list"}>
                                    <li>
                                        <div className="flex align-items-center gap-1">
                                            <Bullet />
                                            <h6>Certified Technicians</h6>
                                        </div>
                                        <p>
                                            Our team consists of highly trained
                                            and certified technicians who are
                                            experts in air conditioning.
                                        </p>
                                    </li>
                                    <li>
                                        <div className="flex align-items-center gap-1">
                                            <Bullet />
                                            <h6>Fast Service</h6>
                                        </div>
                                        <p>
                                            We pride ourselves on providing
                                            quick and efficient service to keep
                                            you comfortable.
                                        </p>
                                    </li>
                                    <li>
                                        <div className="flex align-items-center gap-1">
                                            <Bullet />
                                            <h6>Trusted Brands</h6>
                                        </div>
                                        <p>
                                            We partner with top air conditioning
                                            brands to bring you reliable and
                                            efficient products.
                                        </p>
                                    </li>
                                    <li>
                                        <div className="flex align-items-center gap-1">
                                            <Bullet />
                                            <h6>Customer Satisfaction</h6>
                                        </div>
                                        <p>
                                            Our commitment to customer
                                            satisfaction is unwavering. We go
                                            above and beyond to meet your needs.
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="reasons-image">
                                <img src="src/assets/reasons-img.jpg" alt="" />
                            </div>
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

                <section id="contact" className="contact">
                    <div className="wrapper">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <div className="flex align-items-center gap-3">
                                    <Bullet />
                                    <h2>Get in Touch</h2>
                                </div>
                                <p>
                                    We are here to help with whatever you need
                                </p>
                            </div>
                            <Contact />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Services;
