import TestimonialCard from './TestimonialCard.jsx'
import './testimonials.scss'
import testimonials from '../../data/testimonials.json'

const Testimonials = () => {
    return (
        <article className="testimonial-container">
            {
                testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        rating={testimonial.rating}
                        comment={testimonial.comment}
                        author={testimonial.author}
                    />
                ))
            }
        </article>
    );
};

export default Testimonials;