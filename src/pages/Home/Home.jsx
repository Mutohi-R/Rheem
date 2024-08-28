import './Home.scss'
import Navbar from "../../components/Navbar/Navbar.jsx";
import BestsellerSlider from "../../components/BestsellerCard/BestsellerSlider.jsx";
import Button from "../../components/ui/Button/Button.jsx";
import Bullet from "../../components/icons/Bullet.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";
import FaqAccordion from '../../components/Faq/FaqAccordion.jsx';
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";


const Home = () => {
    return (
        <>
            <Navbar/>
            <main>
                <section className="hero">
                    <div className="wrapper">
                        <div className="grid gap-5">
                            <div className="top">
                                <h1 className="">Discover Ultimate Comfort and Efficiency with Rheem Cooling</h1>
                                <div className="hero-image">
                                    <img src="src/assets/hero-img.jpg" alt="a modern kitchen with air conditioning"/>
                                </div>
                                <div className="cta">
                                    <p className="text">Explore our Wide Range of Premium Air Conditioners from Leading
                                        Brands</p>
                                    <Button
                                        type={"primary"}
                                        icon={false}
                                        label={"Shop Now"}
                                    ></Button>
                                </div>
                            </div>
                            {/* <div className="bottom">
                                <div className="">
                                    <p>
                                        At Rheem Cooling, we bring you the finest air conditioning solutions from over
                                        20
                                        top
                                        brands. Whether you need a Split AC, Window AC, or Cassette AC, our experts are
                                        here
                                        to
                                        help you find the perfect fit for your home or office. Experience seamless
                                        shopping
                                        both
                                        online and offline, and enjoy the best of both worlds.
                                    </p>
                                    <Button
                                        type={"outlined"}
                                        icon={false}
                                        label={"Learn More"}
                                    ></Button>
                                </div>
                                <div className="illustration">
                                    <img className="mx-auto" src="src/assets/hero-ill.svg" alt=""/>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

                <section className="bestsellers">
                    <div className="wrapper">
                        <div className="grid gap-4">
                            <div className="block flex flex-wrap align-items-center justify-content-between">
                                <div className="flex align-items-center gap-3">
                                    <Bullet/>
                                    <h2>Our Bestsellers</h2>
                                </div>
                                <div className='desktop-bestsellers-button'>
                                    <Button type={"primary"} icon={true} label={"View All"}></Button>
                                </div>
                            </div>
                            <div className="block">
                                <BestsellerSlider/>
                            </div>
                            <div className='mobile-bestsellers-button'>
                                <Button type={"primary"} icon={true} label={"View All"}></Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="categories">
                    <div className="wrapper">
                        <div className="grid gap-4">
                            <div className="grid justify-content-center gap-2">
                                <div className="flex align-items-center gap-3">
                                    {/*<Bullet/>*/}
                                    <h2 className="text-center">Explorer Our Air Conditioner Categories</h2>
                                    {/*<Bullet/>*/}
                                </div>
                                <p className="mx-auto text-center">Find the perfect cooling solution for your space</p>
                            </div>
                            <Categories/>
                        </div>

                    </div>
                </section>

                <section className="gallery">
                    <div className="wrapper">
                        <div className="grid gap-4">
                            <div className="flex align-items-center gap-3">
                                <Bullet/>
                                <h2>Gallery</h2>
                            </div>
                            <Gallery/>
                        </div>
                    </div>
                </section>

                <section className="testimonials">
                    <div className="wrapper">
                        <div className="testimonials-container | grid gap-4">
                            <div className="block flex align-items-center gap-3">
                                <Bullet/>
                                <h2 className="text-center">What Our Customers Say</h2>
                            </div>
                            <div className="block">
                                <Testimonials/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-us">
                    <div className="wrapper">
                        <div className="about-us-container">
                            <div className="about-us-image">
                                <img src="src/assets/pexels-rickyrecap-1666667%20(1).jpg" alt=""/>
                            </div>
                            <div className="about-us-content | grid gap-3">
                                <h2>Get to Know us</h2>
                                <p>
                                    Founded in 1998, Rheem Cooling has been at the forefront of providing top-quality air conditioning solutions. With over two decades of experience, we pride ourselves on delivering excellence in both product quality and customer service. Our journey began with a simple mission: to bring comfort and efficiency to every home and business.
                                </p>
                                <p>
                                    Our mission is to offer innovative and energy-efficient air conditioning solutions that enhance the comfort and well-being of our customers. We strive to be the trusted partner in creating a cooler and more comfortable environment for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="faq">
                    <div className="wrapper">
                        <div className="grid gap-4">
                            <div className="flex align-items-center gap-3">
                                <Bullet/>
                                <h2>FAQs</h2>
                            </div>
                            <FaqAccordion />
                        </div>
                    </div>
                </section>

                <section className="contact">
                    <div className="wrapper">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <div className="flex align-items-center gap-3">
                                    <Bullet/>
                                    <h2>Get in Touch</h2>
                                </div>
                                <p>We are here to help with whatever you need</p>
                            </div>
                            <Contact/>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Home
