import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './bestsellercard.scss';

import BestsellerCard from "./BestsellerCard.jsx";
import bestsellers from '../../data/bestsellers.json';

const BestsellerSlider = () => {
    return (
        <div className="mx-auto">
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                breakpoints={{
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: 3.2,
                        spaceBetween: 20,
                    },
                    1300: {
                        slidesPerView: 4.3,
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
