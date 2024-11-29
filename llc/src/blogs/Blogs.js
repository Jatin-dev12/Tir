// Import React and Swiper
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importing Swiper's CSS
import 'swiper/css/pagination'; // For pagination styles
import 'swiper/css/navigation'; // For navigation styles
// Import the icon you want to use
import { FaBeer } from 'react-icons/fa'; // Example icon (replace with the one you need)

const SwiperSlider = () => {
  return (
    <section className="swiper-section">
      <Swiper
        spaceBetween={50} // Space between slides
        slidesPerView={1} // Number of slides visible at once
        loop={true} // Loop through slides
        pagination={{ clickable: true }} // Pagination
        navigation // Navigation arrows
      >
        <SwiperSlide>
          <div className="slider-item">
            <div className="image-container">
              <img src="https://via.placeholder.com/300" alt="Image 1" />
            </div>
            <div className="text-container">
              <p>Item 1</p>
              <div className="icon-container">
                <div className="circle-icon">
                  <FaBeer />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item">
            <div className="image-container">
              <img src="https://via.placeholder.com/300" alt="Image 2" />
            </div>
            <div className="text-container">
              <p>Item 2</p>
              <div className="icon-container">
                <div className="circle-icon">
                  <FaBeer />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </section>
  );
};

export default SwiperSlider;
