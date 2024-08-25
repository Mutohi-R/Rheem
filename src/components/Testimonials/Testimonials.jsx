import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import TestimonialCard from './TestimonialCard.jsx'
import './testimonials.scss'
import testimonials from '../../data/testimonials.json'

const Testimonials = () => {
    return (
        <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1300: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard
                            key={index}
                            rating={testimonial.rating}
                            comment={testimonial.comment}
                            author={testimonial.author}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        // <article className="testimonial-container">
        //     {
        //         testimonials.map((testimonial, index) => (
        //             <TestimonialCard
        //                 key={index}
        //                 rating={testimonial.rating}
        //                 comment={testimonial.comment}
        //                 author={testimonial.author}
        //             />
        //         ))
        //     }
        // </article>
    );
};

export default Testimonials;