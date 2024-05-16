import React, { useState } from 'react'
import './slider.css'
import SliderItem from './sliderItem'
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

const sliders = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlideSubmit=()=>{
        if(currentSlide===0) setCurrentSlide(2)
        else setCurrentSlide(currentSlide-1)
    }
    const nextSlideSubmit=()=>{
        if(currentSlide===2) setCurrentSlide(0)
        else setCurrentSlide(currentSlide+1)
    }

    return (
        <div><section className="slider">
            <div className="slider-elements">
                {currentSlide === 0 && <SliderItem imageSrc='img/slider/slider1.jpg' />}
                {currentSlide === 1 && <SliderItem imageSrc='img/slider/slider2.jpg' />}
                {currentSlide === 2 && <SliderItem imageSrc='img/slider/slider3.jpg' />}
                <div className="slider-buttons">
                    <button onClick={prevSlideSubmit}>
                        <FaCaretLeft style={{ fontSize: '30px' }} />
                    </button>
                    <button onClick={nextSlideSubmit}>
                        <FaCaretRight style={{ fontSize: '30px' }} />
                    </button>
                </div>
                <div className="slider-dots">
                    <button className={`slider-dot ${currentSlide===0 ? 'active':''}`} onClick={()=>{setCurrentSlide(0)}}>
                        <span></span>
                    </button>
                    <button className={`slider-dot ${currentSlide===1 ? 'active':''}`} onClick={()=>{setCurrentSlide(1)}} >
                        <span></span>
                    </button>
                    <button className={`slider-dot ${currentSlide===2 ? 'active':''}`} onClick={()=>{setCurrentSlide(2)}}>
                        <span></span>
                    </button>
                </div>
            </div>
        </section></div>
    )
}

export default sliders