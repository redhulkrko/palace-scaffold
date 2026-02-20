import { useRef, useState } from "react";
import { Image, Button } from "react-bootstrap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay, EffectFade } from "swiper/modules";

import "./Slideshow.css";

const Slideshow = ({
  moviesData,
  thumbsSwiper,
  onSlideChange,
  showDescription = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    if (onSlideChange) {
      onSlideChange(swiper);
    }
  };

  return (
    <>
      <div className="slideshow-container">
        <Swiper
          modules={[Navigation, Thumbs, EffectFade]}
          navigation
          loop
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={handleSlideChange}
          className="main-swiper"
        >
          {moviesData.map((movie, i) => (
            <SwiperSlide key={i}>
              <Image
                src={movie.image}
                alt={`Slide ${i + 1}`}
                fluid
                className="hero-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="slider-action-buttons">
          <Button variant="primary" className="slider-btn">
            Book Now
          </Button>
          <Button variant="light" className="slider-btn">
            More Info
          </Button>
        </div>
      </div>

      {showDescription && (
        <div className="slider-description">
          <p>
            <span className="info-badge">NOW SHOWING</span>
            <span className="info-separator">•</span>
            <span className="info-item">SCREEN 1</span>
            <span className="info-separator">•</span>
            <span className="info-item">
              {moviesData[activeIndex]?.rating || "PG"}
            </span>
            <span className="info-separator">•</span>
            <span className="info-item">
              {moviesData[activeIndex]?.runtime || "120"} mins
            </span>
            <span className="info-separator">•</span>
            <span className="info-item">
              {moviesData[activeIndex]?.genres?.join(", ") || "Drama"}
            </span>
          </p>
        </div>
      )}
    </>
  );
};

const ThumbsGallery = ({
  moviesData,
  setThumbsSwiper,
  activeIndex,
  showTitle = true,
}) => {
  return (
    <>
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        direction="vertical"
        loop
        slidesPerView={3}
        spaceBetween={20}
        watchSlidesProgress
        className="thumbs-swiper"
      >
        {moviesData.map((movie, i) => {
          const thumbSrc = movie.image.replace(/\/900\/500/, "/120/100");
          return (
            <SwiperSlide key={i}>
              <Image
                src={thumbSrc}
                alt={`Thumb ${i + 1}`}
                fluid
                className="thumb-image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {showTitle && (
        <div className="ps-0 py-4 pe-5 movie-title d-none d-md-block">
          <h1>{moviesData[activeIndex]?.title}</h1>
          <p className="movie-caption">{moviesData[activeIndex]?.caption}</p>
          <hr className="movie-divider" />
        </div>
      )}
    </>
  );
};

const MovieInfo = ({ moviesData, activeIndex }) => {
  return (
    <div className="movie-info-mobile d-md-none">
      <h1>{moviesData[activeIndex]?.title}</h1>
      <p className="movie-caption">{moviesData[activeIndex]?.caption}</p>
    </div>
  );
};

export default { Slideshow, ThumbsGallery, MovieInfo };
