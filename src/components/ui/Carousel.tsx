import React, { useState } from 'react';

interface CarouselProps {
  images: string[];
  alt: string;
  className?: string;
  isReversed?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  alt,
  className = '',
  isReversed = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!images || images.length === 0) {
    return <div className="carousel-placeholder">No images available</div>;
  }

  return (
    <div className={`project-carousel ${className}`}>
      <button
        className="carousel-btn carousel-btn-prev"
        onClick={prevImage}
        aria-label="Previous image"
      >
        {isReversed ? '❮' : '❮'}
      </button>
      
      <div className="carousel-container">
        <img
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      
      <button
        className="carousel-btn carousel-btn-next"
        onClick={nextImage}
        aria-label="Next image"
      >
        {isReversed ? '❯' : '❯'}
      </button>
    </div>
  );
};

export default Carousel;