import PropTypes from 'prop-types';
import './testimonials.scss'
import StarIcon from "../icons/StarIcon.jsx";

const TestimonialCard = ({rating, comment, author}) => {
    return (
        <div className="testimonial-card | grid gap-3">
            <div className="flex align-items-center gap-0">
                {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} fill={index < rating ? "filled" : "none"} color={"#b5d39f"}/>
                ))}
            </div>
            <p className="testimonial-card-comment">{comment}</p>
            <h6>-{author}</h6>
        </div>
    );
};

// Prop validation
TestimonialCard.propTypes = {
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default TestimonialCard;