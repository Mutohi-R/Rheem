import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import BestsellerCard from "./BestsellerCard.jsx";
import bestsellers from '../../data/bestsellers.json';

const BestsellerSlider = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={4.2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
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
    )
}

export default BestsellerSlider
