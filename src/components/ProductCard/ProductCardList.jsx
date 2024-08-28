import { useRef, useState, useEffect } from "react";

import ProductCard from "./ProductCard.jsx";
import ProductModal from "../ProductModal/ProductModal.jsx";
import Filter from "../Filter/Filter.jsx";
import products from "../../data/products.json";

const ProductCardList = () => {
    const [filters, setFilters] = useState({
        category: [],
        brand: [],
        tonnage: [],
        color: [],
        priceRange: [0, 1000],
    });

    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        const applyFilters = () => {
            let updatedProducts = products;

            if (filters.category.length > 0) {
                updatedProducts = updatedProducts.filter((product) =>
                    filters.category.includes(product.type)
                );
            }

            if (filters.brand.length > 0) {
                updatedProducts = updatedProducts.filter((product) =>
                    filters.brand.includes(product.brand)
                );
            }

            if (filters.tonnage.length > 0) {
                updatedProducts = updatedProducts.filter((product) =>
                    filters.tonnage.includes(product.tonnage)
                );
            }

            if (filters.color.length > 0) {
                updatedProducts = updatedProducts.filter((product) =>
                    filters.color.includes(product.color)
                );
            }

            updatedProducts = updatedProducts.filter(
                (product) =>
                    product.price >= filters.priceRange[0] &&
                    product.price <= filters.priceRange[1]
            );

            setFilteredProducts(updatedProducts);
        };

        applyFilters();
    }, [filters]);

    const resetFilters = () => {
        setFilters({
            category: [],
            brand: [],
            tonnage: [],
            color: [],
            priceRange: [0, 1000],
        });
    };

    const productModal = useRef(null);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const openProductModal = (id) => {
        setSelectedProductId(id);
        if (productModal.current) {
            productModal.current.showModal();
        }
    };

    const closeProductModal = () => {
        if (productModal.current) {
            productModal.current.close();
        }
        setSelectedProductId(null);
    };

    return (
        <div className="grid gap-6">
            <Filter filters={filters} setFilters={setFilters} resetFilters={resetFilters} />
            <article className="product-card-list">
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
            <dialog
                ref={productModal}
                id="product-modal"
                className="product-modal"
            >
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
