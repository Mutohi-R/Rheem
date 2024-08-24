import './testimonials.scss'
import StarIcon from "../icons/StarIcon.jsx";

const TestimonialCard = ({rating, comment, author}) => {
    return (
        <div className="testimonial-card | grid gap-3">
            <div className="flex align-items-center gap-0">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
            <p className="testimonial-card-comment">{comment}</p>
            <h6>-{author}</h6>
        </div>
    );
};

export default TestimonialCard;