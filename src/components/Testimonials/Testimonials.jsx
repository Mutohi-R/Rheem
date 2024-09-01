import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import TestimonialCard from './TestimonialCard.jsx'
import './testimonials.scss'
import testimonials from '../../data/testimonials.json'

const Testimonials = () => {
    return (
        <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                speed={3000}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
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