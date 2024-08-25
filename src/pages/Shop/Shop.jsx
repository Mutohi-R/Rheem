import './shop.scss'
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ProductCardList from '../../components/ProductCard/ProductCardList.jsx';
import XIcon from "../../components/icons/XIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon.jsx";

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

                <section className="shop-filter">
                    <div className="wrapper">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <p className='result-count'>Showing 48 of 48</p>
                                <div className='filter-bar'>
                                    <div className='flex gap-3 flex-wrap align-items-center'>
                                        <div className='filter-button'>
                                            <p>Filters</p>
                                        </div>
                                        <div className="vertical-divider"></div>
                                        <div className='flex gap-1 flex-wrap'>
                                            <div className="filter-tag">
                                                <p>Split</p>
                                                <XIcon/>
                                            </div>
                                            <div className="filter-tag">
                                                <p>White</p>
                                                <XIcon/>
                                            </div>
                                            <div className="filter-tag">
                                                <p>Samsung</p>
                                                <XIcon/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='sort-button'>
                                            <p>Sort By</p>
                                            <PlusIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="horizontal-divider"></div>
                    </div>
                    </div>
                </section>

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