import { useRef, useState, useEffect } from "react";

import ProductCard from "./ProductCard.jsx";
import ProductModal from "../ProductModal/ProductModal.jsx";
import Filter from "../Filter/Filter.jsx";
import products from "../../data/products.json";

const ProductCardList = () => {
    // State to manage the currently applied filters
    const [filters, setFilters] = useState({
        category: [],
        brand: [],
        tonnage: [],
        color: [],
        priceRange: [0, 1000],
    });

    // State to store the list of products after applying filters
    const [filteredProducts, setFilteredProducts] = useState(products);

    // UseEffect hook to update filtered products when filters change
    useEffect(() => {
        const applyFilters = () => {
            let updatedProducts = products;

            // Filter by category
            if (filters.category.length > 0) {
                updatedProducts = updatedProducts.filter((product) =>
                    filters.category.includes(product.type)
                );
            }

            // Filter by brand
            if (filters.brand.length > 0) {
                updatedProducts = updatedProducts.filter((product) =>
                    filters.brand.includes(product.brand)
                );
            }

            // Filter by tonnage
            if (filters.tonnage.length > 0) {
                updatedProducts = updatedProducts.filter((product) =>
                    filters.tonnage.includes(product.tonnage)
                );
            }

            // Filter by color
            if (filters.color.length > 0) {
                updatedProducts = updatedProducts.filter((product) =>
                    filters.color.includes(product.color)
                );
            }

            // Filter by price range
            updatedProducts = updatedProducts.filter(
                (product) =>
                    product.price >= filters.priceRange[0] &&
                    product.price <= filters.priceRange[1]
            );

            // Update the filtered products state
            setFilteredProducts(updatedProducts);
        };

        applyFilters();
    }, [filters]);

    // Function to reset all filters to their default values
    const resetFilters = () => {
        setFilters({
            category: [],
            brand: [],
            tonnage: [],
            color: [],
            priceRange: [0, 1000],
        });
    };

    // Ref for the product modal dialog
    const productModal = useRef(null);

    // State to store the ID of the selected product
    const [selectedProductId, setSelectedProductId] = useState(null);

    // Function to open the product modal with the selected product details
    const openProductModal = (id) => {
        setSelectedProductId(id);
        if (productModal.current) {
            productModal.current.showModal();
        }
    };

    // Function to close the product modal and reset the selected product ID
    const closeProductModal = () => {
        if (productModal.current) {
            productModal.current.close();
        }
        setSelectedProductId(null);
    };

    return (
        <div className="grid gap-6">
            {/* Filter component to display filter options */}
            <Filter
                filters={filters}
                setFilters={setFilters}
                resetFilters={resetFilters}
            />
            <article className="product-card-list">
                {/* Display a message if no products are found */}
                {filteredProducts.length === 0 && (
                    <p>Sorry, no products found</p>
                )}

                {/* map through the filtered products and display each product card */}
                {filteredProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        rating={product.rating}
                        onClick={() => openProductModal(product.id)}
                    />
                ))}
            </article>

            {/* Product modal dialog */}
            <dialog
                ref={productModal}
                id="product-modal"
                className="product-modal"
            >
                {/* Render the ProductModal component only if a product is selected */}
                {selectedProductId && (
                    <ProductModal
                        productId={selectedProductId}
                        onClose={closeProductModal}
                    />
                )}
            </dialog>
        </div>
    );
};

export default ProductCardList;
