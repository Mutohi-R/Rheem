import PropTypes from 'prop-types'

import Button from "../ui/Button/Button.jsx";
import './bestsellercard.scss';

const BestsellerCard = ({inStock, image, name}) => {
    return (
        <div className="bestseller-card">
            <div className="flex align-items-center justify-content-between flex-wrap">
                <Button
                    icon={true}
                    type={"outlined"}
                    label="View Product"
                ></Button>
                <p className="stock | text-neutral-500 text-neutral-0">{inStock ? "In Stock" : "No Stock"}</p>
            </div>
            <div className="image">
                <img src={image} alt=""/>
            </div>
            <div className="flex align-items-center">
                <div className="tag">
                    <p>{name}</p>
                </div>
                {/* <div className="tag">
                    <p>{type}</p>
                </div> */}
            </div>
        </div>
    );
};

BestsellerCard.propTypes = {
    id: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default BestsellerCard;