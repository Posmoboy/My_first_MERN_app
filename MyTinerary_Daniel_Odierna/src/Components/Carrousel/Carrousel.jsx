import './Carrousel.css';
import { useState } from 'react';





const ImageCarousel = () => {


  const imagesSlides = [
    {
      src: '/img/ImageCarousel/igor-oliyarnik-Uu5aXBI1oLk-unsplash.jpg',
      alt: 'Venecia'
    },
    {
      src: '/img/ImageCarousel/jared-rice-k3pYa0CDLl0-unsplash.jpg',
      alt: 'Maldivas'
    },
    {
      src: '/img/ImageCarousel/maximilien-t-scharner-QUHV_SRIGAQ-unsplash.jpg',
      alt: 'New York'
    },
    {
      src: '/img/ImageCarousel/shifaaz-shamoon-O0xQcGATOw4-unsplash.jpg',
      alt: 'Hawaii'
    },
    {
      src: '/img/ImageCarousel/shifaaz-shamoon-qtbV_8P_Ksk-unsplash.jpg',
      alt: 'Seychelles'
    },
    {
      src: '/img/ImageCarousel/spencer-davis-Ivwyqtw3PzU-unsplash.jpg',
      alt: 'Petra'
    },
    {
      src: '/img/ImageCarousel/StockSnap_1N5CNCQWR4.jpg',
      alt: 'Paris'
    },
    {
      src: '/img/ImageCarousel/StockSnap_6FK4YLS5LI.jpg',
      alt: 'Los Angeles'
    },
    {
      src: '/img/ImageCarousel/StockSnap_231C6AE6F6.jpg',
      alt: 'Roma'
    },
    {
      src: '/img/ImageCarousel/StockSnap_AQ9PBVW6L6.jpg',
      alt: 'Tokyo'
    },
    {
      src: '/img/ImageCarousel/StockSnap_K3PA5V6P5G.jpg',
      alt: 'New York'
    },
    {
      src: '/img/ImageCarousel/nestor-barbitta-QhQ4WgX77G0-unsplash.jpg',
      alt: 'Buenos Aires '
    }

  ];




  const [currentSlide, setCurrentSlide] = useState(0);





  const handlePrev = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };



  const handleNext = () => {
    if (currentSlide === imagesSlides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }

  };



  return (
    <>
      <div><h2>Popular Mytineraries!</h2></div>
      <div className='CarruselSlideShowContainer'>



        <button className="PrevNextButton" onClick={handlePrev}> Prev  {"<"} </button>

        <div className='imageContainer'>

          <div className='column'>
            <div className="contenedor">
              <img src={imagesSlides[currentSlide].src} alt={imagesSlides[currentSlide].alt} height="150px" width="150px" />
              <div className="texto-encima">{imagesSlides[currentSlide].alt}</div>
            </div>

            <div className="contenedor">
              <img src={imagesSlides[currentSlide + 1].src} alt={imagesSlides[currentSlide + 1].alt} height="150px" width="150px" />
              <div className="texto-encima">{imagesSlides[currentSlide + 1].alt}</div>
            </div>
          </div>

          <div className='column'>
            <div className="contenedor">
              <img src={imagesSlides[currentSlide + 2].src} alt={imagesSlides[currentSlide + 2].alt} height="150px" width="150px" />
              <div className="texto-encima">{imagesSlides[currentSlide + 2].alt}</div>
            </div>

            <div className="contenedor">
              <img src={imagesSlides[currentSlide + 3].src} alt={imagesSlides[currentSlide + 3].alt} height="150px" width="150px" />
              <div className="texto-encima">{imagesSlides[currentSlide + 3].alt}</div>
            </div>
          </div>



        </div>
        <button className="PrevNextButton" onClick={handleNext}>Next {">"}</button>
      </div>

    </>
  );
};

export default ImageCarousel;