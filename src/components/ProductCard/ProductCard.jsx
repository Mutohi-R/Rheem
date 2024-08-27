import PropTypes from 'prop-types';
import './productcard.scss'
import StarIcon from "../icons/StarIcon.jsx";

const ProductCard = ({ name, price, image, rating, onClick }) => {
    return (
        <div onClick={onClick} className="product-card | grid gap-1">
            <div className="product-image">
                <img src={image} alt={name}/>
            </div>
            <div className="product-details | grid gap-1">
                <div className='flex gap-4 justify-content-between'>
                    <p className='product-name'>{name}</p>
                    <p className="h6">${price}</p>
                </div>
                <div className="product-rating">
                    {[...Array(5)].map((_, index) => (
                        <StarIcon key={index} fill={index < rating ? "filled" : "none"} color={"#FB8684"}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Prop validation
ProductCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ProductCard;