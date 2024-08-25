import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './bestsellercard.scss';

import BestsellerCard from "./BestsellerCard.jsx";
import bestsellers from '../../data/bestsellers.json';

const BestsellerSlider = () => {
    return (
        <div className="mx-auto">
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
                {bestsellers.map((bestseller, index) => (
                    <SwiperSlide key={index}>
                        <BestsellerCard
                            id={bestseller.id}
                            inStock={bestseller.inStock}
                            image={bestseller.image}
                            name={bestseller.name}
                            type={bestseller.type}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default BestsellerSlider
