import React from "react";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from "../Icon";
import 'swiper/css/navigation';
import 'swiper/css';

const Slider = ({slides}) => {
    console.log('slider', slides)
    return (
        <Swiper
            modules={[Navigation]}
            navigation={{
                nextEl: ".next",
                prevEl: ".prev"
            }}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
        >
            <button className={'prev'}><Icon icon={'simpleArrowLeft'} width={'25px'} height={'25px'}/></button>
            {slides.map((item, index) => <SwiperSlide key={index}>{item}</SwiperSlide>)}
            <button className={'next'}><Icon icon={'simpleArrowRight'} width={'25px'} height={'25px'}/></button>
        </Swiper>
    )
}

export default Slider

