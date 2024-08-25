import './productcard.scss'
import StarIcon from "../icons/StarIcon.jsx";

const ProductCard = () => {
    return (
        <div className="product-card | grid gap-1">
            <div className="product-image">
                <img src="src/assets/10,000%20BTU%20DUAL%20Inverter%20ENERGY%20STAR%20Window%20Air%20Conditioner/10,000%20BTU%20DUAL%20Inverter%20ENERGY%20STAR%20Window%20Air%20Conditioner%20-%201.png" alt=""/>
            </div>
            <div className="product-details | grid gap-1">
                <div className='flex gap-4'>
                    <p className='product-name'>10,000 BTU DUAL Inverter ENERGY STAR Window Air Conditioner</p>
                    <p className="h6">$499.99</p>
                </div>
                <div className="product-rating">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;