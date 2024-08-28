import PropTypes from "prop-types";
import products from "../../data/products.json";

import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";
import StarIcon from "../icons/StarIcon";
import XIcon from "../icons/XIcon";
import Button from "../ui/Button/Button";

import "./productmodal.scss";

const ProductModal = ({ productId, onClose }) => {

    const product = products.find((product) => product.id === productId);
    if (!product) {
        return null;
    }

    return (
        <div className="product-modal-container">
            <button onClick={onClose} className="close-button">
                <XIcon className="x-icon" />
            </button>
            <div className="product-modal-image">
                <div className="main-image">
                    <img
                        src={product.image}
                        alt={product.name}
                    />
                </div>
            </div>
            <div className="product-modal-content">
                <p className="product-modal-label">{product.type} AC</p>
                <h3>{product.name}</h3>
                <div className="flex align-items-center gap-4">
                    <div className="flex align-items-center gap-0">
                        {[...Array(5)].map((_, index) => (
                        <StarIcon key={index} fill={index < product.rating ? "filled" : "none"} color={"#FB8684"}/>
                    ))}
                    </div>
                    <p className="reviews-label">{product.review_count} reviews</p>
                </div>
                <p>{product.description}</p>
                <div className="flex align-items-center gap-6">
                    <div className="grid gap-1">
                        <p className="product-modal-label">Price</p>
                        <p className="h4">${product.price}</p>
                    </div>
                    <div className="grid gap-1">
                        <p className="product-modal-label">Quantity</p>
                        <div className="quantity-modifier">
                            <MinusIcon />
                            <p className="count fs-5 fw-bold">1</p>
                            <PlusIcon />
                        </div>
                    </div>
                </div>
                <div className="grid gap-1">
                    <div className="product-modal-description-group">
                        <p className="product-modal-label">Brand</p>
                        <p className="product-modal-features">{product.brand}</p>
                    </div>
                    <div className="product-modal-description-group">
                        <p className="product-modal-label">Tonnage</p>
                        <p className="product-modal-features">{product.tonnage} Ton</p>
                    </div>
                    <div className="product-modal-description-group">
                        <p className="product-modal-label">Consumption</p>
                        <p className="product-modal-features">{product.consumption}W</p>
                    </div>
                    <div className="product-modal-description-group">
                        <p className="product-modal-label">Features</p>
                        <div>
                            {
                                product.features.map((feature, index) => (
                                    <span className="product-modal-features" key={index}>{feature}{index < product.features.length - 1 ? ", " : ""}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product-modal-description-group">
                        <p className="product-modal-label">Color</p>
                        <p className="product-modal-features">{product.color}</p>
                    </div>
                </div>
                <Button type={"outlined"} icon={false} label={"Add to Cart"} />
            </div>
        </div>
    );
};

ProductModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
};

export default ProductModal;