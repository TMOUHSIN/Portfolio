import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevious = () => {
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    return (
      <div className="carousel">

        <h1><FontAwesomeIcon onClick={goToPrevious} icon={faArrowLeft} /></h1>
        
        <div className="carousel-image">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>

        <h1><FontAwesomeIcon onClick={goToNext} icon={faArrowRight} /></h1>

      </div>
    );
  };
  
  export default ImageCarousel;