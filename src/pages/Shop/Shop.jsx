import './shop.scss'
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ProductCardList from '../../components/ProductCard/ProductCardList.jsx';
// import Filter from '../../components/Filter/Filter.jsx';

const Shop = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="shop-hero">
                    <div className="wrapper">
                        <div className='shop-hero-container'>
                            <div className='shop-hero-heading'>
                                <h1>Explore our Premium Collection</h1>
                                <p>Find the perfect Air Conditioner to Suit Your Needs</p>
                            </div>
                            <div className='shop-hero-image'>
                                <img src="src/assets/shop-hero-img.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="shop-filter">
                    <div className="wrapper">
                        <Filter />
                    </div>
                </section> */}

                <section className="product-listing">
                    <div className="wrapper">
                        <ProductCardList />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Shop;