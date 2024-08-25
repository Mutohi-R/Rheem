import Button from "../ui/Button/Button.jsx";
import './bestsellercard.scss';

const BestsellerCard = ({id, inStock, image, name, type}) => {
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
            <div className="flex">
                <div className="tag">
                    <p>{name}</p>
                </div>
                <div className="tag">
                    <p>{type}</p>
                </div>
            </div>
        </div>
    );
};

export default BestsellerCard;