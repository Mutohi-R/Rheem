import './shop.scss'
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Shop = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="shop-hero">
                    <div className="wrapper">
                        <div>
                            <div>
                                <img src="src/assets/shop-hero-img.jpg" alt=""/>
                            </div>
                            <h1>Explore our Premium Collection</h1>
                            <p>Find the perfect Air Conditioner to Suit Your Needs</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Shop;